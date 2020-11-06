<template>
  <div class="purchase">
    <div class="container purchase_container">
      <Shipping></Shipping>
      <Coupon></Coupon>
      <Total></Total>
    </div>
  </div>
</template>

<script>

// eslint-disable-next-line import/extensions
import Shipping from '@/components/Shipping';
// eslint-disable-next-line import/extensions
import Coupon from '@/components/Coupon';
// eslint-disable-next-line import/extensions
import Total from '@/components/Total';

export default {
  name: 'Purchase',
  components: { Total, Coupon, Shipping },
};
</script>

<style scoped>
.purchase_container {
  margin-top: 65px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;
}
@media (max-width: 1170px) {
  .purchase_container {
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
    justify-items: center;
    text-align: center;
  }
}
</style>
