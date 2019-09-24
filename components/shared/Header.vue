<template>
  <header>
    <a href="./index.html" class="logo">
      <img src="@/assets/images/logo.svg" alt="Polls logo" />
    </a>
    <div class="stc-drawer-plugin-element"></div>
  </header>
</template>


<script
    data-stc-drawer-language="ar"
    data-stc-drawer-opening-direction="right"
    src="https://stc-drawer-plugin-cdn.netlify.com/dist/stc-drawer-plugin.min.js">
</script>

<script>
export default {
  data() {
    return {
      name: "STC"
    };
  },
  mounted() {
    const drawer = document.createElement("script");
    drawer.setAttribute(
      "src",
      "https://stc-drawer-plugin-cdn.netlify.com/dist/stc-drawer-plugin.min.js"
    );
    drawer.setAttribute("data-stc-drawer-language", "ar");
    drawer.setAttribute("data-stc-drawer-opening-direction", "right");
    document.head.appendChild(drawer);
  }
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 112px;
  padding: 0 31px;
  background-color: #fff;
  position: relative;
  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>