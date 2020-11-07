<template>
  <div>
    <div class="cart-block">
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

p {
  margin: 0 0 5px 0;
}
.cart-block{
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.62);
  border-radius: 5px;
  box-sizing: border-box;
  left: 68vw;
  top: 80px;
  position: absolute;
  background-color: white;
  padding: 20px;
  color: black;
  width: 300px;
  z-index: 9999;
}

@media (max-width: 991px){
  .cart-block {
    left: 50vw;
    top: 200px;
  }
}
@media (max-width: 630px){
  .cart-block {
    left: 40vw;
    top: 200px;
  }
}
@media (max-width: 520px){
  .cart-block {
    left: 20vw;
  }
}
@media (max-width: 400px){
  .cart-block {
    left: 15px;
  }
}

.cart-item img{
  align-self: flex-start;
  margin-right: 15px;
}

</style>
