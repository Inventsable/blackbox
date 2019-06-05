<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    msg: "Hello"
  })
};
</script>


<style>
:root {
  font-family: "Source Code Pro", monospace;
  background-color: #1b1b1b;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0px;
  left: 0px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: white;
  font-size: 14px;
}

.bgSpinners {
  position: absolute;
  z-index: 0;
  top: 0px;
  left: 0px;
}
</style>
