<template>
  <div class="contaciner">
    <CustomHeader />
    <CreateNewPoll />
  </div>
</template>

<script>
import CustomHeader from "../../components/shared/Header";
import CreateNewPoll from "../../components/create-new-poll/CreateNewPoll";
import { GET } from "../../common/HTTPModule";

export default {
  components: {
    CustomHeader,
    CreateNewPoll
  },
  data() {
    return {
      name: "Hesham"
    };
  },
  async created() {
    const params = {
      status: "active",
      description: "Lorem title",
      options: [
        {
          title: "option 1"
        },
        {
          title: "option 2"
        }
      ],
      endsAt: 3600000
    };
    const { data } = await GET("https://poll.house/api/polls/random");
    console.log(data);
  }
};
</script>

<style lang="scss" scoped>
</style>