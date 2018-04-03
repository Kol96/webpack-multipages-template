<template>
  <div id="home">
    <Header></Header>
    <img src="../../../assets/images/logo.png" alt="">
    <div class="test">123578786</div>
  </div>
</template>

<script>
import Header from '../../../components/common/Header';
export default {
  name: 'Home',
  data() {
    return {};
  },
  methods: {
    init() {
      console.log('hello world');
    }
  },
  components: {
    Header
  }
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  transform: translate(50%,50%);
  transition: all 0.8s ease;
  .item {
    flex: 1;
  }
}
.test {
  color: green;
}
</style>

