<template>
  <div class="container">
    <FirstPaint />
    <FeaturesCards />
    <VoteExample />
    <HomeFooter />
  </div>
</template>

<script>
import FirstPaint from "../components/home-page/FirstPaint";
import FeaturesCards from "../components/home-page/FeaturesCards";
import VoteExample from "../components/home-page/VoteExample";
import HomeFooter from "../components/home-page/HomeFooter";

export default {
  components: {
    FirstPaint,
    FeaturesCards,
    VoteExample,
    HomeFooter
  }
};
</script>

<style scoped lang="scss">
</style>
