<template>
  <div class="accordion" id="accordionExample">
    <div class="card navUnit">
      <div class="navTitle" id="headingThree" data-target="#collapseOne" data-toggle="collapse">
        CATEGORY
        <i class="fas fa-caret-down"></i>
      </div>
      <div id="collapseOne" class="collapse show" data-parent="#accordionExample">
        <nav class="card-body">
          <a href="#">Accessories</a>
          <a href="#">Bags</a>
          <a href="#">Denim</a>
          <a href="#">Hoodies & Sweatshirts</a>
          <a href="#">Jackets & Coats</a>
          <a href="#">Pants</a>
          <a href="#">Polos</a>
          <a href="#">Shirts</a>
          <a href="#">Shoes</a>
          <a href="#">Shorts</a>
          <a href="#">Sweaters & Knits</a>
          <a href="#">T-Shirts</a>
          <a href="#">Tanks</a>
        </nav>
      </div>
      <div class="navTitle" id="headingThree" data-target="#collapseOne" data-toggle="collapse">
        BRAND
        <i class="fas fa-caret-down"></i>
      </div>
      <div class="navTitle" id="headingThree" data-target="#collapseOne" data-toggle="collapse">
        DESIGNER
        <i class="fas fa-caret-down"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accordeon',

};

</script>

<style scoped>
.accordion {
  margin-right: 10px;
}

.navTitle {
  background: none;
  border-radius: 0 !important;
  padding: 14px 16px;
  cursor: pointer;
  border-bottom: 1px solid #ebebeb;
  color: #6f6e6e;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.navTitle:before {
  position: absolute;
  left: 0;
  top: 0;
  content: '';
  width: 5px;
  height: 49px;
  background-color: #ef5b70;
}
.navTitle i {
  position: relative;
  top: 4px;
}
.navUnit {
  border: none;
  border-radius: 0;
}
.navUnit:not(:last-child) {
  margin-bottom: 18px;
}
.navUnit nav a {
  display: block;
  color: #6f6e6e;
  font-size: 14px;
  font-weight: 700;
  line-height: 33px;
  text-decoration: none;
}

</style>
