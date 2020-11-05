<template>
  <div id="app">
    <Header></Header>
    <nav class="topNav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">Man</router-link>
      <router-link to="/">Women</router-link>
      <router-link to="/about">Kids</router-link>
      <router-link to="/">Accoseriese</router-link>
      <router-link to="/about">Featured</router-link>
      <router-link to="/about">Hot Deals</router-link>
    </nav>
    <router-view/>
    <Subscriber></Subscriber>
    <Links></Links>
    <Footer></Footer>
  </div>
</template>

<style lang="less">
  .container {
    width: 1140px;
    margin: 0 auto;
  }
  @media (max-width: 1139px) {
    .container {
      width: 100%;
    }
  }
  .clfx {
    content: "";
    clear: both;
    display: table;
  }

  .topNav {
    min-height: 51px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 520px) {
    .topNav {
      flex-direction: column;
      justify-content: flex-start;
      flex-wrap: nowrap;
      align-items: flex-start;
    }
  }

  .topNav a {
    color: #222222;
    font-size: 14px;
    font-weight: 700;
    line-height: 14px;
    text-transform: uppercase;
    padding: 18px;
    display: block;
    text-decoration: none;
    border-bottom: 3px solid white;
  }

  .topNav a:hover {
    border-bottom: 3px solid #ef5b70;
  }

  .topNav a:not(:last-child) {
    margin-right: 46px;
  }

</style>
<script>
// eslint-disable-next-line import/extensions
import Header from '@/blocks/Header';
// eslint-disable-next-line import/extensions
import Subscriber from '@/blocks/Subscriber';
// eslint-disable-next-line import/extensions
import Links from '@/blocks/Links';
// eslint-disable-next-line import/extensions
import Footer from '@/blocks/Footer';

export default {
  components: {
    Footer,
    Links,
    Header,
    Subscriber,
  },
};
</script>
