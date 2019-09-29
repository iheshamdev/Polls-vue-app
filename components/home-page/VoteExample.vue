<template>
  <section class="home-page_vote-example-list">
    <div class="hint">مثال على تصويت</div>

    <h4>{{randomData.description}}</h4>

    <ul class="list-of-countries">
      <li v-for="option in randomData.options" :key="option._id">
        <span>{{option.title}}</span>
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
        <span>{{pollVotes}} تصويت</span>
      </div>
    </div>
  </section>
</template>

<script>
import { GET } from "../../common/HTTPModule";
export default {
  data() {
    return {
      randomData: {},
      days: null,
      hours: null,
      pollVotes: 0
    };
  },
  async created() {
    const { data } = await GET("https://poll.house/api/polls/random");
    this.randomData = data;
    this.randomData.options.forEach(option => (this.pollVotes += option.votes));
    console.log(data);
    const DateDiff = require("date-diff");
    const diff = new DateDiff(new Date(data.endsAt), new Date());
    this.days = Math.floor(diff.days());
    this.hours = Math.floor(diff.hours() % 24);
  }
};
</script>

<style lang="scss" scoped>
.home-page_vote-example-list {
  background-color: $lightGrayColor;
  position: relative;
  padding: 60px 16px 48px;
  .hint {
    height: 54px;
    background-color: $darkGrayColor;
    color: #fff;
    position: absolute;
    top: -20px;
    left: 28px;
    padding: 0 24px;
    font-size: 18px;
    display: flex;
    align-items: center;
    border-radius: 8px;
  }
  h4 {
    color: $darkGrayColor;
    margin-bottom: 38px;
    text-align: center;
    font-size: 21px;
  }
  // list of countries
  .list-of-countries {
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