<template>
  <div>
    <customHeader />
    <nuxt />
  </div>
</template>

<script>
import CustomHeader from "../components/shared/Header";
export default {
  components: {
    CustomHeader
  }
};
</script>