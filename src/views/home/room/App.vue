<template>
  <div id="app">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from '../../../components/common/HelloWorld';
export default {
  name: 'App',
  data() {
    return {};
  },
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss" scoped>
.bar {
  display: block;
  margin: 0 auto;
}
</style>

