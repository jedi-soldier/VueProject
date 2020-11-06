<template>
  <div class="container productsContainer">
     <div class="row">
          <div class="col-md-3">
            <Accordeon></Accordeon>
          </div>
        <div class="col-md-9">
          <div class="productsAdjustment">
            <SortTrend></SortTrend>
            <SortSize></SortSize>
            <SortPrice></SortPrice>
          </div>
          <SortName></SortName>
          <div class="products">
            <Good
              v-for='good in PRODUCTS'
              :key="good.id_product"
              v-bind:good_data="good"
              @addToCart="addToCart">
            </Good>
          </div>
          <Pagination></Pagination>
        </div>
     </div>
 </div>
</template>

<script>
// eslint-disable-next-line import/extensions
import Accordeon from '@/components/Accordeon';
// eslint-disable-next-line import/extensions
import SortTrend from '@/components/SortTrend';
// eslint-disable-next-line import/extensions
import SortSize from '@/components/SortSize';
// eslint-disable-next-line import/extensions
import SortPrice from '@/components/SortPrice';
// eslint-disable-next-line import/extensions
import SortName from '@/components/SortName';
// eslint-disable-next-line import/extensions
import Good from '@/components/Good';
// eslint-disable-next-line import/extensions
import Pagination from '@/components/Pagination';
// eslint-disable-next-line no-unused-vars
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ProductsTab',
  components: {
    Pagination,
    Good,
    SortName,
    SortPrice,
    SortSize,
    SortTrend,
    Accordeon,
  },
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
.row {
  display: grid;
  grid-template-columns: 1fr 3fr;
}

.products {
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 100px;
}

.productsContainer {
  margin-top: 50px;
}
.productsAdjustment {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
@media (max-width: 767px) {
  .productsAdjustment {
    margin-top: 30px;
  }
}

</style>
