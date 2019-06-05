<template>
  <div class="home">
    <bgtext/>
    <div class="clockOver">
      <clock/>
    </div>
  </div>
</template>

<script>
import clock from "@/components/clock.vue";
import bgtext from "@/components/bgtext.vue";

export default {
  name: "home",
  components: {
    bgtext,
    clock
  }
};
</script>

<style>
.clockOver {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 98vw;
  height: 98vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
