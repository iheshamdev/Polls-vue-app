<template>
  <div class="container">
    <customHeader />
    <section class="statistics">
      <h1>احصائيات تصويتك</h1>
      <p>ما هي الدولة المتجهة لرؤية 2030؟</p>

      <div class="doughnut-chart">
        <div class="votes-counter">
          <div class="number">1,200</div>
          <div>اجمالى التصويتات</div>
        </div>
        <canvas id="myChart" width="230" height="230"></canvas>
      </div>

      <div class="statistics-info">
        <div class="labels">
          <span class="voters">المصوتون</span>
          <span class="the-choice">الإختيار</span>
        </div>
        <ul class="bars-chart">
          <li>
            <div class="bar" style="width: 80%; background-color: rgba(255, 231, 0, 0.2)"></div>
            <div class="labels">
              <span class="voters">600</span>
              <span class="the-choice">المملكة العربية السعودية SA</span>
            </div>
          </li>

          <li>
            <div class="bar" style="width: 60%; background-color: rgba(130, 106, 249, 0.2)"></div>
            <div class="labels">
              <span class="voters">400</span>
              <span class="the-choice">المملكة العربية السعودية SA</span>
            </div>
          </li>

          <li>
            <div class="bar" style="width: 28%; background-color: rgba(44, 217, 197, 0.2)"></div>
            <div class="labels">
              <span class="voters">156</span>
              <span class="the-choice">المملكة العربية السعودية SA</span>
            </div>
          </li>

          <li>
            <div class="bar" style="width: 12%; background-color: rgba(45, 153, 255, 0.2)"></div>
            <div class="labels">
              <span class="voters">32</span>
              <span class="the-choice">المملكة العربية السعودية SA</span>
            </div>
          </li>
        </ul>
      </div>

      <div class="share-statistics">
        <span>شاركها مع اصدقاءك</span>
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
          <li>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35.872"
                height="36"
                viewBox="0 0 35.872 36"
              >
                <ellipse
                  cx="17.936"
                  cy="18"
                  rx="17.936"
                  ry="18"
                  transform="translate(0 0)"
                  fill="#868e96"
                />
                <g transform="translate(8.221 8.25)">
                  <path
                    d="M14.947,0a4.448,4.448,0,0,0-3.17,1.318l-1.495,1.5A4.5,4.5,0,0,0,9.8,8.6L8.574,9.835a4.462,4.462,0,0,0-5.766.483l-1.495,1.5a4.492,4.492,0,1,0,6.341,6.363l1.495-1.5A4.479,4.479,0,0,0,10.463,13.5a4.554,4.554,0,0,0-.165-1.2L8.953,13.645a2.985,2.985,0,0,1-.861,1.976L6.6,17.121A2.994,2.994,0,0,1,2.37,12.879l1.495-1.5a2.962,2.962,0,0,1,3.624-.456L5.45,12.97A.749.749,0,1,0,6.507,14.03l7.473-7.5A.749.749,0,1,0,12.924,5.47L10.885,7.516a3,3,0,0,1,.454-3.637l1.495-1.5a2.988,2.988,0,0,1,4.227,0,3.01,3.01,0,0,1,0,4.242l-1.495,1.5a2.962,2.962,0,0,1-1.969.864l-1.344,1.349a4.508,4.508,0,0,0,1.2.166,4.448,4.448,0,0,0,3.17-1.318l1.495-1.5a4.51,4.51,0,0,0,0-6.363A4.448,4.448,0,0,0,14.947,0Z"
                    fill="#eff3f3"
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
  mounted() {
    const drawer = document.createElement("script");
    drawer.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js"
    );
    document.head.appendChild(drawer);
  }
};
</script>

<style lang="scss" scoped>
.statistics {
  background-color: #fff;
  padding: 32px 0 60px;
  border-top: 1px solid $grayBorderColor;
  h1 {
    text-align: center;
    color: $mainColor;
    font-weight: bold;
    font-size: 32px;
  }
  p {
    margin-top: 20px;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
  }
  .doughnut-chart {
    display: flex;
    margin: 30px auto;
    width: 230px;
    height: 230px;
    position: relative;
    .votes-counter {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 14px;
      text-align: center;
      .number {
        font-size: 20px;
      }
    }
  }
  .statistics-info {
    padding: 0 16px;
    .labels {
      display: flex;
      align-items: center;
      height: 100%;
      position: relative;
      color: #505d6f;
      z-index: 2;
      .voters {
        width: 100px;
        text-align: left;
        margin-left: 24px;
      }
      .the-choice {
        flex: 1;
      }
    }
    ul {
      margin-top: 8px;
      li {
        display: flex;
        align-items: center;
        position: relative;
        height: 40px;
        background-color: #eff3f3;
        border-radius: 8px;
        margin-bottom: 8px;
        .bar {
          position: absolute;
          top: 0;
          right: 0;
          height: 100%;
          border-radius: 8px;
          z-index: 1;
          transform: scaleX(0);
          transform-origin: right center;
          animation: fillBar 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
        }
      }
    }
  }
  .share-statistics {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    padding: 0 24px;
    ul {
      display: flex;
      align-items: center;
      margin-right: 15px;
      li {
        margin: 0 12px;
      }
    }
  }
}

@keyframes fillBar {
  to {
    transform: scaleX(1);
  }
}
</style>