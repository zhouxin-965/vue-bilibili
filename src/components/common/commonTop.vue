<template>
  <div>
    <div class="top">
      <div></div>
      <div>{{news}}</div>
      <div>
        <slot name="right"/>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  components:{},
  props:['news'],
  data(){
    return {
    }
  },
}
</script>
<style  lang="less">
.top{
  display: flex;
  height:45px;
  background-color: white;
  div{
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    font-size: 4.444vw;
  }
}
</style>