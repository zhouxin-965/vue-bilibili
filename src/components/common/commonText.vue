<template>
  <div>
    <van-field
    :label="label"
    :placeholder="placeholder"
    :type="type"
    :rule="rule"
    v-model="content"
  />
  </div>
</template>

<script>
export default {
  components:{},
  props:['label','rule','placeholder','type'],
  data(){
    return {
      content:''
    }
  },
  methods:{
    handchange(){
      const ru = new RegExp(this.rule)
      if(ru.test(this.content)){
        this.$emit('inputchange',this.content)
      }
    }
  },
  watch:{
    content(){
      this.handchange()
    }
  }
}
</script>
<style  scoped>
</style>