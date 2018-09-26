<template>
    <div>
      <div>
        <span class="iconfont icon-fayan2 blog_line">说点什么吧</span>
        <el-input
          type="textarea"
          :rows="4"
          placeholder="请输入内容"
          v-model="text" style="width: 68rem;">
        </el-input>
        <span v-on:click="submit" title="发表留言"  class="iconfont icon-wodetijiao  submit" ></span>
        <span v-on:click="cancle" title="取消"  class="iconfont icon-lvsefenkaicankaoxianban-  submit" style="font-size: 30px" ></span>
      </div>
    </div>

</template>

<script>
    export default {
        name: "blog_msgboard",
        data:function () {
          return{
            text:""
          }
        },
        methods:{
          cancle:function (event) {
            this.text = "";
          },
          submit:function () {
            console.log("lsjsk");
          }
        }
    }
</script>

<style scoped>
  .submit{
    color: #289dab;
    font-size: 35px;
    margin-left: 2rem;
  }
</style>
