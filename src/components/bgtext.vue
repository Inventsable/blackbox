<template>
  <div class="bg-text">
    <spinner v-for="(line, key) in maskRows" :key="key" :model="line"/>
  </div>
</template>

<script>
import spinner from "./spinner";
import getTextWidth from "../utils/getTextWidth";
import getRandomChars from "../utils/getRandomChars";
import db from "../firebase/init";

export default {
  name: "bgtext",
  components: {
    spinner
  },
  data: () => ({
    width: null,
    height: null,
    maskRows: []
  }),
  computed: {
    singleChar() {
      return getTextWidth("a", "14px Source Code Pro");
    },
    charsPerRow() {
      return this.width && this.singleChar
        ? Math.floor(this.width / this.singleChar)
        : null;
    },
    charsPerCol() {
      return this.height && this.singleChar
        ? Math.floor(this.height / 18)
        : null;
    }
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);

    this.handleResize({
      target: {
        innerWidth: window.innerWidth - 16,
        innerHeight: window.innerHeight
      }
    });

    db.collection("users")
      .get()
      .then(snapshot => {
        console.log(snapshot);
      });
  },
  methods: {
    setRandomBG() {
      this.maskRows = [];
      for (let i = 0; i < this.charsPerCol; i++)
        this.maskRows.push(this.getRandomRow());
    },
    getRandomRow() {
      return getRandomChars(this.charsPerRow);
    },
    handleResize(evt) {
      this.width = evt.target.innerWidth;
      this.height = evt.target.innerHeight;

      console.log(`${this.width} x ${this.height}`);
      console.log(
        `${this.width} / ${this.singleChar}px ?== ${this.charsPerRow}`
      );
      this.setRandomBG();
    },
    getCharsPerRow(width) {
      return this.singleChar ? Math.floor(width / this.singleChar) : null;
    }
  }
};
</script>

<style>
.bg-text {
  overflow: hidden;
}
</style>
