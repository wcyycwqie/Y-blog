<!--
 * @Author: your name
 * @Date: 2020-12-09 15:31:37
 * @LastEditTime: 2023-02-19 23:02:47
 * @LastEditors: Chaoyue
 * @Description: In User Settings Edit
 * @FilePath: \Y-blog\docs\.vuepress\components\Home.vue
-->

<template>
  <div class="home">
    <div class="home-container yel-contanier">
      <div class="showBar yel-contanier">
        <div class="bar-item yel-col-3">
          <img src="/assets/img/background/3.png" alt="" />
        </div>
        <div class="bar-item yel-col-3">
          <img src="/assets/img/background/4.png" alt="" />
        </div>
        <div class="bar-item yel-col-3">
          <img src="/assets/img/background/6.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: '',
  methods: {
    goToGame() {
      console.log('go to game')
      this.$router.push('./game/g1')
    }
  }
}
</script>


<style lang="stylus" scoped>
// @require '~@alias/home'
.home-container {
  // height: 70vh;
  // background: #421224;
}
</style>

<style>
/* @import '~@static/css/home.css' */
</style>

<style lang="less" scoped>
// '~@static/css/home.less'
@import '~@static/css/home.less';

.home-container {
  h1,
  h2,
  h3 {
    color: #f00;
  }
}
</style>