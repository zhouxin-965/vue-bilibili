<template>
  <div>
    <common-top news="登录bilibili">
      <div slot="right" @click="$router.push('/register')" style="font-size:3.333vw">切换到注册</div>
    </common-top>
    <common-text label="账号" placeholder="请输入账号" rule="^.{6,16}$" style="margin:4.167vw 0;" @inputchange="res => model.username = res"></common-text>
    <common-text label="密码" placeholder="请输入密码" rule="^.{6,16}$" type="password" @inputchange="res => model.password = res"></common-text>
    <common-btn text="登录" @register="register"></common-btn>
  </div>
</template>

<script>
import commonTop from "@/components/common/commonTop.vue"
import commonText from '@/components/common/commonText.vue';
import commonBtn from '@/components/common/commonBtn.vue';
export default {
  components:{
    commonTop,
    commonText,
    commonBtn
  },
  props:{},
  data(){
    return {
      model:{
        username:'',
        password:''
      }
    }
  },
  methods:{
    async register(){
      let rue = /^.{6,16}$/;
      if( rue.test(this.model.username) && rue.test(this.model.password)){
        const res = await this.$http.post('/login',this.model)
        this.$msg.fail(res.data.msg)
        this.$router.push('/user')
      }else{
        this.$msg.fail('注册失败，请输入6-16位数')
      }
    }
  }
}
</script>
<style  scoped>

</style>