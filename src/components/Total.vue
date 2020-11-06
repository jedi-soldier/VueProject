<template>
  <div class="total">
    <div class="totalwrap">
      <div class="subTotal">Sub total <span>$900</span></div>
      <div class="grandTotal">GRAND TOTAL <span>$900</span></div>
    </div>
    <div class="total_button_wrap">
      <button class="total_button">proceed to checkout</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Total',
};
</script>

<style scoped>
.total {
  width: 340px;
  height: 214px;
  background-color: #f5f3f3;
}
@media (max-width: 400px) {
  .total {
    width: auto;
  }
}
.totalwrap {
  border-bottom: 1px solid #e2e2e2;
  text-align: right;
  margin: 0 42px;
}
.subTotal {
  color: #4a4a4a;
  font-size: 11px;
  font-weight: 400;
  text-transform: uppercase;
  margin-top: 40px;
}
.subTotal span {
  margin-left: 10px;
}
.grandTotal {
  margin-top: 15px;
  color: #222222;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 22px;
}
.grandTotal span {
  color: #f16d7f;
  margin-left: 10px;
}
.total_button {
  width: 256px;
  height: 50px;
  background-color: #f16d7f;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 17px;
  outline: none;
  border: none;
}
.total_button:hover {
  color: black;
  cursor: pointer;
}
@media (max-width: 400px) {
  .total_button {
    width: auto;
  }
}
.total_button_wrap {
  text-align: center;
}
</style>
