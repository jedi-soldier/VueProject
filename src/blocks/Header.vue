<template>
  <header class="header">
    <div class="container">
      <Logo/>
      <Search></Search>
      <Cart></Cart>
    </div>
  </header>
</template>

<script>
import Logo from '@/components/Logo.vue';
import Search from '@/components/Search.vue';
// eslint-disable-next-line import/extensions
import Cart from '@/components/Cart';

export default {
  name: 'Header',
  components: {
    Cart,
    Logo,
    Search,
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
