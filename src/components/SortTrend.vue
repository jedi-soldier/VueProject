<template>
  <div class="adjustmentMain">
    <div class="adjustmentTitle">Trending now</div>
    <nav class="adjustmentLinks">
      <a href="#">Bohemian</a>
      <a href="#">Floral</a>
      <a href="#">Lace</a>
      <a href="#">Floral</a>
      <a href="#">Lace</a>
      <a href="#">Bohemian</a>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'SortTrend',
};

</script>

<style scoped>
.adjustmentMain {
  width: 200px;
  margin-left: 10px;
 }
.adjustmentTitle {
  color: #6f6e6e;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  text-transform: uppercase;
  margin-bottom: 25px;
}
.adjustmentLinks {
  font-size: 14px;
  font-weight: 400;
  line-height: 26px;
  color: #dfdfdf;
  display: flex;
  flex-wrap: wrap;
}
.adjustmentLinks a {
  color: #6f6e6e;
  padding-left: 7px;
}
.adjustmentLinks a:after {
  content: '|';
  margin-left: 7px;
}
.adjustmentLinks a:last-child:after {
  display: none;
}

</style>
