<template>
  <section class="home-page_features-cards">
    <div class="card">
      <h3>أنشئ تصويتات لا محدودة بشكل مجاني 100٪</h3>
      <p>تساعدك هذه الأداة بإنشاء ومشاركة التصويتات والإستطلاعات بأسهل وأسرع طريقة ممكنة.</p>
    </div>

    <div class="card">
      <h3>أنشئ تصويتات لا محدودة بشكل مجاني 100٪</h3>
      <p>تساعدك هذه الأداة بإنشاء ومشاركة التصويتات والإستطلاعات بأسهل وأسرع طريقة ممكنة.</p>
    </div>
    <a href="web.whatsapp://send?text=hello" data-action="share/whatsapp/share">Share via Whatsapp</a>
    <a href="https://wa.me/whatsappphonenumber/?text=urlencodedtext">Test</a>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.home-page_features-cards {
  padding: 0 32px 24px;
  padding-top: 90px;
  background-color: #fff;
  .card {
    padding: 28px;
    box-shadow: 0 0 19px rgba(163, 163, 163, 0.38);
    border-radius: 4px;
    margin-bottom: 32px;
    h3 {
      color: $mainColor;
      font-weight: bold;
      font-size: 24px;
      margin-bottom: 15px;
    }
    p {
      color: $darkGrayColor;
      font-size: 18px;
    }
  }
}
</style>