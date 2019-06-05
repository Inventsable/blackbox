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
  }),
  computed: {
    isMobile() {
      return (
        typeof window.orientation !== "undefined" ||
        navigator.userAgent.indexOf("IEMobile") !== -1
      );
    }
  }
};
</script>


<style>
:root {
  --color-text: #fff;
  --color-main: #a1a1a1;
  --color-accent: #525252;

  --color-bg: #161a1b;
  --color-bg-light: #171b1c;

  --color-scrollbar: #2a2a2a;
  --color-scrollbar-thumb: #3e3e3e;
  --color-scrollbar-thumb-hover: #525252;
  --color-selection: #46a0f5;
  --color-selection-dark: #3273af;
  --color-error: #e53935;

  font-family: "Source Code Pro", monospace;
  background-color: var(--color-bg);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0px;
  left: 0px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: var(--color-text);
  font-size: 14px;
}

svg {
  width: 100%;
}

.bgSpinners {
  position: absolute;
  z-index: 0;
  top: 0px;
  left: 0px;
}
</style>
