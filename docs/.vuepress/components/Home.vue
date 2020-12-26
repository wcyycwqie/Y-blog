<!--
 * @Author: your name
 * @Date: 2020-12-09 15:31:37
 * @LastEditTime: 2020-12-26 11:12:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Yblog\docs\.vuepress\components\Home.vue
-->

<template>
  <div class="home">
    <div class="home-contanier">123</div>
    <div class="article-list"></div>
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

<style lang="stylus" scoped></style>

<style lang="stylus" scoped>
.home-contanier {
  min-width: 1080px;
  height: 70vh;
  background: #421224; 
}
</style>