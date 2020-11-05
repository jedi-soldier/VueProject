<template>
  <div class="cartWrap">
    <img class="headerCart" src="../assets/images/cart.png" alt="">
    <router-link to="/cart"><button class="accountBtn">
      My Account
      <i class="fas fa-caret-down"></i>
    </button></router-link>
  </div>
</template>

<script>
export default {
  name: 'Cart',
};
</script>

<style scoped>
.headerCart{
  margin-bottom: -10px;
}
.accountBtn {
  width: 130px;
  height: 38px;
  border-radius: 3px;
  background-color: #f16d7f;
  border: none;
  color: white;
  margin-left: 26px;
  outline: none;
  border: none;
}
.accountBtn:hover {
  color: black;
  cursor: pointer;
}
@media (max-width: 991px) {
  .accountBtn {
    margin-left: initial;
  }
  .headerCart {
    margin-right: 20px;
  }
}
.cartWrap {
  margin-left: auto;
}
@media (max-width: 1200px) {
  .cartWrap {
    margin-left: 90px;
  }
}
@media (max-width: 991px) {
  .cartWrap {
    margin-left: initial;
  }
}
</style>
