<template>
  <div class="rightForm">
    <div class="checkText">Already registered?</div>
    <div class="checkSmallText">Please log in below</div>
    <form>
      <label for="inEmail" class="checkText">Email address<span>*</span></label><br>
      <input id="inEmail" type="email"><br>
      <label for="inPass" class="checkText">Password<span>*</span></label><br>
      <input id="inPass" type="password">
      <div class="required">* Required fields</div>
      <button>Log in</button>
      <span class="pass">Forgot Password?</span>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
};
</script>

<style scoped>
.rightForm {
  width: 50%;
}
.rightForm label {
  color: #222222;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  text-transform: uppercase;
}
.rightForm label span {
  color: #ff0d0d;
  font-size: 17px;
  font-weight: 400;
  line-height: 20px;
}
.rightForm input {
  width: 390px;
  border: 1px solid #eaeaea;
  background-color: #ffffff;
  padding: 15px 0;
  margin-bottom: 25px;
  line-height: 14px;
}
@media (max-width: 970px) {
  .rightForm input {
    width: 350px;
  }
}
@media (max-width: 450px) {
  .rightForm input {
    width: inherit;
  }
  .rightForm button {
    width: inherit;
  }
}
.required {
  color: #ff0d0d;
  font-size: 13px;
  font-weight: 400;
  height: 20px;
  margin-bottom: 30px;
}
.rightForm button {
  width: 180px;
  height: 50px;
  border: 1px solid #eaeaea;
  color: #4a4a4a;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  background-color: #ffffff;
  outline: none;
  margin-right: 30px;
}
.rightForm button:hover{
  cursor: pointer;
  background-color: #f8f3f4;
}
.pass {
  color: #222222;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}
@media (max-width: 676px) {
  .pass {
    display: block;
    margin-top: 20px;
  }
}
</style>
