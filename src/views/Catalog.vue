<template>
 <div>
   <Arrivals></Arrivals>
   <ProductsTab></ProductsTab>
   <Benefits></Benefits>
 </div>
</template>

<script>
// eslint-disable-next-line import/extensions
import Arrivals from '@/blocks/Arrivals';
// eslint-disable-next-line import/extensions
import ProductsTab from '@/blocks/ProductsTab';
// eslint-disable-next-line import/extensions
import Benefits from '@/blocks/Benefits';

export default {
  name: 'Catalog',
  components: { Benefits, ProductsTab, Arrivals },
};
</script>

<style scoped>

</style>
