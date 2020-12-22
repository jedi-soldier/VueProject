<template>
  <section class="tradeIndex">
    <div class="container">
      <header class="tradeIndex_header">
        <h1>Fetured Items</h1>
        <p>Shop for items based on&nbsp;what we&nbsp;featured in&nbsp;this week</p>
      </header>
      <div class="tradeIndex_products">
        <Good
          v-for='good in PRODUCTS'
          :key="good.id_product"
          v-bind:good_data="good"
          @addToCart="addToCart">
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
// eslint-disable-next-line no-unused-vars
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'TradeSection',
  components: { Good },
  props: {},
  computed: {
    ...mapGetters([
      'PRODUCTS',
    ]),
  },
  data() {
    return {
    };
  },
  methods: {
    ...mapActions([
      'fetchGoodData',
      'cartAdd',
    ]),
    addToCart(data) {
      this.cartAdd(data);
    },
  },
  mounted() {
    this.fetchGoodData();
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
