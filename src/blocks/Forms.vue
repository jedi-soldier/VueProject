<template>
  <div class="container checkinfo">
    <details open="open">
      <summary>
        01. Shipping address
      </summary>
      <div class="checkout">
        <Chekform></Chekform>
        <Login></Login>
      </div>
    </details>
    <details>
      <summary>02. BILLING INFORMATION</summary>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eveniet?
    </details>
    <details>
      <summary>03. SHIPPING INFORMATION</summary>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eveniet?
    </details>
    <details>
      <summary> 04. SHIPPING METHOD</summary>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eveniet?
    </details>
    <details>
      <summary>05. PAYMENT METHOD</summary>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eveniet?
    </details>
    <details>
      <summary>06. ORDER REVIEW</summary>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eveniet?
    </details>
  </div>
</template>

<script>
// eslint-disable-next-line import/extensions
import Chekform from '@/components/Chekform';
// eslint-disable-next-line import/extensions
import Login from '@/components/Login';

export default {
  name: 'Forms',
  components: { Login, Chekform },
};
</script>

<style scoped>

.checkinfo {
  margin: 90px auto;
}
@media (max-width: 1140px) {
  .checkinfo {
    padding: 0 15px;
  }
}
@media (max-width: 990px) {
  .checkinfo {
    margin: 30px auto;
  }
}
details {
  padding: 27px 0;
  border-bottom: 1px solid #eeeeee;
}
summary {
  list-style-type: none;
  color: #222222;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  outline: none;
}
.checkout {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  padding-left: 30px;
}
@media (max-width: 900px) {
  .checkout {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-row-gap: 30px;
    justify-items: center;
  }
}
@media (max-width: 750px) {
  .checkout {
    justify-items: initial;
  }
}
</style>
