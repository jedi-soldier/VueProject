<template>
  <div class="logo">
    BRAN<span>D</span>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
  width: 165px;
  line-height: 51px;
  background: url(../assets/images/logo.png) no-repeat;
  font-size: 27px;
  font-weight: 300;
  padding-left: 60px;
}
.logo span {
  color: #f16d7f;
  font-weight: 900;
  letter-spacing: 0.68px;
}
</style>
