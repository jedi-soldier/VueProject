<template>
  <form class="topSearchForm">
    <div class="topSeacrhBrowse">Browse <i class="fas fa-caret-down"></i></div>
    <input type="text" placeholder="Search for Item...">
    <button>
      <i class="fas fa-search"></i>
    </button>
  </form>
</template>

<script>
export default {
  name: 'Search',
};
</script>

<style scoped>
.topSearchForm {
  display: flex;
  height: 38px;
  margin-left: 100px;
}
@media (max-width: 1200px) {
  .topSearchForm {
    margin-left: 40px;
  }
}
@media (max-width: 991px) {
  .topSearchForm {
    margin-left: 0;
  }
}
.topSearchForm .topSeacrhBrowse {
  border: 1px solid #e6e6e6;
  width: 87px;
  font-family: inherit;
  font-size: 14px;
  padding: 14px 26px 14px 15px;
  box-sizing: border-box;
  line-height: 9px;
  display: flex;
  color: #222222;
  font-weight: 300;
  background-color: #f8f8f8;
}
.topSearchForm .topSeacrhBrowse i {
  margin-left: 8px;
  line-height: 0.5;
}
.topSearchForm input {
  width: 279px;
  border-left: none;
  border-right: none;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  padding: 14px;
  outline: none;
}
@media (max-width: 450px) {
  .topSearchForm input {
    width: auto;
  }
}
@media (max-width: 365px) {
  .topSearchForm input {
    width: 150px;
  }
}
.topSearchForm button {
  width: 36px;
  border-radius: 0 3px 3px 0;
  border: 1px solid #e6e6e6;
  background: none;
}
.topSearchForm button i {
  color: #a4a4a4;
}

</style>
