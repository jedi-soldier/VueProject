<template>
  <div>
    <Arrivals></Arrivals>
    <Cartwrap></Cartwrap>
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

export default {
  name: 'BigCart',
  components: { Purchase, Cartwrap, Arrivals },
};
</script>

<style scoped>

</style>
