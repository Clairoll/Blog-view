<template>
  <div class="criticism">
    <div class="top-container container">
      <div class="row">
        <div class="col-md-9">
          <div class="row" style="background-color:rgba(255,255,255,0.5);padding:15px 15px;">
            <textarea
              rows="5"
              style="margin-top: 15px;margin-left: 15px; width:95%"
              placeholder="欢迎大家评论啊"
              v-model="textContent"
            >{{textContent}}</textarea>
            <div class="col-md-6">
              <div class="input-group">
                <span class="input-group-addon" id="basic-addon1">昵称</span>
                <input type="text" class="form-control" placeholder="必填" v-model="name">
              </div>
            </div>
            <button type="button" class="btn btn-info" style="float:right;" @click="add()">评论</button>
          </div>
          <div
            class="row"
            v-show="criticism.length != 0"
            style="margin-top: 20px;margin-bottom:20px;background-color:rgba(255,255,255,0.5);padding:15px 15px;"
          >
            <div class="comment" v-for="item in criticism">
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
                <p>活着，很好的活着</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { formatDate } from "../assets/js/formatDate.js";
export default {
  name: "criticism",
  inject: ["reload"],
  data() {
    return {
      name: "",
      textContent: "",
      criticism: ""
    };
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
      url: "/api/view/criticism"
    }).then(res => {
      this.criticism = res.data.criticism;
      console.log(res.data);
    });
  },
  methods: {
    reply(username) {
      this.textContent = "@" + username + "：";
    },
    add() {
      axios({
        method: "post",
        url: "/api/view/criticism",
        data: {
          username: this.name,
          content: this.textContent,
          mean: 0
        }
      }).then(res => {
        this.name = '';
        this.textContent = '';
        this.reload();
        // console.log(res.data);
      });
    }
  }
};
</script>

<style>
.criticism {
  background-image: url(../assets/images/bg.jpg);

  width: 100%;
  height: 95vh;
  position: relative;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
