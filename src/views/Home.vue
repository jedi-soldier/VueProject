<template>
  <div>
    <PromoBrand></PromoBrand>
    <Categories></Categories>
    <TradeSection></TradeSection>
  </div>
</template>

<script>

// eslint-disable-next-line import/extensions
import PromoBrand from '@/blocks/PromoBrand';
// eslint-disable-next-line import/extensions
import Categories from '@/blocks/Categories';
// eslint-disable-next-line import/extensions
import TradeSection from '@/blocks/TradeSection';

export default {
  components: {
    TradeSection,
    Categories,
    PromoBrand,
  },
};
</script>
