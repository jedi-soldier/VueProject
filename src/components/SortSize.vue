<template>
  <div class="adjustmentSize">
    <div class="adjustmentTitle">Size</div>
    <div class="adjustmentSizeInputs">
      <div>
        <input id="XXS" type="checkbox">
        <label for="XXS">XXS</label>
      </div>
      <div>
        <input id="XS" type="checkbox">
        <label for="XS">XS</label>
      </div>
      <div>
        <input id="S" type="checkbox">
        <label for="S">S</label>
      </div>
      <div>
        <input id="M" type="checkbox">
        <label for="M">M</label>
      </div>
      <div>
        <input id="L" type="checkbox">
        <label for="L">L</label>
      </div>
      <div>
        <input id="XL" type="checkbox">
        <label for="XL">XL</label>
      </div>
      <div>
        <input id="XXL" type="checkbox">
        <label for="XXL">XXL</label>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SortSize',
};

</script>

<style scoped>

.adjustmentSize {
  width: 280px;
}
@media (max-width: 509px) {
  .adjustmentSize .adjustmentTitle {
    margin-top: 10px;
  }
}
.adjustmentSize .adjustmentSizeInputs {
  display: flex;
  flex-wrap: wrap;
}
.adjustmentSize .adjustmentSizeInputs > div {
  width: 70px;
  padding-left: 17px;
}
.adjustmentSize .adjustmentSizeInputs input[type="checkbox"] {
  position: relative;
}
.adjustmentSize .adjustmentSizeInputs input[type="checkbox"]:after {
  content: '';
  width: 13px;
  height: 13px;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  background: white;
  border: 1px solid #ebebeb;
}
</style>
