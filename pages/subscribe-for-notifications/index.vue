<template>
  <div class="container">
    <CustomHeader />
    <section class="subscribe-to-push-notifications">
      <img src="~assets/images/vote-published-illustration.svg" alt="Your vote is done" />

      <h2>تم انشاء التصويت بنجاح</h2>
      <p>ادخل بريدك الالكترونى للحصول على النتائج</p>

      <div class="email-inp" v-if="!emailPublished">
        <svg xmlns="http://www.w3.org/2000/svg" width="22.785" height="18" viewBox="0 0 22.785 18">
          <g transform="translate(1.393 1)">
            <path
              d="M2,0H18a2.006,2.006,0,0,1,2,2V14a2.006,2.006,0,0,1-2,2H2a2.006,2.006,0,0,1-2-2V2A2.006,2.006,0,0,1,2,0Z"
              fill="none"
              stroke="#ccc"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="2"
            />
            <path
              d="M20,0,10,7,0,0"
              transform="translate(0 2)"
              fill="none"
              stroke="#ccc"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="2"
            />
          </g>
        </svg>
        <input type="text" />
      </div>

      <div class="primary-btn-container" v-if="!emailPublished">
        <a class="primary-btn" @click="subscribe()">
          <span>الاشتراك بالتنبيهات</span>
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
        </a>
      </div>

      <div class="confirm-message" v-if="emailPublished">
        <span class="inbox-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18">
            <g transform="translate(1 1)">
              <path
                d="M20,0H14L12,3H8L6,0H0"
                transform="translate(0 8)"
                fill="none"
                stroke="#61ce27"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
              />
              <path
                d="M3.45,1.11,0,8v6a2,2,0,0,0,2,2H18a2,2,0,0,0,2-2V8L16.55,1.11A2,2,0,0,0,14.76,0H5.24A2,2,0,0,0,3.45,1.11Z"
                fill="none"
                stroke="#61ce27"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
              />
            </g>
          </svg>
        </span>
        <p class="message-content">
          شكرًا لك، تم تسجيل بريدك الإلكتروني.
          <br />سيتم ارسال رسالة بالنتائج النهائية عند انتهاء التصويت
        </p>
      </div>

      <div class="options">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
            <g transform="translate(1 1)">
              <rect
                width="13"
                height="13"
                rx="2"
                transform="translate(7 7)"
                stroke-width="2"
                stroke="#ff5780"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                fill="none"
              />
              <path
                d="M3,13H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0h9a2,2,0,0,1,2,2V3"
                fill="none"
                stroke="#ff5780"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
              />
            </g>
          </svg>
          <span>نسخ الرابط</span>
        </div>
        <div>
          <nuxt-link to="/statistics">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 14 18">
              <g transform="translate(0 1)">
                <path
                  d="M.5,10V0"
                  transform="translate(12.5 6)"
                  fill="none"
                  stroke="#ff5780"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <path
                  d="M.5,16V0"
                  transform="translate(6.5)"
                  fill="none"
                  stroke="#ff5780"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <path
                  d="M.5,6V0"
                  transform="translate(0.5 10)"
                  fill="none"
                  stroke="#ff5780"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
              </g>
            </svg>
            <span>عرض الاحصائيات</span>
          </nuxt-link>
        </div>
      </div>

      <div class="share-the-vote">
        <span>شارك التصويت</span>
        <ul class="social-media-links">
          <li>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35.872"
                height="36"
                viewBox="0 0 35.872 36"
              >
                <g transform="translate(0)">
                  <ellipse
                    cx="17.936"
                    cy="18"
                    rx="17.936"
                    ry="18"
                    transform="translate(0 0)"
                    fill="#1da1f2"
                  />
                  <g transform="translate(8.221 9.75)">
                    <path
                      d="M19.432,1.876a7.936,7.936,0,0,1-2.29.63A4,4,0,0,0,18.894.292a7.976,7.976,0,0,1-2.532.971A3.985,3.985,0,0,0,9.467,4a4.059,4.059,0,0,0,.1.911A11.3,11.3,0,0,1,1.353.731,4.017,4.017,0,0,0,2.587,6.073a3.968,3.968,0,0,1-1.806-.5v.05a4,4,0,0,0,3.2,3.923,3.975,3.975,0,0,1-1.051.14,4.045,4.045,0,0,1-.75-.071A3.993,3.993,0,0,0,5.9,12.393,7.978,7.978,0,0,1,.951,14.106,7.982,7.982,0,0,1,0,14.05a11.257,11.257,0,0,0,6.111,1.8A11.286,11.286,0,0,0,17.453,4.464q0-.26-.011-.518A8.128,8.128,0,0,0,19.432,1.876Z"
                      transform="translate(0.747 0.327)"
                      fill="#eff3f3"
                    />
                  </g>
                </g>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35.872"
                height="36"
                viewBox="0 0 35.872 36"
              >
                <g transform="translate(0)">
                  <path
                    d="M.159,36v0l2.4-8.773a18,18,0,0,1,2.7-21.954A17.936,17.936,0,0,1,35.872,18,17.909,17.909,0,0,1,9.091,33.647L.16,36ZM11.982,9.6H11.8a1.626,1.626,0,0,0-1.189.556l-.1.1a4.942,4.942,0,0,0-1.454,3.616,8.514,8.514,0,0,0,1.81,4.605c.017.022.047.068.093.136a17.231,17.231,0,0,0,7.5,6.6A12.331,12.331,0,0,0,22.881,26.4a5.369,5.369,0,0,0,.68-.049c.08-.01.157-.019.235-.026a4.51,4.51,0,0,0,3-2.116,3.692,3.692,0,0,0,.254-2.12,1.458,1.458,0,0,0-.607-.4l-.243-.119c-.42-.212-2.629-1.3-3.038-1.451a1.476,1.476,0,0,0-.475-.115.6.6,0,0,0-.517.338c-.29.434-1.132,1.436-1.41,1.743a.6.6,0,0,1-.474.256,1.107,1.107,0,0,1-.486-.145c-.073-.036-.17-.079-.294-.132a11.461,11.461,0,0,1-3.279-2.079,13.359,13.359,0,0,1-2.47-3.085c-.262-.453-.019-.7.2-.914a6.427,6.427,0,0,0,.437-.5c.077-.093.156-.189.232-.276a2.876,2.876,0,0,0,.39-.65l.047-.1a.81.81,0,0,0-.035-.779c-.045-.091-.214-.511-.429-1.041-.314-.778-.706-1.747-.94-2.266-.34-.756-.706-.764-1-.77C12.438,9.6,12.2,9.6,11.982,9.6Z"
                    fill="#21ba45"
                  />
                </g>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35.872"
                height="35.815"
                viewBox="0 0 35.872 35.815"
              >
                <g transform="translate(0)">
                  <path
                    d="M17.936,0a17.994,17.994,0,0,0-2.681,35.778V22.77H10.817V18.039h4.438V14.891c0-5.212,2.53-7.5,6.847-7.5a25.09,25.09,0,0,1,3.678.223v4.129H22.836c-1.832,0-2.472,1.745-2.472,3.71v2.586h5.37l-.728,4.731H20.364V35.815A17.994,17.994,0,0,0,17.936,0Z"
                    fill="#3b5998"
                  />
                </g>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>


