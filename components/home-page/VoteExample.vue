<template>
  <section class="home-page_vote-example-list">
    <div class="hint">مثال على تصويت</div>

    <h4>ما هى الدولة المتجهة لرؤية 2030</h4>

    <ul class="list-of-countries">
      <li>
        <span>الولايات المتحدة الامريكية US</span>
      </li>
      <li>
        <span>المملكة العربية السعودية SA</span>
      </li>
      <li>
        <span>المملكة المتحدة GB</span>
      </li>
      <li>
        <span>المانيا DB</span>
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
        <span class="days">6 ايام و 23 ساعة متبقية</span>
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
        <span>1,900 تصويت</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.home-page_vote-example-list,
.home-page_votes-example-grid {
  &.home-page_votes-example-grid {
    .hint {
      left: auto;
      right: 28px;
    }
  }
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
        svg {
          margin-left: 8px;
        }
      }
    }
  }
}
</style>