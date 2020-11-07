<template>
  <div class="benefits">
    <div class="container bencont">
      <div class="benefitUnit">
        <img src="../assets/images/list1.svg" alt="ben">
        <h3>Free Delivery</h3>
        <div class="benefitText">
          Worldwide delivery on all. Authorit tively morph
          next-generation innov tion with extensive models.
        </div>
      </div>
      <div class="benefitUnit">
        <img src="../assets/images/list2.svg" alt="ben">
        <h3>Sales & discounts</h3>
        <div class="benefitText">
          Worldwide delivery on all. Authorit tively morph
          next-generation innov tion with extensive models.
        </div>
      </div>
      <div class="benefitUnit">
        <img src="../assets/images/list3.svg" alt="ben">
        <h3>Quality assurance</h3>
        <div class="benefitText">
          Worldwide delivery on all. Authorit tively morph
          next-generation innov tion with extensive models.
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Benefits',
};
</script>

<style scoped>
.benefits {
  min-height: 341px;
  background-color: #222224;
  margin-top: 110px;
  color: white;
}
.benefits .bencont {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  padding-top: 70px;
}
@media (max-width: 994px) {
  .benefits .bencont {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
    grid-row-gap: 20px;
    padding-bottom: 20px;
  }
}
.benefitUnit {
  text-align: center;
  max-width: 309px;
}
@media (max-width: 1199px) {
  .benefitUnit {
    max-width: 270px;
  }
}
@media (max-width: 991px) {
  .benefitUnit:not(:first-child) {
    margin-top: 30px;
  }
}
.benefitUnit img {
  margin-bottom: 32px;
}
.benefitUnit h3 {
  margin-bottom: 17px;
  color: #fbfbfb;
  font-size: 20px;
  font-weight: 700;
}
.benefitUnit .benefitText {
  text-align: justify;
  color: #fbfbfb;
  font-size: 14px;
  font-weight: 300;
  line-height: 23.95px;
}
</style>
