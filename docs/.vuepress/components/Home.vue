<!--
 * @Author: your name
 * @Date: 2020-12-09 15:31:37
 * @LastEditTime: 2020-12-23 18:26:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Yblog\docs\.vuepress\components\Home.vue
-->

<template>
  <div class="home">
    <div class="article-list">
      <a href="./game/g1">Game</a>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: '',
  methods: {
    goToGame() {
      console.log('go to game');
      this.$router.push('./game/g1')
    }
  }
}
</script>

<style>

</style>