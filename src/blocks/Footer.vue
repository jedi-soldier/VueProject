<template>
  <div class="copyrights">
    <div class="container" id="copyCont">
      <div class="copyrightsText">
        &copy; 2017 Brand All Rights Reserved.
      </div>
      <Socialnetworks></Socialnetworks>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/extensions
import Socialnetworks from '@/components/Socialnetworks';

export default {
  name: 'Footer',
  components: {
    Socialnetworks,
  },
};
</script>

<style>
.copyrights {
  min-height: 79px;
  background-color: #e6e6e6;
}
.copyrights .container {
  min-height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media (max-width: 499px) {
  .copyrights .container {
    flex-direction: column;
    justify-content: flex-start;
  }
}
.copyrights .copyrightsText {
  font-size: 16px;
  font-weight: 400;
  line-height: 2.63;
  letter-spacing: 0.4px;
  color: #7a7a7a;
  padding-left: 15px;
}
.copyrights nav {
  display: flex;
  width: 191px;
  justify-content: space-between;
  padding-right: 15px;
}
.copyrights nav a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background-color: #ffffff;
  text-decoration: none;
}
</style>
