<template>
  <div class="about">
    <div class="about-info">
      <img src="../assets/logo.png" alt="">
      <p>Vue2.0 英雄联盟助手</p>
      <p>技术栈:vue-cli + axios + vuex + mint-ui</p>
      <p>version: 1.0</p>
      <p>联系我：<a href="https://github.com/arronf2e">Arron</a></p>
    </div>
  </div>
</template>
<style lang="less" scoped>
.about {
  height: 100%;
  background: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  &-info {
    img {
      width: 100px;
      height: 100px;
      display: block;
      margin: 0 auto;
    }
    p {
      text-align: center;
    }
  }
}
</style>