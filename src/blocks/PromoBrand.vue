<template>
  <div class="promo">
    <div class="container promoContainer">
      <div class="promoSlogan">
        <div>THE BRAND</div> OF&nbsp;LUXERIOUS <span>FASHION</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PromoBrand',
};
</script>

<style scoped>
.promo {
  height: 613px;
  background-color: #e8e8e8;
}
@media (max-width: 1140px) {
  .promo {
    height: 60vw;
    width: 100%;
  }
}
.promoContainer {
  display: flex;
  align-items: center;
  height: inherit;
  background: url(../assets/images/topHeaderBack.png) no-repeat right 40px top / 48.5%;
}
@media (max-width: 1140px) {
  .promoContainer {
    background-size: auto;
  }
}
@media (max-width: 650px) {
  .promoContainer {
    background-position: right;
    background-size: contain;
  }
}
.promoSlogan {
  height: 92px;
  border-left: 12px solid #f16d7f;
  padding-left: 12px;
  color: #222222;
  font-size: 40px;
  font-weight: 900;
  letter-spacing: 1px;
}
@media (max-width: 925px) {
  .promoSlogan {
    font-size: 24px;
    height: auto;
  }
}
@media (max-width: 650px) {
  .promoSlogan {
    font-size: 12px;
    height: auto;
  }
}
.promoSlogan div {
  font-size: 50px;
  letter-spacing: 1.5px;
  line-height: 44px;
  margin-bottom: 9px;
}
@media (max-width: 925px) {
  .promoSlogan div {
    font-size: 30px;
  }
}
@media (max-width: 650px) {
  .promoSlogan div {
    font-size: 15px;
    height: auto;
  }
}
.promoSlogan span {
  color: #f16d7f;
}
</style>
