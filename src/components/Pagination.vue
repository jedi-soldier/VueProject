<template>
  <div class="paginationWrap">
    <div class="pagination">
      <i class="fas fa-chevron-left"></i>
      <a href="#">1</a>
      <a href="#">2</a>
      <a href="#">3</a>
      <a href="#">4</a>
      <a href="#">5</a>
      <span>
        <a href="#">6</a>
        .....
        <a href="#">20</a>
      </span>
      <i class="fas fa-chevron-right"></i>
    </div>
    <button>View All</button>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
};
</script>

<style scoped>

.paginationWrap {
  display: flex;
  justify-content: space-between;
}
@media (max-width: 469px) {
  .paginationWrap {
    flex-direction: column;
    height: 120px;
  }
}
.paginationWrap .pagination {
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 260px;
  border-radius: 3px;
  border: 1px solid #ebebeb;
  color: #c4c4c4;
}
.paginationWrap .pagination a,
.paginationWrap .pagination i {
  color: #c4c4c4;
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  text-decoration: none;
}
.paginationWrap .pagination a:hover,
.paginationWrap .pagination i:hover {
  color: #ef5b70;
  cursor: pointer;
}
.paginationWrap button {
  width: 150px;
  min-height: 44px;
  border-radius: 3px;
  border: 1px solid #ef5b70;
  background: none;
  color: #ef5b70;
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
}

</style>
