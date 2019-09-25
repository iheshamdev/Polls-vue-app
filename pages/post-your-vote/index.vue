<template>
  <div class="contaciner">
    <CustomHeader />
    <PostYourVote />
  </div>
</template>

<script>
import CustomHeader from "../../components/shared/Header";
import PostYourVote from "../../components/post-you-vote/PostYourVote";

export default {
  components: {
    CustomHeader,
    PostYourVote
  },
  data() {
    return {
      name: "Hesham"
    };
  }
};
</script>

<style lang="scss" scoped>
</style>