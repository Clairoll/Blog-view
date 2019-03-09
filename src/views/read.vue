<template>
  <div class="read">
    <div class="top-container container">
      <div class="row" style="padding:15px 15px;background: #fff;">
        <h2>{{article.title}}</h2>
        发布时间：{{article.createdAt | formatDate}}
        <div v-html="article.content" style="padding-top: 25px;"></div>
      </div>
      <div
        class="row"
        style="margin-top: 20px;margin-bottom:20px;background: #fff;padding:15px 15px;"
      >
        <div class="col-md-6">
          <div class="input-group">
            <span class="input-group-addon" id="basic-addon1">昵称</span>
            <input type="text" class="form-control" placeholder="必填" v-model="name">
          </div>
          <!-- /input-group -->
        </div>
        <div class="col-md-6">
          <div class="input-group">
            <span class="input-group-addon" id="basic-addon1">邮箱</span>
            <input type="text" class="form-control" placeholder="可不填" v-model="email">
          </div>
          <!-- /input-group -->
        </div>
        <textarea
          rows="5"
          style="margin-top: 15px;margin-left: 15px; width:95%"
          placeholder="欢迎大家评论啊"
          v-model="textContent"
        >{{textContent}}</textarea>
        <button type="button" class="btn btn-info" style="float:right;" @click="add()">评论</button>
      </div>

      <div
        class="row"
        v-show="comment.length != 0"
        style="margin-top: 20px;margin-bottom:20px;background: #fff;padding:15px 15px;"
      >
        <div class="comment" v-for="item in comment">
          <img
            class="user-head img-circle center-block"
            src="../assets/images/user.jpg"
            alt="头像"
            width="80"
            style="float:left"
          >
          <p style="margin:2px 0 3px 0px; padding-left:90px;">{{item.username}}</p>
          <p style="margin:2px 0 3px 0px; padding-left:90px;">{{item.content}}</p>
          <p style="margin:2px 0 3px 0px; padding-left:90px;">{{item.createdAt | formatDate}}</p>
          <span style="float:right; padding-right: 15px;" @click="reply(item.username,)">回复</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { formatDate } from "../assets/js/formatDate.js";
export default {
  name: "read",
  inject: ["reload"],
  data() {
    return {
      article: "",
      comment: [],
      id: "",
      textContent: "",
      name: "",
      email: ""
    };
  },
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm:ss");
    }
  },
  beforeCreate() {
    this.id = this.$route.query.articleId;
    axios({
      method: "post",
      url: "/api/view/read",
      data: {
        id: this.id
      }
    }).then(res => {
      this.article = res.data.article;
      this.comment = res.data.comment;
      // console.log(res.data);
    });
  },
  methods: {
    reply(username) {
      this.textContent = "@" + username + "：";
    },
    add() {
      axios({
        method: "post",
        url: "/api/view/comment",
        data: {
          articleId: this.$route.query.articleId,
          username: this.name,
          email: this.email,
          content: this.textContent
        }
      }).then(res => {
        this.textContent = "";
        this.email = "";
        this.name = "";
        this.comment = res.data.comment;
        this.reload();
      });
    }
  }
};
</script>

<style>
.comment {
  border: 1px solid #ddd;
  height: 100px;
  /* line-height: 100px; */
}
</style>
