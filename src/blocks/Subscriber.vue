<template>
  <div class="subscribeWrap">
    <div class="container">
      <Review></Review>
      <div class="divider"></div>
      <Sub></Sub>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/extensions
import Sub from '@/components/Sub';
// eslint-disable-next-line import/extensions
import Review from '@/components/Review';

export default {
  name: 'Subscriber',
  components: {
    Review,
    Sub,
  },
};

</script>

<style>

.subscribeWrap {
  min-height: 438px;
  background-color: #adadad;
  background-image: url(../assets/images/Layer_41.jpg);
  background-blend-mode: overlay;
  margin-top: 70px;
  background-size: cover;
}
@media (max-width: 1199px) {
  .subscribeWrap {
    min-height: initial;
  }
}
.subscribeWrap .container {
  min-height: inherit;
  display: flex;
  align-items: center;
}
@media (max-width: 1199px) {
  .subscribeWrap .container {
    flex-direction: column;
    padding-top: 50px;
    padding-bottom: 50px;
  }
}
.subscribeWrap .divider {
  width: 1px;
  background: white;
  min-height: inherit;
  margin-left: 72px;
  margin-right: 92px;
}
@media (max-width: 1199px) {
  .subscribeWrap .divider {
    display: none;
  }
}
.subscribeWrap .reviewWrap {
  display: flex;
  align-items: flex-start;
  width: 500px;
}
@media (max-width: 555px) {
  .subscribeWrap .reviewWrap {
    flex-direction: column;
    align-items: center;
    width: auto;
    text-align: center;
  }
}
.subscribeWrap .reviewWrap > img {
  margin-right: 28px;
}
@media (max-width: 555px) {
  .subscribeWrap .reviewWrap > img {
    margin-right: initial;
    margin-bottom: 28px;
  }
}
.subscribeWrap .reviewWrap blockquote {
  color: #222224;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.4px;
  font-weight: 700;
  font-style: oblique;
  margin-bottom: 19px;
}
.subscribeWrap .reviewWrap .reviewAuthor {
  color: #f16d7f;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.4px;
  line-height: 26px;
}
.subscribeWrap .reviewWrap .authorLocation {
  color: #222224;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.3px;
  line-height: 14px;
  margin-bottom: 41px;
}
.subscribeWrap .reviewWrap .reivewRotator {
  display: flex;
  width: 140px;
  justify-content: space-between;
}
@media (max-width: 570px) {
  .subscribeWrap .reviewWrap .reivewRotator {
    margin: 0 auto;
  }
}
.subscribeWrap .reviewWrap .reivewRotator div {
  width: 38px;
  height: 4px;
  background-color: #d6d6d6;
}
.subscribeWrap .reviewWrap .reivewRotator div:hover {
  background-color: #f16d7f;
}
.reviewWrap img {
  width: 83px;
  height: 83px;
}
.subscribeForm {
  width: 416px;
  text-align: center;
}
@media (max-width: 530px) {
  .subscribeForm {
    width: auto;
    padding: 0 15px;
  }
}
.subscribeForm .subscribeTitle {
  color: #222224;
  font-weight: 400;
  font-size: 24px;
  letter-spacing: 0.6px;
  line-height: 54px;
  text-transform: uppercase;
}
@media (max-width: 530px) {
  .subscribeForm .subscribeTitle {
    margin-top: 20px;
  }
}
.subscribeForm .subscribeText {
  font-size: 14px;
  margin-bottom: 35px;
}
.subscribeForm input {
  width: 282px;
  height: 36px;
  line-height: 46px;
  border-top-left-radius: 23px;
  border-bottom-left-radius: 23px;
  background-color: #e1e1e1;
  outline: none;
  padding: 5px 15px;
  border: none;
  float: left;
}
@media (max-width: 445px) {
  .subscribeForm input {
    float: none;
    border-radius: 23px;
    margin-bottom: 15px;
  }
}
.subscribeForm button {
  width: 104px;
  height: 46px;
  border-radius: 0 23px 23px 0;
  background-color: #f16d7f;
  border: none;
  color: white;
  cursor: pointer;
}
.subscribeForm button:hover {
  color: black;
}
@media (max-width: 445px) {
  .subscribeForm button {
    border-radius: 23px;
  }
}

</style>
