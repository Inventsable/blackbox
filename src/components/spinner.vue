<template>
  <div class="bg-text-row">{{activeFrame}}</div>
</template>

<script>
export default {
  name: "spinner",
  props: {
    model: Object
  },
  computed: {
    activeFrame() {
      return this.isDefault
        ? this.default.frames[this.activeIndex]
        : this.model.frames[this.activeIndex];
    },
    isDefault() {
      return !this.model;
    }
  },
  data: () => ({
    activeIndex: 0,
    timer: null,
    default: {
      interval: 80,
      frames: ["⠋", "⠙", "⠚", "⠞", "⠖", "⠦", "⠴", "⠲", "⠳", "⠓"]
    }
  }),
  async mounted() {
    if (!this.timer) this.timer = await this.createTimer();
    this.isMounted = true;
  },
  methods: {
    getRandomNumberBetween(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    createTimer() {
      const self = this;
      return new Promise((resolve, reject) => {
        this.timer = setInterval(
          () => {
            this.activeIndex = this.incrementIndex(this.activeIndex);
          },
          this.isDefault ? this.default.interval : this.model.interval
        );
        resolve();
      });
    },
    incrementIndex(i) {
      return i <
        (this.isDefault
          ? this.default.frames.length
          : this.model.frames.length) -
          1
        ? i + 1
        : 0;
    }
  }
};
</script>

<style>
.bg-text-row {
  white-space: pre;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.1);
}
</style>
