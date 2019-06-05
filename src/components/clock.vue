<template>
  <div class="clock-container" @mouseenter="kickstart()" @mouseleave="stopAnimation()">
    <div class="clock-animation"></div>
    <div class="clock-animation"></div>
  </div>
</template>

<script>
import clock_inner from "../assets/clock-inner.json";
import clock_outer from "../assets/clock-outer.json";

import * as lottie from "lottie-web";
// const lottie_api = require("lottie-api");
// import * as lottie_api from "lottie-api";

export default {
  name: "clock",
  data: () => ({
    // elt: null,
    // animData: null,
    speed: 1,
    // animAPI: null,
    loop: true,
    inner: null,
    outer: null,
    playBoth: false,
    innerIsPlaying: false,
    outerIsPlaying: false,
    isReady: false,
    autoplay: false,
    innerIndex: -1,
    innerMarkers: []
  }),
  computed: {
    app() {
      return this.$root.$children[0];
    },
    innerSegments() {
      let mirrors = [];
      if (this.innerMarkers && this.innerMarkers.length) {
        this.innerMarkers.forEach((marker, i, v) => {
          if (i < v.length - 1) {
            const nextmarker = v[i + 1];
            mirrors.push({
              forward: [marker, nextmarker],
              reverse: [nextmarker, marker]
            });
          }
        });
      }
      return mirrors;
    }
  },
  mounted() {
    // this.elt = this.$el.children[0];
    this.init();
    // this.app.clock = this;
  },
  methods: {
    kickstart() {
      this.count = this.count + 1;
      this.play();
    },
    stopAnimation() {
      if (this.outerIsPlaying) {
        this.outer.loop = false;
        this.inner.loop = true;
      } else if (this.innerIsPlaying) {
        this.outer.loop = true;
        this.inner.loop = false;
      }
    },
    init() {
      this.inner = this.buildAnimation(clock_inner, this.$el.children[0], true);
      this.outer = this.buildAnimation(clock_outer, this.$el.children[1], true);
      this.inner.addEventListener("DOMLoaded", () => {
        this.isReady = true;
      });
      this.inner.addEventListener("complete", this.innerIsDone);
      this.outer.addEventListener("complete", this.outerIsDone);
      this.innerMarkers = this.inner.animationData.markers;
      console.log(this.innerSegments);
    },
    innerIsDone() {
      // this.$emit("done");
      console.log("Inner is done");
      console.log(this.inner);
    },
    outerIsDone() {
      console.log("Outer is done");
      console.log(this.outer);
      // this.$emit("done");
    },
    switchClocks() {
      this.outerIsPlaying = !this.outerIsPlaying;
      this.innerIsPlaying = !this.innerIsPlaying;
    },
    play() {
      if (this.playBoth) {
        this.inner.play();
        this.outer.play();
      } else if (!this.outerIsPlaying) {
        this.outer.play();
        this.outerIsPlaying = true;
        this.inner.pause();
        this.innerIsPlaying = false;
      } else {
        this.inner.play();
        this.innerIsPlaying = true;
        this.outer.pause();
        this.outerIsPlaying = false;
      }
    },
    pause() {
      this.outer.pause();
    },
    buildAnimation(file, elt, loop) {
      const self = this;
      const animData = {
        wrapper: elt,
        animType: "svg",
        loop: loop,
        prerender: true,
        autoplay: false
      };
      animData.animationData = file;
      return lottie.loadAnimation(animData);
    }
  }
};
</script>

<style>
.clock-container {
  transform: rotate(0deg);
  /* border: 2px solid red; */
  width: 400px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(22, 26, 27, 0.5);
}

.anim-main {
  fill: var(--color-main);
  stroke: var(--color-main);
}
.clock-animation {
  left: calc(50% - 150px);
  position: absolute;
  width: 300px;
}
</style>
