<template>
  <div>
    <button class="btn-cart" type="button">Корзина</button>
    <div class="cart-block" v-show="true">
      <p v-if="!CART.length">Корзина пуста</p>
      <Cartitem
        v-for='(cartItem, index) in cart_data'
        :key="cartItem.id_product"
        :cart-item-dat="cartItem"
        @deleteFromCart="deleteFromCart(index)">
      </Cartitem>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/extensions
import Cartitem from '@/components/Cartitem';

import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Littlecart',
  components: { Cartitem },
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

button:focus{
  outline: none;
}

.btn-cart{
  background-color: #fafafa;
  padding: 10px 20px;
  border: 1px solid transparent;
  color: #2f2a2d;
  border-radius: 5px;
  transition: all ease-in-out .4s;
  cursor: pointer;
}
.btn-cart:hover{
  background-color: transparent;
  border-color: #fafafa;
  color: #fafafa;
}
.btn-cart, .logo{
  align-self: center;
}
p {
  margin: 0 0 5px 0;
}

img {
  max-width: 100%;
  height: auto
}

.cart-block{
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.62);
  border-radius: 5px;
  box-sizing: border-box;
  right: 130px;
  top: 80px;
  position: absolute;
  background-color: white;
  padding: 20px;
  color: black;
  width: 300px;
}

.cart-block:before{
  content: '';
  width: 0;
  height: 0;
  position: absolute;
  top: -10px;
  right: 35px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid white;
}

.cart-item {
  display: flex;
  justify-content: space-between;
}
.cart-item:not(:last-child){
  margin-bottom: 20px;
}

.cart-item img{
  align-self: flex-start;
  margin-right: 15px;
}

</style>
