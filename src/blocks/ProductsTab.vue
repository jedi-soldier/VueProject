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
          <div class="productsSorting">
            <form action="#" class="sortingUnit">
              <button
                class="sortingTitle"
                type="submit" @click="filtering(userSearch)">Sort!</button>
              <input type="text" class="sortingSelect" v-model="userSearch" >
            </form>
          </div>
          <div class="products">
            <Good
              v-for='good in sorting'
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
    SortPrice,
    SortSize,
    SortTrend,
    Accordeon,
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
    ]),
    sorting() {
      if (this.filtered.length) {
        return this.filtered;
      }
      return this.PRODUCTS;
    },
  },
  data() {
    return {
      filtered: [],
      userSearch: '',
    };
  },
  methods: {
    ...mapActions([
      'fetchGoodData',
      'cartAdd',
    ]),
    filtering(userSearch) {
      this.filtered = [];
      const regexp = new RegExp(userSearch, 'i');
      this.filtered = this.PRODUCTS.filter((el) => regexp.test(el.product_name));
    },
    addToCart(data) {
      this.cartAdd(data);
    },
  },
  mounted() {
    this.filtering();
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

.productsSorting {
  min-height: 50px;
  background-color: #f3f3f3;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 41px;
  width: 35%;
}
.productsSorting .sortingUnit {
  display: flex;
}
.productsSorting .sortingUnit:first-child {
  margin-right: 10px;
}
@media (max-width: 326px) {
  .productsSorting .sortingUnit:first-child {
    margin-bottom: 10px;
  }
}
.productsSorting .sortingUnit .sortingTitle,
.productsSorting .sortingUnit .sortingSelect {
  border: 1px solid #ebebeb;
  background: white;
  padding: 8px;
  box-sizing: border-box;
  height: 30px;
  color: #6f6e6e;
  font-size: 14px;
  font-weight: 400;
  line-height: 11px;
}
.productsSorting .sortingUnit .sortingTitle {
  border-right: none;
}
.productsSorting .sortingUnit .sortingSelect i {
  margin-left: 21px;
}

</style>
