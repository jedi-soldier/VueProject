<template>
  <div>
    <Arrivals></Arrivals>
    <Cartwrap :cart_data="CART"></Cartwrap>
    <Purchase></Purchase>
  </div>
</template>

<script>
// eslint-disable-next-line import/extensions
import Arrivals from '@/blocks/Arrivals';
// eslint-disable-next-line import/extensions
import Cartwrap from '@/blocks/Cartwrap';
// eslint-disable-next-line import/extensions
import Purchase from '@/blocks/Purchase';
import { mapGetters } from 'vuex';

export default {
  name: 'BigCart',
  components: { Purchase, Cartwrap, Arrivals },
  computed: {
    ...mapGetters([
      'CART',
    ]),
  },
};
</script>

<style scoped>

</style>
