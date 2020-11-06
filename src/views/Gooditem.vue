<template>
<div>
  <Arrivals></Arrivals>
  <Model></Model>
  <TradeSection></TradeSection>
</div>
</template>

<script>
// eslint-disable-next-line import/extensions
import Arrivals from '@/blocks/Arrivals';
// eslint-disable-next-line import/extensions
import Model from '@/blocks/Model';
// eslint-disable-next-line import/extensions
import TradeSection from '@/blocks/TradeSection';

export default {
  name: 'Gooditem',
  components: { TradeSection, Model, Arrivals },
};
</script>

<style scoped>

</style>
