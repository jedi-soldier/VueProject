<template>
  <div class="cart-item">
    <div class="product-bio">
      <img :src="require('../assets/images/' + cartItemDat.product_image)" alt="Some image">
      <div class="product-desc">
        <p class="product-title">{{cartItemDat.product_name}}</p>
        <p class="product-quantity">Количество: {{ cartItemDat.quant }} </p>
        <p class="product-single-price">Цена: {{cartItemDat.price}} $</p>
      </div>
    </div>
    <div class="right-block">
      <p class="product-price">$</p>
      <button class="del-btn" @click="deleteFromCart" >X</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cartitem',
  props: {
    cartItemDat: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    deleteFromCart() {
      this.$emit('deleteFromCart');
    },
  },
  mounted() {
    this.$set(this.cartItemDat, 'quant', 1);
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

img {
  max-width: 100px;
  height: 100px
}

.del-btn:hover{
  background-color: #fafafa;
  color: #2f2a2d;
  border: 1px solid #2f2a2d;
}
.cart-item {
  display: flex;
  justify-content: space-between;
}
.cart-item:not(:last-child){
  margin-bottom: 20px;
}
.product-bio{
  display: flex;
}
.cart-item img{
  align-self: flex-start;
  margin-right: 15px;
}
.product-single-price{
  color: #474747;
  font-size: 0.8em;
}
.product-price{
  margin-left: 30px;
}
.product-desc{
  max-width: 150px;
}
.product-quantity {
  margin-top: 15px;
  font-size: 0.95em;
}
.right-block{
  text-align: right;
}
</style>
