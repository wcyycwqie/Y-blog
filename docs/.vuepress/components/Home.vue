<!--
 * @Author: your name
 * @Date: 2020-12-09 15:31:37
 * @LastEditTime: 2021-02-02 16:15:55
 * @LastEditors: Chaoyue
 * @Description: In User Settings Edit
 * @FilePath: \Yblog\docs\.vuepress\components\Home.vue
-->

<template>
  <div class="home">
    <div class="home-container yel-contanier">
      <div class="yel-col-3">
        <img src="/assets/img/background/3.png" alt="">
      </div>
      <div class="yel-col-3">
        <div class="article-list">
          <h1>hohoho</h1>
        </div>
      </div>
      <div class="yel-col-3">
        3
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
  height: 70vh;
  background: #421224;
}
</style>

<style>
/* @import '~@static/css/home.css' */

</style>
<style lang="less" scoped> 
@require '~@static/css/home.less'
.home-container {
  h1,h2,h3 {
    color: #F00;
  }
}
</style>