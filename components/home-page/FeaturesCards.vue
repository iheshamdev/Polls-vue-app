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
    <a
      href="'whatsapp://send?text=شارك بالتصويت' + '%0a %0a' + 'http://localhost:3000/stats/16unne'"
    >WhatsApp</a>
    <a
      href="https://www.facebook.com/sharer.php?u=https://poll-house.netlify.com/"
      target="_blank"
    >Facebook</a>
    <a
      target="_blank"
      href="'https://twitter.com/intent/tweet?text=شارك بالتصويت' + '%0a %0a' + 'http://localhost:3000/stats/16unne' + '&url=' + 'http://localhost:3000/stats/16unne'"
    >twitter</a>
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
  a {
    height: 46px;
    padding: 0 12px;
    display: inline-flex;
    align-items: center;
    margin: 8px;
    border-radius: 5px;
    background-color: $mainColor;
    color: #fff;
  }
}
</style>