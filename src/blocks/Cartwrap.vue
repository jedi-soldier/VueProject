<template>
  <div class="shopcart">
    <div class="container">
      <div class="cartWrap">
        <div class="cartHeader_text bigProductStats">Product Details </div>
        <div class="cartHeader_text bigProductStats">unite Price</div>
        <div class="cartHeader_text bigProductStats">Quantity</div>
        <div class="cartHeader_text bigProductStats">shipping</div>
        <div class="cartHeader_text bigProductStats">Subtotal</div>
        <div class="cartHeader_text bigProductStats">ACTION</div>
      </div>
      <Cartproduct
        v-for='(cartItem, index) in cart_data'
        :key="cartItem.id_product"
        :cart-item-dat="cartItem"
        @deleteFromCart="deleteFromCart(index)">
      </Cartproduct>
      <div class="productInCart_buttons">
        <button class="productInCart_leftButton">cLEAR SHOPPING CART</button>
        <button class="productInCart_rightButton">cONTINUE sHOPPING</button>
      </div>
    </div>
  </div>
</template>

<script>

// eslint-disable-next-line import/extensions
import Cartproduct from '@/components/Cartproduct';

import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Cartwrap',
  components: { Cartproduct },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  computed: {
    ...mapGetters([
      'CART',
    ]),
  },
  methods: {
    ...mapActions([
      'deleteProductFromCart',
    ]),
    // eslint-disable-next-line no-unused-vars
    deleteFromCart(index) {
      this.deleteProductFromCart(index);
    },
  },
};
</script>

<style scoped>
.shopcart {
  margin-top: 90px;
}
.cartWrap {
  display: grid;
  grid-template-columns: 500px 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 50px;
  align-items: center;
}

@media (max-width: 991px) {
  .cartWrap {
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 50px;
    padding-left: 15px;
  }
}
@media (max-width: 750px) {
  .cartWrap {
   display: none;
  }
  .cartWrap > .bigProductStats {
    display: none;
  }

  .cartWrap > .cartHeader_text {
    color: #222222;
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
  }
}

.cartWrap > .cartHeader_text{
  color: #222222;
  font-size: 13px;
  font-weight: 700;
  line-height: 20px;
  text-transform: uppercase;
  letter-spacing: -0.2px;
}

.productInCart_buttons {
  margin-top: 45px;
  display: flex;
  justify-content: space-between;
}
@media (max-width: 1160px) {
  .productInCart_buttons {
    padding: 0 10px;
  }
}
.productInCart_buttons button {
  color: #4a4a4a;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 20px 38px 18px 38px;
  border: 1px solid #eaeaea;
  background-color: #ffffff;
}
</style>
