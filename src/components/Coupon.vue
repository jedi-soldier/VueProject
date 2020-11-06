<template>
  <div class="coupon">
    <div class="coupon_text">coupon discount</div>
    <label for="couponcode">Enter your coupon code if you have one</label>
    <input
      class="coupon_place"
      type="text"
      id="couponcode"
      name="couponcode"
      placeholder="State"
      pattern="^([A-Za-z0-9]{5,})$">
    <button class="couponcode_button">Apply coupon</button>
  </div>
</template>

<script>

export default {
  name: 'Coupon',
};
</script>

<style scoped>
input.coupon_place::placeholder {
  color: #b1b1b1;
  font-size: 13px;
  font-weight: 300;
}
.coupon_text {
  color: #222222;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 28px;
}
.coupon label {
  color: #000000;
  font-size: 14px;
  font-weight: 300;
}
.coupon_place {
  width: 340px;
  height: 45px;
  border: 1px solid #eaeaea;
  background-color: #ffffff;
  display: block;
  margin-top: 24px;
  padding: 0 15px;
}
@media (max-width: 400px) {
  .coupon_place {
    width: auto;
  }
}
.couponcode_button {
  width: 118px;
  height: 35px;
  border: 1px solid #eaeaea;
  background-color: #ffffff;
  color: #4a4a4a;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 25px;
  outline: none;
}
.couponcode_button:hover {
  cursor: pointer;
  background-color: #f16d7f;
}
</style>
