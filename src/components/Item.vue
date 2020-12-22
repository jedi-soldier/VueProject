<template>
  <div class="product">
    <img src="../assets/images/product10.jpg" alt="product">
    <div class="productName">
      Mango People T-shirt
    </div>
    <div class="productPrice">
      $52.00
    </div>
  </div>
</template>

<script>
export default {
  name: 'Item',
};
</script>

<style scoped>

.product {
  width: 100%;
}
@media (min-width: 992px) {
  .product {
    width: calc(50% - 10px);
  }
}
@media (min-width: 1200px) {
  .product {
    width: 263px;
  }
}
@media (min-width: 1200px) {
  .product:nth-child(n + 4) {
    margin-top: 45px;
  }
}
@media (max-width: 1199px) {
  .product:nth-child(n + 3) {
    margin-top: 45px;
  }
}
@media (max-width: 991px) {
  .product:nth-child(n + 2) {
    margin-top: 45px;
  }
}
.product img {
  width: 100%;
  display: block;
}
.product .productName {
  color: #6f6e6e;
  font-size: 13px;
  font-weight: 400;
  text-transform: uppercase;
  padding: 15px;
}
.product .productPrice {
  color: #f16d7f;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0 15px 15px;
}
</style>
