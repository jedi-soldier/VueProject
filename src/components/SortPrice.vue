<template>
  <div class="adjustmentPrice">
    <div class="adjustmentTitle">Price</div>
    <div class="priceRange"><img src="../assets/images/vector.png" alt="price"></div>
    <div class="priceValues">
      <span>$52</span>
      <span>$400</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SortPrice',
};

</script>

<style scoped>
.priceRange {
  width: 262px;
  height: 14px;
}
.priceValues {
  display: flex;
  justify-content: space-between;
  color: #6f6e6e;
  font-size: 14px;
  font-weight: 400;
  line-height: 26px;
  margin-top: 17px;
}
</style>
