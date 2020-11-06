<template>
  <div class="prodwrap">
    <div class="productInCart">
      <div class="productInCart_image"><img src="../assets/images/Layer_43.jpg" alt="product"></div>
      <div class="productInCart_info">
        <div class="productInCart_name">Mango People T-shirt</div><br>
       <div class="productInCart_description">Color: <span>Red</span><br>Size:<span>Xll</span></div>
      </div>
    </div>
    <div class="smallProductStats">
      <div class="cartHeader_text">unite Price</div>
      <div class="productInCart_stats_price">$150</div>
      <div class="cartHeader_text">Quantity</div>
      <div class="productInCart_stats_volume">2</div>
      <div class="cartHeader_text">shipping</div>
      <div class="productInCart_stats_shipping">free</div>
      <div class="cartHeader_text">Subtotal</div>
      <div class="productInCart_stats_sum">$300</div>
      <div class="cartHeader_text">ACTION</div>
      <div class="productInCart_delete"><i class="fa fa-times" aria-hidden="true"></i>
      </div>
    </div>
    <div class="productInCart_stats_price bigProductStats">$150</div>
    <div class="productInCart_stats_volume bigProductStats">2</div>
    <div class="productInCart_stats_shipping bigProductStats">free</div>
    <div class="productInCart_stats_sum bigProductStats">$300</div>
    <div class="productInCart_delete bigProductStats"><i class="fa fa-times" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Cartproduct',
};
</script>

<style scoped>
.prodwrap {
  display: grid;
  grid-template-columns: 500px 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 200px;
  align-items: center;
  padding-left: 15px;
}
@media (max-width: 991px) {
  .prodwrap {
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 200px;
    padding-left: 15px;
  }
}

.productInCart{
  width: 200px;
  display: flex;
  justify-content: flex-start;
}
.smallProductStats {
  display: none;
}

@media (max-width: 750px) {
  .prodwrap {
   display: flex;
    justify-content: space-between;
  }
  .productInCart{
    width: auto;
  }
  .productInCart_stats_price,
  .productInCart_stats_volume,
  .productInCart_stats_shipping,
  .productInCart_stats_sum,
  .productInCart_delete {
    margin-left: 10px;
  }

  .productInCart_image {
    margin-right: 20px;
  }
  .bigProductStats {
    display: none;
  }
  .smallProductStats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(5, 30px);
    margin-right: 10px;
  }
  .smallProductStats .cartHeader_text {
    color: #222222;
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
  }
  .smallProductStats .productInCart_stats_price,
  .smallProductStats .productInCart_stats_shipping,
  .smallProductStats .productInCart_stats_sum {
    color: #222222;
    font-size: 12px;
    font-weight: 300;
    text-transform: uppercase;
  }
  .smallProductStats .productInCart_stats_volume {
    width: 25px;
    height: 25px;
    line-height: 25px;
  }
}
.productInCart_name {
  color: #222222;
  font-size: 13px;
  font-weight: 400;
  text-transform: uppercase;
}
.productInCart_description {
  font-size: 13px;
  line-height: 20px;
  color: #575757;
  font-weight: 400;
}
.productInCart_stats_volume {
  width: 54px;
  height: 30px;
  border: 1px solid #eaeaea;
  text-align: center;
  line-height: 30px;
  margin-top: -5px;

}
.productInCart_delete {
  width: 15px;
  height: 15px;
  background-color: #c0c0c0;
  font-size: 10px;
  font-weight: 400;
  color: white;
  border-radius: 50%;
  text-align: center;
  line-height: 15px;
  margin-left: 20px;
}
.productInCart_description span {
  font-weight: 300;
  color: #6f6e6e;
  font-size: 13px;
  line-height: 20px;
}

.productInCart_delete i {
  line-height: 1.5;
}
.productInCart_stats_price,
.productInCart_stats_shipping,
.productInCart_stats_sum {
  color: #222222;
  font-size: 13px;
  font-weight: 700;
  line-height: 20px;
  text-transform: uppercase;
  letter-spacing: -0.2px;
}

</style>
