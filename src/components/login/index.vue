<template>
  <div class="notLoggedIn">
    <div class="notLoggedIn-header">
      <div class="logo visibility">精锐钟表配件厂生产管理系统</div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "index",
  methods: {

  },
}
</script>

<style lang="less" scoped>
  .notLoggedIn {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    background: rgba(250, 250, 250, 1);
    z-index: 99;
    .notLoggedIn-header {
      height: 65px;
      background-color: rgba(0, 60, 120, 1);
      .logo {
        position: absolute;
        left: 30px;
        top: 0;
        height: 24px;
        border-width: 0;
        line-height: 70px;
        color: #fff;
        font-size: 16px;
      }
    }
  }
</style>
