<template>
  <div class="contaciner">
    <CustomHeader />
    <CreateNewPoll />
  </div>
</template>

<script>
import CustomHeader from "../../components/shared/Header";
import CreateNewPoll from "../../components/create-new-poll/CreateNewPoll";

export default {
  components: {
    CustomHeader,
    CreateNewPoll
  }
};
</script>

<style lang="scss" scoped>
</style>