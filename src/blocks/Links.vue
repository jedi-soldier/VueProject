<template>
  <footer>
    <div class="container">
      <div class="footerBrandWrap">
        <logo></logo>
        <div class="footerText1">
          Objectively transition extensive data rather than cross functional solutions.
          Monotonectally
          syndicate multidisciplinary materials before go forward benefits.
          Intrinsicly syndicate an expanded array of processes.
        </div>
        <div class="footerText2">
          Efficiently plagiarize 24/365 action items and focused infomediaries.
          Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.
        </div>
      </div>

      <section>
        <h3>COMPANY</h3>
        <nav>
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">About</a>
          <a href="#">How It Works</a>
          <a href="#">Contact</a>
        </nav>
      </section>

      <section>
        <h3>INFORMATION</h3>
        <nav>
          <a href="#">Tearms & Condition</a>
          <a href="#">Privacy Policy</a>
          <a href="#">How to Buy</a>
          <a href="#">How to Sell</a>
          <a href="#">Promotion</a>
        </nav>
      </section>

      <section>
        <h3>SHOP CATEGORY</h3>
        <nav>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Child</a>
          <a href="#">Apparel</a>
          <a href="#">Brows All</a>
        </nav>
      </section>
    </div>
  </footer>
</template>

<script>
// eslint-disable-next-line import/extensions
import Logo from '@/components/Logo';

export default {
  name: 'Links',
  components: { Logo },
};
</script>

<style scoped>
footer {
  min-height: 460px;
  padding: 110px 0 90px 0;
}
@media (max-width: 1139px) {
  footer {
    padding: 110px 15px 90px 15px;
  }
}
footer .container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
@media (max-width: 500px) {
  footer .container {
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: flex-start;
  }
}
footer .footerBrandWrap {
  max-width: 427px;
}
@media (max-width: 991px) {
  footer .footerBrandWrap {
    min-width: 100%;
  }
}
footer .footerText1 {
  margin-top: 41px;
  margin-bottom: 33px;
}
footer .footerText1,
footer .footerText2 {
  color: #898989;
  font-size: 14px;
  font-weight: 300;
  line-height: 24px;
  letter-spacing: 0.35px;
}
footer h3 {
  color: #f16d7f;
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  margin-bottom: 45px;
}
@media (max-width: 991px) {
  footer h3 {
    margin-top: 30px;
    margin-bottom: 0;
  }
}
footer nav a {
  font-size: 16px;
  font-weight: 400;
  line-height: 2.63;
  letter-spacing: 0.4px;
  color: #898989;
  display: block;
  text-decoration: none;
}
footer nav a:hover {
  color: #f16d7f;
}

</style>
