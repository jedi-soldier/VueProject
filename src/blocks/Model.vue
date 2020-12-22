<template>
  <div class="modelWrap">
    <div class="modelSlider">
      <div class="modelSliderLeftArrow">
        <i class="fas fa-angle-left"></i>
      </div>
      <img src="../assets/images/slider1.jpg" alt="sliderimage">
      <div class="modelSliderRightArrow">
        <i class="fas fa-angle-right"></i>
      </div>
    </div>
    <div class="modelDataWrap">
      <div class="modelData">
        <div class="modelHeader">Women collection</div>
        <div class="modelProductHeader">
          Moschino Cheap And Chic
        </div>
        <div class="modelProductDesc">
          Compellingly actualize fully researched processes before proactive outsourcing.
          Progressively syndicate collaborative architectures before cutting-edge services.
          Completely visualize parallel core competencies rather than exceptional portals.
        </div>
        <div class="modelProductDetails">
          <div>
            <span class="modelProductParam">Material:</span>
            <span class="modelProductValue">Cotton</span>
          </div>
          <div>
            <span class="modelProductParam">Designer:</span>
            <span class="modelProductValue">Binburhan</span>
          </div>
        </div>
        <div class="modelProductPrice">
          $561
        </div>
        <form class="modelProductOrder">
          <div class="modelProductOrderUnit">
            <label for="color">Choose color</label>
            <div class="modelProductSelectWrap">
              <i class="fas fa-chevron-down"></i>
              <div class="modelProductColorValue"></div>
              <select class="modelProductColor" name="color" id="color">
                <option value="">Red</option>
                <option value="">Green</option>
                <option value="">Blue</option>
              </select>
            </div>
          </div>
          <div class="modelProductOrderUnit">
            <label for="size">Choose size</label>
            <div class="modelProductSelectWrap">
              <i class="fas fa-chevron-down"></i>
              <select name="size" id="size">
                <option value="">XXL</option>
                <option value="">XL</option>
                <option value="">L</option>
              </select>
            </div>
          </div>
          <div class="modelProductOrderUnit">
            <label for="third">Quantity</label>
            <input id="third" type="text" value="2">
          </div>
          <button>
            <img src="../assets/images/basket.svg" alt="cart">
            Add to Cart
          </button>
        </form>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Model',
};
</script>

<style scoped>
.modelWrap .modelSlider {
  position: relative;
}
.modelWrap .modelSlider img {
  min-height: 777px;
  width: 100%;
  object-fit: cover;
  object-position: center center;
}
.modelWrap .modelSlider .modelSliderLeftArrow,
.modelWrap .modelSlider .modelSliderRightArrow {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: calc(50% - 47px / 2);
  width: 47px;
  height: 47px;
  color: #fff;
  background: #d8d8d8;
  cursor: pointer;
}
.modelWrap .modelSlider .modelSliderRightArrow {
  right: 0;
}
.modelWrap .modelDataWrap {
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #eaeaea;
  padding-top: 73px;
  padding-bottom: 122px;
  position: relative;
  top: -86px;
  background: #fff;
}
.modelWrap .modelDataWrap .modelData {
  width: 620px;
  padding: 15px;
  box-sizing: border-box;
}
@media (max-width: 650px) {
  .modelWrap .modelDataWrap .modelData {
    width: auto;
  }
}
.modelWrap .modelDataWrap .modelData .modelHeader {
  width: 148px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  text-transform: uppercase;
  color: #f49faa;
  font-size: 14px;
  font-weight: 900;
  padding-bottom: 15px;
  border-bottom: 1px solid #eaeaea;
  position: relative;
}
.modelWrap .modelDataWrap .modelData .modelHeader:after {
  content: '';
  display: block;
  position: absolute;
  bottom: -2px;
  left: calc(50% - 64px / 2);
  width: 64px;
  height: 3px;
  background-color: #f49faa;
}
.modelWrap .modelDataWrap .modelData .modelProductHeader {
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 900;
  color: #4d4d4d;
  margin-top: 17px;
  text-align: center;
  margin-bottom: 67px;
}
.modelWrap .modelDataWrap .modelData .modelProductDesc {
  color: #5e5e5e;
  font-weight: 300;
  text-align: justify;
}
.modelWrap .modelDataWrap .modelData .modelProductDetails {
  margin-top: 28px;
  margin-bottom: 37px;
  display: flex;
  justify-content: center;
  font-weight: 700;
  text-transform: uppercase;
}
.modelWrap .modelDataWrap .modelData .modelProductDetails > div:first-child {
  margin-right: 44px;
}
.modelWrap .modelDataWrap .modelData .modelProductDetails .modelProductParam {
  color: #b9b9b9;
}
.modelWrap .modelDataWrap .modelData .modelProductDetails .modelProductValue {
  color: #2f2f2f;
}
.modelWrap .modelDataWrap .modelData .modelProductPrice {
  color: #f49faa;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  padding-bottom: 43px;
  margin-bottom: 63px;
  border-bottom: 1px solid #eaeaea;
}
.modelWrap .modelDataWrap .modelData .modelProductOrder {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 537px;
  margin-left: auto;
  margin-right: auto;
}
@media (max-width: 587px) {
  .modelWrap .modelDataWrap .modelData .modelProductOrder {
    width: auto;
  }
}
@media (max-width: 493px) {
  .modelWrap .modelDataWrap .modelData .modelProductOrder {
    flex-direction: column;
  }
}
.modelWrap .modelDataWrap .modelData .modelProductOrderUnit label {
  color: #2f2f2f;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 16px;
  display: block;
}
.modelWrap .modelDataWrap .modelData .modelProductOrderUnit select,
.modelWrap .modelDataWrap .modelData .modelProductOrderUnit input {
  width: 144px;
  height: 35px;
  display: block;
  border: 1px solid #eaeaea;
  padding: 8px 10px;
  font-size: 13px;
  color: #bcbcbc;
  outline: none;
}
@media (max-width: 493px) {
  .modelWrap .modelDataWrap .modelData .modelProductOrderUnit select,
  .modelWrap .modelDataWrap .modelData .modelProductOrderUnit input {
    width: 100%;
  }
}
.modelWrap .modelDataWrap .modelData .modelProductOrderUnit select {
  -webkit-appearance: none;
}
@media (max-width: 493px) {
  .modelWrap .modelDataWrap .modelData .modelProductOrderUnit select {
    margin-bottom: 10px;
  }
}
.modelWrap .modelDataWrap .modelData .modelProductOrderUnit .modelProductSelectWrap {
  position: relative;
}
.modelWrap .modelDataWrap .modelData .modelProductOrderUnit .modelProductSelectWrap i {
  color: #bcbcbc;
  position: absolute;
  right: 8px;
  top: 12px;
  display: block;
  font-size: 12px;
}
.modelProductOrderUnit .modelProductSelectWrap .modelProductColorValue {
  position: absolute;
  width: 12px;
  height: 12px;
  background: #f49faa;
  top: 11px;
  left: 44px;
}
.modelProductOrderUnit .modelProductSelectWrap .modelProductColor {
  padding-left: 37px;
}
.modelProductOrderUnit input {
  box-sizing: border-box;
}
.modelProductOrder button {
  width: 100%;
  border: none;
  background: #f49faa;
  margin-top: 28px;
  padding: 15px;
  color: white;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
}
button:hover {
  cursor: pointer;
}
button > img:hover {
  color: black;
}
.modelWrap .modelDataWrap .modelData .modelProductOrder button img {
  margin-right: 15px;
}

</style>
