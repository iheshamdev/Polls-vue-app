<template>
  <section class="post-your-vote">
    <input
      type="text"
      placeholder="اكتب السؤال هنا..."
      v-model="description"
      @keyup="activateSubmitBtn($event)"
    />

    <ul id="choices" ref="choises">
      <li class="option" v-for="(option, i) in options" :key="i">
        <div class="sortable-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14">
            <g transform="translate(1)">
              <path
                d="M0,.5H16"
                transform="translate(0 6.5)"
                fill="none"
                stroke="#aaa"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
              />
              <path
                d="M0,.5H16"
                transform="translate(0 0.5)"
                fill="none"
                stroke="#aaa"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
              />
              <path
                d="M0,.5H16"
                transform="translate(0 12.5)"
                fill="none"
                stroke="#aaa"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
              />
            </g>
          </svg>
        </div>
        <div class="content">
          <input
            class="inp"
            type="text"
            placeholder="اكتب خيارك هنا"
            v-model="option.title"
            @keyup="activateSubmitBtn($event)"
          />
          <div class="delete-icon" v-if="option.canDeleteIt" @click="deleteChoise(i)">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
              <g transform="translate(1 1)">
                <circle
                  cx="10"
                  cy="10"
                  r="10"
                  fill="none"
                  stroke="#ccc"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <path
                  d="M0,.5H8"
                  transform="translate(6 9.5)"
                  fill="none"
                  stroke="#ccc"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
              </g>
            </svg>
          </div>
        </div>
      </li>
    </ul>

    <div id="add-choice" ref="addChoise" @click="addChoise()">اضافة خيار</div>

    <div class="expiry-date">
      <span>ينتهى التصويت خلال</span>
      <div class="select-box">
        <select v-model="endsAt">
          <option value="1">1 يوم</option>
          <option value="3">3 ايام</option>
          <option value="7">7 ايام</option>
        </select>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14.828"
          height="8.414"
          viewBox="0 0 14.828 8.414"
        >
          <g transform="translate(1.414 1.414)">
            <path
              d="M0,0,6,6l6-6"
              fill="none"
              stroke="#ff5780"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="2"
            />
          </g>
        </svg>
      </div>
    </div>

    <div class="primary-btn-container">
      <button class="primary-btn" @click="CreatePoll()" :disabled="!submitBtnIsActive">
        <span>نشر التصويت</span>
        <div class="icon arrow-left-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16.829"
            viewBox="0 0 16 16.829"
          >
            <g transform="translate(1 1.414)">
              <path
                d="M14,.5H0"
                transform="translate(0 6.5)"
                fill="none"
                stroke="#ff5780"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
              />
              <path
                d="M7,14,0,7,7,0"
                fill="none"
                stroke="#ff5780"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
              />
            </g>
          </svg>
        </div>
      </button>
    </div>
  </section>
</template>

<script>
import { POST } from "../../common/HTTPModule";

export default {
  data() {
    return {
      description: "",
      options: [
        { title: "", canDeleteIt: false },
        { title: "", canDeleteIt: false }
      ],
      endsAt: 1,
      submitBtnIsActive: false
    };
  },
  methods: {
    addChoise() {
      this.options.push({ title: "", canDeleteIt: true });
    },
    deleteChoise(i) {
      this.options.splice(i, 1);
    },
    activateSubmitBtn() {
      if (
        this.description &&
        this.description !== " " &&
        (this.options[0].title && this.options[0].title !== " ") &&
        (this.options[1].title && this.options[1].title !== " ")
      ) {
        this.submitBtnIsActive = true;
      } else {
        this.submitBtnIsActive = false;
      }
    },
    async CreatePoll() {
      const params = {
        status: "active",
        description: this.description,
        options: JSON.stringify(this.options),
        endsAt: parseInt(this.endsAt) * (1000 * 60 * 60 * 24) // Poll duration in milliseconds
      };
      const { data } = await POST("https://poll.house/api/polls", params);
      console.log(data);
      if (data) {
        localStorage.setItem("token", data.token);
        this.$router.push(`/subscribe/${data._id}`);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.post-your-vote {
  padding-bottom: 90px;
  > input {
    width: calc(100% - 64px);
    margin: 0 auto 16px;
    display: block;
    height: 50px;
    background-color: transparent;
    border: 0;
    border-bottom: 2px solid transparentize($darkGrayColor, 0.65);
    margin-top: 30px;
    font-size: 18px;
    padding: 0 5px;
    transition: border 0.1s ease-out;
    font-weight: 600;
    &::placeholder {
      color: $darkGrayColor;
      font-weight: 500;
    }
    &:focus {
      border-bottom: 2px solid $mainColor;
    }
  }
  #choices {
    counter-reset: choices;
    li {
      display: flex;
      padding: 8px 0;
      .sortable-icon {
        padding: 0 16px;
        display: flex;
        align-items: center;
        cursor: grab;
      }
      .content {
        height: 60px;
        flex: 1;
        margin-left: 16px;
        position: relative;
        &::before {
          content: "." counter(choices);
          counter-increment: choices;
          margin-left: 12px;
          color: transparentize($darkGrayColor, 0.5);
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 14px;
        }
        input {
          width: 100%;
          height: 100%;
          border: 1px solid $grayBorderColor;
          background-color: #fff;
          border-radius: 8px;
          padding: 13px 40px 13px 45px;
          font-size: 18px;
          font-weight: bold;
          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
          &:focus {
            border: 1px solid $mainColor;
          }
          &::placeholder {
            font-weight: 500;
          }
        }
        .delete-icon {
          position: absolute;
          top: 50%;
          left: 14px;
          transform: translateY(-50%);
          display: flex;
          align-items: center;
        }
      }
    }
  }
  #add-choice {
    margin: 0;
    margin: 8px 48px 0 16px;
    height: 60px;
    border: 2px dashed transparentize($darkGrayColor, 0.6);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    cursor: pointer;
  }

  .expiry-date {
    display: flex;
    justify-content: space-between;
    padding: 0 24px;
    margin: 32px 0 50px;
    span {
      display: flex;
      align-items: center;
    }
    .select-box {
      position: relative;
      select {
        background-color: transparent;
        color: $darkGrayColor;
        height: 40px;
        font-size: 18px;
        appearance: none;
        padding: 2px 2px 2px 30px;
        border: 0;
        outline: 0;
        position: relative;
        z-index: 2;
      }
      svg {
        position: absolute;
        z-index: 1;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }
    }
  }
}
</style>