<template>
  <div class="content">
    <blog_header></blog_header>
    <div class="wrap gray blog_content" >
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
  import blog_header from './common/head'
  export default {
    name: 'index',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components:{
      blog_header: blog_header
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/css/common.css";
  .blog_content{
    margin-top: 0.8rem;
    min-height: 45rem;
  }
</style>
