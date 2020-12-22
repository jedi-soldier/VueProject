<template>
  <div class="arrivals">
    <div class="container">
      <div class="arrivalsWrap">
        <div class="arrivalsText">New Arrivals </div>
        <nav class="arrivalsBreadcrumbs">
          <a href="#">Home</a>
          <span>/</span>
          <a href="#">Men</a>
          <span>/</span>
          <a href="#">New arrivals</a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Arrivals',
};
</script>

<style scoped>
.arrivals {
  height: auto;
  background-color: #f8f3f4;
}
.arrivals .arrivalsWrap {
  display: grid;
  grid-template-columns: 50% 50%;
  height: 150px;
  align-items: center;
}
@media (max-width: 1160px) {
  .arrivals .arrivalsWrap {
    padding-left: 15px;
  }
}
.arrivals .arrivalsWrap .arrivalsText {
  color: #f16d7f;
  font-size: 24px;
  font-weight: 400;
  line-height: 20px;
  text-transform: uppercase;
}
.arrivals .arrivalsWrap .arrivalsBreadcrumbs {
  text-align: right;
}
@media (max-width: 1160px) {
  .arrivals .arrivalsWrap .arrivalsBreadcrumbs {
    padding-right: 25px;
  }
}
.arrivals .arrivalsWrap .arrivalsBreadcrumbs a {
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  text-transform: uppercase;
  color: #636363;
  text-decoration: none;
}
.arrivals .arrivalsWrap .arrivalsBreadcrumbs a:last-child {
  color: #f16d7f;
}
.arrivals .arrivalsWrap .arrivalsBreadcrumbs span {
  font-weight: 300;
}
@media (max-width: 991px) {
  .arrivals .arrivalsWrap {
    height: 100px;
  }
}
@media (max-width: 450px) {
  .arrivals .arrivalsWrap {
    height: 50px;
  }
}
</style>
