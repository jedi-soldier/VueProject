<template>
  <header class="header">
    <div class="container">
      <Logo></Logo>
      <Search></Search>
      <Cart></Cart>
      <Littlecart :cart_data="CART"></Littlecart>
    </div>
  </header>
</template>

<script>

// eslint-disable-next-line import/extensions
import Logo from '@/components/Logo';
// eslint-disable-next-line import/extensions
import Search from '@/components/Search';
// eslint-disable-next-line import/extensions
import Cart from '@/components/Cart';
// eslint-disable-next-line import/extensions
import Littlecart from '@/components/Littlecart';

import { mapGetters } from 'vuex';

export default {
  name: 'Header',
  components: {
    Littlecart,
    Cart,
    Logo,
    Search,
  },
  computed: {
    ...mapGetters([
      'CART',
    ]),
  },
};

</script>

<style scoped>
.header {
  height: 100px;
  border-bottom: 1px solid #ececec;
}
@media (max-width: 991px) {
  .header {
    height: auto;
    padding: 15px;
  }
}
.header .container {
  display: flex;
  align-items: center;
  height: inherit;
}
@media (max-width: 991px) {
  .header .container {
    flex-direction: column;
    width: 100%;
  }
}
@media (max-width: 991px) {
  .header .container > *:not(.logo) {
    margin-top: 15px;
  }
}

</style>
