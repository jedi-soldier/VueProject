<template>
  <div class="prodwrap">
    <div class="productInCart">
      <div class="productInCart_image">
        <img :src="require('../assets/images/' + cartItemDat.product_image)" alt="Some image">
      </div>
      <div class="productInCart_info">
        <div class="productInCart_name">{{cartItemDat.product_name}}</div><br>
       <div class="productInCart_description">Color: <span>Red</span><br>Size:<span>Xll</span></div>
      </div>
    </div>
    <div class="smallProductStats">
      <div class="cartHeader_text">unite Price</div>
      <div class="productInCart_stats_price">${{cartItemDat.price}}</div>
      <div class="cartHeader_text">Quantity</div>
      <div class="productInCart_stats_volume">2</div>
      <div class="cartHeader_text">shipping</div>
      <div class="productInCart_stats_shipping">free</div>
      <div class="cartHeader_text">Subtotal</div>
      <div class="productInCart_stats_sum">${{cartItemDat.price * cartItemDat.quant}}</div>
      <div class="cartHeader_text">ACTION</div>
      <div class="productInCart_delete"><i class="fa fa-times" aria-hidden="true"></i>
      </div>
    </div>
    <div class="productInCart_stats_price bigProductStats">${{cartItemDat.price}}</div>
    <div class="productInCart_stats_volume bigProductStats">{{cartItemDat.quant}}</div>
    <div class="productInCart_stats_shipping bigProductStats">free</div>
    <div class="productInCart_stats_sum bigProductStats">
      ${{cartItemDat.price * cartItemDat.quant}}
    </div>
    <div
      class="productInCart_delete bigProductStats"
      @click="deleteFromCart"><i class="fa fa-times" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Cartproduct',
  props: {
    cartItemDat: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  mounted() {
  //  this.$set(this.cartItemDat, 'quant', 1);
  },
  methods: {
    deleteFromCart() {
      this.$emit('deleteFromCart');
    },
  },
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
.productInCart_image > img {
  width: 100px;
  height: inherit;
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
