<template>
  <div id="app">
    <solid></solid>
    <router-view v-if="isRouterAlive"/>
    <foot></foot>
  </div>
</template>

<script>
import solid from "./components/solid.vue";
import foot from "./components/footer.vue";
import { canvan } from "./assets/js/canvan.js"; //注意路径
export default {
  created() {
    canvan: {
      canvan();
    }
  },
  components: {
    solid,
    foot
  },
  name: "App",
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      isRouterAlive: true
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    }
  }
};
</script>

<style lang="stylus">
@import './assets/css/bootstrap.css';

body {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333;
  background: #eee;
  overflow: -Scroll;
  overflow-x: hidden;
}
</style>
