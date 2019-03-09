<template>
  <div class="index">
    <div class="top-container container">
      <div class="row">
        <div class="col-md-9">
          <div class="article-list">
            <h1 class="article-list-title">最新文章</h1>
            <article v-for="(item, index) in article" class="Cairoll">
              
                <h2 class="title" @click="read(item.id)">{{item.title}}</h2>
              
              <div class="ainfo">
              <div class="pull-left article-image">
                  <img :src="item.img" :title="item.title">
                </div>
                <p class="intro">
                  <div v-html="item.content" style="max-height: 100px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;"></div>
                </p>
              </div>
              <div class="clearfix"></div>
              <div class="info">
                <span class="time">
                  <span class="glyphicon glyphicon-time"></span>
                  {{item.createdAt | formatDate}}
                </span>
                <span class="class">
                  <span class="glyphicon glyphicon-folder-close"></span>
                  {{category[index]}}
                </span>
                <span class="view">
                  <span class="glyphicon glyphicon-thumbs-up"></span>
                  点赞: {{item.innocuous}}
                </span>
                <span class="read-all pull-right">
                  <span @click="read(item.id)">阅读全文&gt; &gt;</span @click="read()">
                </span>
              </div>
            </article>
          </div>
        </div>
        <div class="col-md-3">
          <div class="sider">
            <div class="panel panel-dafault user-info"> 
              <div class="panel-heading">
                <span class></span> 关于我
              </div>
              <div class="panel-body">
                <img
                  class="user-head img-circle center-block"
                  src="../assets/images/avator.jpg"
                  alt="头像"
                  width="120"
                >
                <div style="text-align: center;margin-top:10px;">
                  <p>风雅</p>
                  <p>你跌跌撞撞，落得一身伤，就当是为了青春，落下残妆</p>
                </div>
              </div>
            </div>
          </div>
          <div class="sider">
            <div class="panel panel-dafault user-info"> 
              <div class="panel-heading">
                <span class></span> 微信
              </div>
              <div class="panel-body">
                <img
                  class="user-head"
                  src="../assets/images/weixin.jpg"
                  alt="头像"
                  width="100%"
                >
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { formatDate } from "../assets/js/formatDate.js";
export default {
  name: 'index',
  data() {
    return {
      article: '',
      category: []
    }
  },
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm:ss");
    }
  },
  beforeCreate() {
    axios({
      method: "post",
      url: "/api/view"
    }).then(res => {
      this.article = res.data.articleList;
      this.category = res.data.categoryname;
      // console.log(res.data)
    });
  },
  methods: {
    read(id){
      this.$router.push({path: '/read',query:{articleId: id}});
    }
  }
};
</script>

<style>
.article-list .article-list-title {
  background: #fff;
  padding: 10px 15px;
  margin-top: 0;
}
article {
  margin-bottom: 20px;
  background: #fff;
  padding: 10px 15px;
  border: 1px solid #fff;
}
@keyframes fade-in {  
    0% {opacity: 0;}/*初始状态 透明度为0*/  
    40% {opacity: 0;}/*过渡状态 透明度为0*/  
    100% {opacity: 1;}/*结束状态 透明度为1*/  
}  
@-webkit-keyframes fade-in {/*针对webkit内核*/  
    0% {opacity: 0;}  
    40% {opacity: 0;}  
    100% {opacity: 1;}  
}  
.Cairoll {    
    animation: fade-in;/*动画名称*/  
    animation-duration: 1.5s;/*动画持续时间*/  
    -webkit-animation:fade-in 1.5s;/*针对webkit内核*/  
}  
article:hover {
  border: 1px solid red;
}
article > a:link,
article > a:visited,
article > a:hover,
article > a:active {
  color: #000;
  outline: 0;
  text-decoration: none;
}
article .article-image {
  display: inline-block;
  width: 165px;
  max-height: 110px;
  overflow: hidden;
  margin-right: 20px;
}
.article-image img{
  width: 165px;
}
.pull-left {
  float: left !important;
}
article .intro {
  color: #888;
  word-break: break-all;
  margin: 0 0 0 10px;
}
article .info {
  color: #666;
  margin-top: 5px;
  margin-bottom: 10px;
}
article .info > span {
  margin-right: 15px;
}
article .info > span a {
  color: #666;
  outline: 0;
  text-decoration: none;
}
.panel {
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}
.sider .panel .panel-heading {
  background: #fff;
  border-bottom: 1px solid #eee;
}
</style>
