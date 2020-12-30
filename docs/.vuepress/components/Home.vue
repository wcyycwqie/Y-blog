<!--
 * @Author: your name
 * @Date: 2020-12-09 15:31:37
 * @LastEditTime: 2020-12-29 16:28:05
 * @LastEditors: Please set LastEditors
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
        <div class="article-list"></div>
      </div>
      <div class="yel-col-3">3</div>
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
.home-container {
  height: 70vh;
  background: #421224;
}
</style>

<style lang="less">
@import '/css/home.less';
</style>