<template>
  <div>
    <div class="wrap gray blog_head">
      <img src="/static/image/loge1.png">
      <div class="blog_head_content">
        <div class="blog_head_title">个人博客</div>
        <div class="blog_motto">
          每个作品都有自己的灵魂，只要灵魂发挥极致，那么成功就在眼前....
        </div>
      </div>
    </div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo wrap gray blog_menu "
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b" router="true">
      <el-menu-item route="blog_index" class="blog_item iconfont icon-zhuye" index="1">网站首页</el-menu-item>
      <el-menu-item route="blog_hot" class="blog_item iconfont icon-remen" index="2">热门博客</el-menu-item>
      <el-menu-item route="blog_technology" class="blog_item iconfont icon-jishuwendang" index="3">技术总结</el-menu-item>
      <el-menu-item route="blog_life" class="blog_item iconfont icon-shenghuo" index="4">生活闲趣</el-menu-item>
      <el-menu-item route="blog_msgboard" class="blog_item iconfont icon-liuyan" index="5">留言板</el-menu-item>
    </el-menu>


  </div>


</template>

<script>
  export default {
    name: 'blog_header',
    data() {
      return {
        activeIndex2: '5'
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    components: {

    }
  }
</script>

<style scoped>
  @import "../../assets/css/common.css";
  @import "../../assets/css/icon/iconfont.css";

  .blog_head {
    height: 4rem;
    display: flex;
    flex-direction: row;
  }
  .blog_head_title {
    margin-top: 0.3rem;
    font-size: 18px;
    color: #5d5d5d;
    font-weight: normal;
  }
  .blog_item{
    margin-top: -0.8rem;
    height: 3rem;
    margin-left: 6rem;
  }
  .blog_head_content {
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
  }

  .blog_motto {
    color: #7e7e7e;
    font-size: 14px;
    margin-top: 0.3rem;
  }

  .blog_head img {
    /*margin-top: -4rem;*/
  }
  .blog_menu{
    height: 2rem;
    margin: 0.2rem auto;

  }
</style>

