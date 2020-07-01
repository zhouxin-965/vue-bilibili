<template>
  <div  @click="handle">
    <div class="btn">{{text}}</div>
  </div>
</template>

<script>
export default {
  components:{},
  props:['text'],
  data(){
    return {
    }
  },
  methods:{
    handle(){
      this.$emit('register')
    }
  }
}
</script>
<style lang="less">
.btn{
  display: flex;
  height: 12.5vw;
  justify-content: center;
  align-items: center;
  font-size: 4.444vw;
  background-color: #ff9db5;
  border-radius: 6.25vw;
  color: white;
  margin-top: 2.778vw;
}
</style>