<template>
  <div class="productsSorting">
    <div class="sortingUnit">
      <div class="sortingTitle">Sort By</div>
      <div class="sortingSelect">Name <i class="fas fa-caret-down"></i></div>
    </div>
    <div class="sortingUnit">
      <div class="sortingTitle">Show</div>
      <div class="sortingSelect">09 <i class="fas fa-caret-down"></i></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SortName',
};

</script>

<style scoped>

.productsSorting {
  min-height: 50px;
  background-color: #f3f3f3;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 41px;
  width: 35%;
}
.productsSorting .sortingUnit {
  display: flex;
}
.productsSorting .sortingUnit:first-child {
  margin-right: 10px;
}
@media (max-width: 326px) {
  .productsSorting .sortingUnit:first-child {
    margin-bottom: 10px;
  }
}
.productsSorting .sortingUnit .sortingTitle,
.productsSorting .sortingUnit .sortingSelect {
  border: 1px solid #ebebeb;
  background: white;
  padding: 8px;
  box-sizing: border-box;
  height: 30px;
  color: #6f6e6e;
  font-size: 14px;
  font-weight: 400;
  line-height: 11px;
}
.productsSorting .sortingUnit .sortingTitle {
  border-right: none;
}
.productsSorting .sortingUnit .sortingSelect i {
  margin-left: 21px;
}
</style>
