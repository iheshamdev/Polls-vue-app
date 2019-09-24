<template>
  <div class="container">
    <!-- My header -->
    <CustomHeader />
    <!-- First paint -->
    <FirstPaint />
  </div>
</template>

<script>
import CustomHeader from "../components/shared/Header";
import FirstPaint from "../components/home-page/FirstPaint";

export default {
  components: {
    CustomHeader,
    FirstPaint
  },
  data() {
    return {
      name: "Hesham"
    };
  }
};
</script>

<style scoped lang="scss">
</style>
