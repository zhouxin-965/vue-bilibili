<template>
  <div>
    <nav-bar></nav-bar>
    <div class="detailinfo">
      <div class="video">
        <video controls :src="model.content"></video>
      </div>
    </div>
    <div class="detailinfoText">
              <div>
                  <span>{{model.category.title}}</span>
                  <span>{{model.name}}</span>
              </div>
              <div>
                  <span>{{model.userinfo.name}}</span>
                  <span>146.4万次观看</span>
                  <span>5281弹幕</span>
                  <span>{{model.date}}</span>
              </div>
              <div>
                  <p>
                      <span class="icon-star-full" ></span>
                      <span>收藏</span>
                  </p>
                  <p>
                      <span class="icon-bubble"></span>
                      <span>关注</span>
                  </p>
                  <p>
                      <span class="icon-redo2"></span>
                      <span>分享</span>
                  </p>
              </div>
    </div>
    <div class="parent">
      <detail class="iitem" v-for="(item,index) in commend" :key="index" :detailitem='item'></detail>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/common/navBar.vue'
import Detail from './Detail'
export default {
  components:{
    NavBar,
    Detail
  },
  props:[],
  data(){
    return {
      model:{},
      commend:null
    }
  },
  methods:{
    async articleitemData(){
      const res = await this.$http.get('/article/'+this.$route.params.id)
      this.model=res.data[0]
      console.log(res.data[0])
    },
    async comend(){
      const res = await this.$http.get('/commend')
      this.commend=res.data
    }
  },
  created(){
    this.articleitemData(),
    this.comend()
  },
  watch:{
    $route(){
      this.articleitemData(),
    this.comend()
    }
    
  }
  
}

</script>
<style lang='less'>
.detailinfo{
    background-color: white;
    .video{
        width: 100%;
        video{
            width: 100%;
        }
    }
}
.detailinfoText{
    padding: 4.167vw;
    div:nth-child(1) {
        span:nth-child(1) {
            padding:0 2.778vw;
            color: #fb7299;
            background-color: #f4f4f4;
            border-radius: 2.778vw;
        }
    }
    div:nth-child(2) {
        padding: 2.778vw 2.778vw;
        span{
            color: #aaa;
            font-size: 3.333vw;
            margin-right: 2.778vw;
        }
        span:nth-child(1) {
            color: black;
            font-size: 4vw;
            padding-right:2.778vw;
        }
    }
    div:nth-child(3) {
        padding: 0 2.778vw;
        display: flex;
        
        p{
            margin-right: 10px;
            display: flex;
            align-items: center;
            color: #757575;
            span:nth-child(1) {
                margin-right: 3px;
                font-size: 21px;
            }
            span:nth-child(2) {
                font-size: 13px;
            }
        }
        .activeColor{
            color: #fb7299;
        }
    }
}
    .parent{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      .iitem{
        width: 45%;
        margin: 1.389vw 0;
     }
    }

</style>