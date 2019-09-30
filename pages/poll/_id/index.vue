<template>
  <section class="vote-page" v-if="pollData">
    <h4>{{pollData.description}}</h4>

    <ul class="vote-options" v-if="!showVoteStats">
      <li v-for="option in pollData.options" :key="option._id">
        <span @click="SubmitNewVote(option._id)">{{option.title}}</span>
      </li>
    </ul>

    <ul class="vote-stats" v-if="showVoteStats">
      <li v-for="(option, i) in pollData.options" :key="option._id">
        <div
          class="stats-bar"
          v-bind:style="{width: `${option.votes * 100 / totalVotes}%`, backgroundColor: statsColors[i]}"
        ></div>
        <span>{{option.title}}</span>
        <span>{{Math.round(option.votes * 100 / totalVotes)}}%</span>
      </li>
    </ul>

    <div class="vote-details">
      <div>
        <span class="icon clock-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
            <g transform="translate(1 1)">
              <circle
                cx="8"
                cy="8"
                r="8"
                fill="none"
                stroke="#868e96"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
              />
              <path
                d="M0,0V4.8L3.2,6.4"
                transform="translate(8 3.2)"
                fill="none"
                stroke="#868e96"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
              />
            </g>
          </svg>
        </span>
        <!-- <span class="days">6 ايام و 23 ساعة متبقية</span> -->
        <span class="endsAt">
          <span v-if="days" class="days">{{days}} ايام</span>
          <span v-if="hours" class="hours">و {{hours}} ساعة متبقية</span>
        </span>
      </div>

      <div>
        <span class="icon chart-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 14 18">
            <g transform="translate(0 1)">
              <path
                d="M.5,10V0"
                transform="translate(12.5 6)"
                fill="none"
                stroke="#868e96"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
              />
              <path
                d="M.5,16V0"
                transform="translate(6.5)"
                fill="none"
                stroke="#868e96"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
              />
              <path
                d="M.5,6V0"
                transform="translate(0.5 10)"
                fill="none"
                stroke="#868e96"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
              />
            </g>
          </svg>
        </span>
        <span>{{totalVotes}} تصويت</span>
      </div>
    </div>
  </section>
</template>

<script>
import { POST, GET } from "../../../common/HTTPModule";
export default {
  data() {
    return {
      _id: null,
      showVoteStats: false,
      pollData: null,
      days: null,
      hours: null,
      totalVotes: 0,
      statsColors: [
        "#FFE700",
        "#2CD9C5",
        "#826AF9",
        "#2D99FF",
        "#263B80",
        "#139AD6",
        "#e74c3c",
        "#392d9b",
        "#F752A7",
        "#073F54"
      ]
    };
  },
  async created() {
    this._id = this.$route.params.id;
    if (process.browser) {
      const pollsVotedList = JSON.parse(localStorage.getItem("pollsVotedList"));
      if (
        pollsVotedList &&
        pollsVotedList.length > 0 &&
        pollsVotedList.includes(this._id)
      ) {
        this.showVoteStats = true;
      }
      const { data } = await GET(`https://poll.house/api/polls/${this._id}`);
      if (data.statusCode == 404) {
        this.$router.push(`/`);
      } else {
        if (data) this.pollData = data;
        this.totalVotes = data.votes;
        const DateDiff = require("date-diff");
        const diff = new DateDiff(new Date(data.endsAt), new Date());
        this.days = Math.floor(diff.days());
        this.hours = Math.floor(diff.hours()) % 24;
      }
    }
  },
  methods: {
    async SubmitNewVote(optionId) {
      const params = { _id: optionId };
      const { data } = await POST(
        `https://poll.house/api/polls/${this._id}/vote`,
        params
      );
      console.log(data);
      if (data) {
        this.totalVotes = data.votes;
        this.pollData = data;
        this.showVoteStats = true;
        // We use localStorage to prevent the user submitting the vote twice
        if (process.browser) {
          if (
            !JSON.parse(localStorage.getItem("pollsVotedList")) ||
            JSON.parse(localStorage.getItem("pollsVotedList")).length === 0
          ) {
            localStorage.setItem("pollsVotedList", JSON.stringify([this._id]));
          } else {
            let prevList = JSON.parse(localStorage.getItem("pollsVotedList"));
            localStorage.setItem(
              "pollsVotedList",
              JSON.stringify([...prevList, this._id])
            );
          }
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.vote-page {
  background-color: $lightGrayColor;
  position: relative;
  padding: 38px 16px 48px;
  h4 {
    color: $darkGrayColor;
    text-align: center;
    font-size: 21px;
    margin-bottom: 24px;
  }
  // vote options
  .vote-options {
    counter-reset: countries;
    li {
      position: relative;
      margin: 0 0 24px;
      padding-right: 32px;
      color: $darkGrayColor;
      span {
        width: 100%;
        display: block;
        height: 64px;
        border-radius: 40px;
        background-color: #fff;
        border: 1px solid $grayBorderColor;
        display: flex;
        align-items: center;
        padding: 0 30px;
        font-size: 18px;
        font-weight: bold;
      }
      &::before {
        counter-increment: countries;
        content: counter(countries) ".";
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
      }
    }
  }
  // Vote stats
  .vote-stats {
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 12px;
      height: 50px;
      border-radius: 8px;
      margin-bottom: 16px;
      position: relative;
      span {
        position: relative;
        z-index: 2;
        color: #000;
      }
      .stats-bar {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        opacity: 0.2;
      }
    }
  }
  // Vote details
  .vote-details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: $darkGrayColor;
    padding-top: 12px;
    div {
      display: flex;
      align-items: center;
      height: 40px;
      span {
        display: flex;
        align-items: center;
        height: 100%;
        &.days {
          margin-left: 6px;
        }
        svg {
          margin-left: 8px;
        }
      }
    }
  }
}
</style>