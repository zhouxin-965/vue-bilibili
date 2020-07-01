<template>
  <div>
    <nav-bar></nav-bar>
    <user-detail :userInfo="model"></user-detail>
    <user-article></user-article>
  </div>
</template>

<script>
import NavBar from '@/components/common/navBar.vue'
import UserDetail from '@/components/usercommon/userdetail.vue'
import UserArticle from '@/components/usercommon/userarticle.vue'
export default {
  components:{
    NavBar,
    UserDetail,
    UserArticle
  },
  props:[],
  data(){
    return {
      model:{}
    }
  },
  methods:{
    async getnews(){
      const res = await this.$http.get('/user/'+localStorage.getItem('id'),{
        headers:{
          'Authorization':'Bearer '+localStorage.getItem('token')
        }
      })
      this.model=res.data[0]
    }
  },
  created(){
    this.getnews()
  }
}
</script>
<style lang=''>
</style>