<script>
import CustomHeader from "../../components/shared/Header";

export default {
  components: {
    CustomHeader
  },
  data() {
    return {
      emailPublished: false
    };
  },
  methods: {
    subscribe() {
      console.log("hi");
      this.emailPublished = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.subscribe-to-push-notifications {
  padding-bottom: 60px;
  img {
    display: block;
    margin: 32px auto 16px;
  }
  h2 {
    text-align: center;
    color: $mainColor;
    font-weight: bold;
    font-size: 28px;
    margin: 0;
    margin-bottom: 15px;
  }
  p {
    text-align: center;
  }
  .email-inp {
    position: relative;
    margin: 30px 32px 24px;
    width: calc(100% - 64px);
    svg {
      position: absolute;
      top: 50%;
      left: 24px;
      transform: translateY(-50%);
    }
    input {
      border-radius: 40px;
      height: 64px;
      width: 100%;
      padding: 0 24px 0 60px;
      font-size: 18px;
      font-weight: 600;
      border: 1px solid $grayBorderColor;
      transition: 0.15s ease;
      text-align: left;
      &:focus {
        border: 1px solid $mainColor;
      }
    }
  }
  .confirm-message {
    width: calc(100% - 64px);
    border: 1px solid rgba(97, 206, 39, 0.3);
    border-radius: 8px;
    padding: 16px;
    padding-right: 0;
    color: #61ce27;
    margin: 22px auto 0;
    display: flex;
    .inbox-icon {
      padding: 15px 16px;
    }
    .message-content {
      text-align: right;
    }
  }
  .options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    padding: 0 32px;
    a {
      padding: 8px 12px;
      display: flex;
      align-items: center;
      span {
        margin-right: 8px;
        font-size: 18px;
        color: $mainColor;
      }
    }
  }
  .share-the-vote {
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 35px;
    ul {
      display: flex;
      align-items: center;
      li {
        margin: 0 12px;
      }
    }
  }
}
</style>