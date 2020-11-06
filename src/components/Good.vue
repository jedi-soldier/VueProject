<template>
  <div class="tradeIndex_product">
    {{good.product_image}}<div class="tradeIndex_product__buyButton">
    <button><img src="../assets/images/basket.svg" alt="basket">Add to&nbsp;Cart</button> </div>
    <div class="tradeIndex_product__info"> <a href="#">{{good.product_name}}</a>
        <router-link to="/catalog/1234"><div class="tradeIndex_product__info__price">
          <p> {{good.price}} $</p></div>
        </router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Good',
  props: ['good'],
};
</script>

<style scoped>

.tradeIndex_product {
  width: 261px;
  height: 376px;
  position: relative;
}
.tradeIndex_product:nth-child(n+5) {
  margin-top: 40px;
}
.tradeIndex_product__buyButton {
  position: absolute;
  top: 0;
  left: 0;
  width: inherit;
  height: 280px;
  background-color: #3a3838;
  opacity: 0.75;
  display: none;
}
.tradeIndex_product__buyButton button {
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  line-height: 10px;
  background-color: inherit;
  width: 123px;
  height: 39px;
  border: 1px solid #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
}
.tradeIndex_product__buyButton img {
  margin-right: 8px;
}
.tradeIndex_product:hover > .tradeIndex_product__buyButton {
  display: flex;
  align-items: center;
  justify-content: center;
}
.tradeIndex_product:hover > .tradeIndex_product__info {
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.16);
}
.tradeIndex_product__info {
  padding-left: 15px;
  margin-top: -3px;
}
.tradeIndex_product__info a {
  color: #222222;
  font-size: 13px;
  font-weight: 400;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 36px;
}
.tradeIndex_product__info__price {
  color: #f16d7f;
  font-size: 16px;
  font-weight: 700;
  padding-bottom: 21px;
}
</style>
