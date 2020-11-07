<template>
  <div class="categories">
    <div class="container categoriesContainer">
      <div class="hotDeal">
        <div class="categoriesTextWrap">
          <div class="categoriesTextTop">HOT DEAL</div>
          <div class="categoriesTextBottom">FOR MEN</div>
        </div>
      </div>
      <div class="luxirous">
        <div class="categoriesTextWrap">
          <div class="categoriesTextTop">LUXIROUS & TRENDY</div>
          <div class="categoriesTextBottom">ACCESORIES</div>
        </div>
      </div>
      <div class="offer30">
        <div class="categoriesTextWrap">
          <div class="categoriesTextTop">30% OFFER</div>
          <div class="categoriesTextBottom">WOMEN</div>
        </div>
      </div>
      <div class="newArrivals">
        <div class="categoriesTextWrap">
          <div class="categoriesTextTop">NEW ARRIVALS</div>
          <div class="categoriesTextBottom">FOR KIDS</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Categories',
};
</script>

<style scoped>
.categories {
  margin-top: 100px;
}
@media (max-width: 1140px) {
  .categories {
    padding: 0 15px;
  }
  .categories .container {
    width: 100%;
  }
}
.hotDeal {
  width: 560px;
  height: 542px;
  background: url(../assets/images/offer1.jpg) no-repeat;
  position: absolute;
  left: 0;
  top: 0;
}
.categoriesTextWrap {
  padding: 16px;
  background: white;
  display: inline-block;
  margin-top: 26px;
}
@media (max-width: 600px) {
  .categoriesTextWrap {
    padding: 5px;
  }
}
.categoriesTextTop {
  color: #222222;
  font-weight: 900;
  font-size: 18px;
  letter-spacing: 0.45px;
}
@media (max-width: 600px) {
  .categoriesTextTop {
    font-size: 12px;
  }
}
.categoriesTextBottom {
  font-weight: 900;
  color: #f16d7f;
  font-size: 30px;
  letter-spacing: 0.75px;
}
@media (max-width: 600px) {
  .categoriesTextBottom {
    font-size: 15px;
  }
}
.luxirous {
  width: 560px;
  height: 261px;
  background: url(../assets/images/offer2.jpg) no-repeat;
  position: absolute;
  left: 0;
  bottom: 0;
}
.offer30 {
  width: 560px;
  height: 261px;
  background: url(../assets/images/offer3.jpg) no-repeat;
  position: absolute;
  right: 0;
  top: 0;
}
.newArrivals {
  width: 560px;
  height: 542px;
  background: url(../assets/images/offer4.jpg) no-repeat;
  position: absolute;
  right: 0;
  bottom: 0;
}
.categoriesContainer {
  height: 823px;
  position: relative;
}
@media (max-width: 1140px) {
  .categoriesContainer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 261px);
    grid-gap: 20px;
    position: static;
    width: 100%;
    height: auto;
  }
  .categoriesContainer .hotDeal {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 3;
    position: static;
    width: inherit;
    background-repeat: round;
    background-size: contain;
  }
  .categoriesContainer .luxirous {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
    position: static;
    width: inherit;
    background-repeat: round;
    background-size: contain;
  }
  .categoriesContainer .offer30 {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    position: static;
    width: inherit;
    background-repeat: round;
    background-size: contain;
  }
  .categoriesContainer .newArrivals {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 4;
    position: static;
    width: inherit;
    background-repeat: round;
    background-size: contain;
  }
}
@media (max-width: 950px) {
  .categoriesContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .categoriesContainer .hotDeal,
  .categoriesContainer .newArrivals {
    position: static;
    background-repeat: no-repeat;
    background-size: cover;
    width: 80%;
    height: 70vw;
    margin-bottom: 20px;
  }
  .categoriesContainer .luxirous,
  .categoriesContainer .offer30 {
    position: static;
    background-repeat: no-repeat;
    background-size: cover;
    width: 80%;
    height: 50vw;
    margin-bottom: 20px;
  }
}

</style>
