<template>
  <form class="leftForm">
    <div class="checkText">Check as a guest or register</div>
    <div class="checkSmallText">Register with us for future convenience</div>
    <input id="asquest" type="radio" name="#">
    <label for="asquest" class="checkText">Checkout as guest</label><br>
    <input id="asregister" type="radio" name="#">
    <label for="asregister" class="checkText">Register</label>
    <div class="checkText checkTextSave">
      Register and save time!
    </div>
    <div class="checkSmallText">Register with us for future convenience</div>
    <div class="checkSmallText lstspan" id="mrnone">
      <i class="fa fa-angle-double-right" aria-hidden="true"></i>
      Fast and easy checkout
    </div>
    <div class="checkSmallText">
      <i class="fa fa-angle-double-right" aria-hidden="true"></i>
      Easy access to your order history and status
    </div>
    <button>Continue</button>
  </form>
</template>

<script>

export default {
  name: 'Chekform',
};
</script>

<style scoped>
.leftform input {
  display: inline;
  margin-bottom: 10px;
}
.checkText {
  color: #222222;
  font-size: 13px;
  font-weight: 400;
  text-transform: uppercase;
  font-family: Lato, sans-serif;
  margin-bottom: 15px;
}
.checkSmallText {
  color: #b3b2b2;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  font-family: Lato, sans-serif;
  margin-bottom: 25px;
}
.leftForm {
  width: 50%;
}
.leftForm button {
  color: #4a4a4a;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  width: 180px;
  height: 50px;
  border: 1px solid #eaeaea;
  background-color: #ffffff;
  outline: none;
  margin-top: 10px;
}
.leftForm button:hover {
cursor: pointer;
background-color: #f8f3f4;
}
.checkTextSave {
  margin-top: 30px;
}
.lstspan {
  margin-bottom: 10px;
}
</style>
