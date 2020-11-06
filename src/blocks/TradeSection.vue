<template>
  <section class="tradeIndex">
    <div class="container">
      <header class="tradeIndex_header">
        <h1>Fetured Items</h1>
        <p>Shop for items based on&nbsp;what we&nbsp;featured in&nbsp;this week</p>
      </header>
      <div class="tradeIndex_products">
        <Good
          v-for='good in goods'
          :key="good.id_product"
          v-bind:good_data="good">
        </Good>
      </div>
      <div class="tradeIndex_link">
        <router-link to="/catalog">
          <a href="">Browse All Product &rarr;</a>
      </router-link>
      </div>
    </div>
  </section>
</template>

<script>
// eslint-disable-next-line import/extensions
import Good from '@/components/Good';

export default {
  name: 'TradeSection',
  components: { Good },
  props: {},
  data() {
    return {
      goods: [
        {
          id_product: '1',
          product_image: 'product1.jpg',
          product_name: 'Mango People T-shir 1',
          price: 51,
        },
        {
          id_product: '2',
          product_image: 'product2.jpg',
          product_name: 'Mango People T-shir 2',
          price: 52,
        },
        {
          id_product: '3',
          product_image: 'product3.jpg',
          product_name: 'Mango People T-shir 3',
          price: 53,
        },
        {
          id_product: '4',
          product_image: 'product4.jpg',
          product_name: 'Mango People T-shir 4',
          price: 54,
        },
        {
          id_product: '5',
          product_image: 'product5.jpg',
          product_name: 'Mango People T-shir 5',
          price: 55,
        },
        {
          id_product: '6',
          product_image: 'product6.jpg',
          product_name: 'Mango People T-shir 6',
          price: 56,
        },
        {
          id_product: '7',
          product_image: 'product7.jpg',
          product_name: 'Mango People T-shir 7',
          price: 57,
        },
        {
          id_product: '8',
          product_image: 'product8.jpg',
          product_name: 'Mango People T-shir 8',
          price: 58,
        },
      ],
    };
  },
};
</script>

<style scoped>
.tradeIndex {
  margin-top: 100px;
  width: inherit;
}
.tradeIndex_header h1 {
  text-align: center;
  color: #222222;
  font-size: 30px;
  font-weight: 700;
  line-height: 50px;
  letter-spacing: 0.75px;
}
.tradeIndex_header p {
  text-align: center;
  color: #9f9f9f;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.35px;
}
@media (max-width: 600px) {
  .tradeIndex_header p {
    padding-left: 10px;
  }
}
.tradeIndex_products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 376px);
  grid-gap: 20px;
  margin-top: 60px;
  padding: 0 15px;
}
@media (max-width: 1140px) {
  .tradeIndex_products {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 376px);
    justify-items: center;
  }
}
@media (max-width: 600px) {
  .tradeIndex_products {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(8, 376px);
    justify-items: center;
  }
}
.tradeIndex_link {
  width: inherit;
  display: flex;
  justify-content: center;
  margin-top: 100px;
}
.tradeIndex_link a {
  width: 212px;
  height: 48px;
  background-color: #f16d7f;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  line-height: 54px;
  letter-spacing: 0.4px;
  display: block;
  text-align: center;
  text-decoration: none;
}
.tradeIndex_link a:hover {
  color: black;
}

</style>
