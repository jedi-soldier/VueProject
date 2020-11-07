<template>
  <div>
    <Arrivals></Arrivals>
    <Forms></Forms>
  </div>
</template>

<script>

// eslint-disable-next-line import/extensions
import Arrivals from '@/blocks/Arrivals';
// eslint-disable-next-line import/extensions
import Forms from '@/blocks/Forms';

export default {
  components: {
    Forms,
    Arrivals,
  },
};
</script>
