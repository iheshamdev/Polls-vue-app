<template>
  <div class="container">
    <!-- My header -->
    <CustomHeader />
    <!-- First paint -->
    <FirstPaint />
    <!-- features cards -->
    <FeaturesCards />
    <!-- vote example -->
    <VoteExample />
    <!-- footer -->
    <HomeFooter />
  </div>
</template>

<script>
import CustomHeader from "../components/shared/Header";
import FirstPaint from "../components/home-page/FirstPaint";
import FeaturesCards from "../components/home-page/FeaturesCards";
import VoteExample from "../components/home-page/VoteExample";
import HomeFooter from "../components/home-page/HomeFooter";

export default {
  components: {
    CustomHeader,
    FirstPaint,
    FeaturesCards,
    VoteExample,
    HomeFooter
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
