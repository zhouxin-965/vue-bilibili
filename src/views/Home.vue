<template>
  <div>
    <nav-bar></nav-bar>
    <van-tabs v-model="active">
      <van-tab v-for="(item,index) in category" :title="item.title" :key="index">
         <van-list
            v-model="item.loading"
            :immediate-check="false"
            :finished="item.finished"
            finished-text="我也是有底线的"
            @load="onLoad"
          >
        <div class="parent">
          <detail class="item" :detailitem="listItem" v-for="(listItem,listIndex) in item.list" :key="listIndex"></detail>
        </div>
        </van-list>
      </van-tab>
    </van-tabs>
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
      category:[],
      active:0
    }
  },
  methods:{
    async getCategory(){   
      const res = await this.$http.get('/category') //获取导航的条条
      this.change(res.data)
      
    },
    change(data){   
      const res1 = data.map((item,index)=>{
        item.list=[]
        item.categoryPage=0
        item.categoryPagesize=10
        item.finished = false;
        item.loading = true;
        return item
      })
      this.category=res1 //给条条添加一些属性并把这些对象保存在category
      this.getArticle()
    },

    async getArticle(){  //获取具体文章，分页面的
      const categoryItem = this.getItem()
      const article = await this.$http.get('/detail/'+ categoryItem._id,{
        params:{
          page:categoryItem.categoryPage,
          pagesize:categoryItem.categoryPagesize
        }
      })
      categoryItem.list.push(...article.data)
      categoryItem.loading = false;
      if (article.data.length < categoryItem.pagesize) {
        categoryItem.finished = true;
      }
    },
     onLoad() {
      const categoryitem = this.getItem()
      setTimeout(() => {
        categoryitem.page += 1;
        this.getArticle()
      }, 1000);
    },
    getItem(){   //哪个子频道的文章   这个是获取  一排中得如  动漫  国产  搞笑 
      const item = this.category[this.active]
      
      return item
    }

  },
  watch:{  //active变得时候，就是条条切换得时候调用这个函数 让他找到这个子频道的文章
    active(){
      this.getArticle()
   
    }
  },
  created(){
    this.getCategory()
    
  },
  
}
</script>
<style lang='less'>
.parent{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .item{
    width: 45%;
    margin: 1.389vw 0;

  }
}
</style>