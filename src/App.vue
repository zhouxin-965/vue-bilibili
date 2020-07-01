<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepalive=true"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepalive"></router-view>
  </div>
</template>

<style lang="less">
html,body{
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
  box-sizing: border-box;
}
</style>
