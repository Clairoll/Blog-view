<template>
  <div class="friend" style="margin-bottom: 200px">
    <div class="header">
      <div class="content">
        <p>前端朋友圈</p>
        <button
          type="button"
          class="btn btn-default btn-lg"
          data-toggle="modal"
          data-target="#myModal"
        >我也加入</button>
        <div
          class="modal fade"
          id="myModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
        >
          <div class="modal-dialog" role="document" id="mymodel">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title" id="myModalLabel">加入我们</h4>
              </div>
              <div class="modal-body">
                <div class="input-group input-group-lg" style="margin: 15px 0">
                  <span class="input-group-addon" id="sizing-addon1">名称</span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="名称"
                    aria-describedby="sizing-addon1"
                    v-model="name"
                  >
                </div>
                <div class="input-group input-group-lg" style="margin: 15px 0">
                  <span class="input-group-addon" id="sizing-addon1">博客网址</span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="博客网址"
                    aria-describedby="sizing-addon1"
                    v-model="url"
                  >
                </div>
                <div class="input-group input-group-lg" style="margin: 15px 0">
                  <span class="input-group-addon" id="sizing-addon1">简单描述</span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="简单描述"
                    aria-describedby="sizing-addon1"
                    v-model="content"
                  >
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary" @click="add()">提交</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="top-container container">
      <div class="row">
        <div v-for="item in friend">
          <div class="person">
            <div class="name">
              <a :href="item.url">{{item.title}}</a>
            </div>
            <div class="about">{{item.content}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "friends",
  inject: ["reload"],
  data() {
    return {
      friend: "",
      name: "",
      url: "",
      content: ""
    };
  },
  beforeCreate() {
    this.id = this.$route.query.articleId;
    axios({
      method: "post",
      url: "/api/view/friends"
    }).then(res => {
      this.friend = res.data.friend;
    });
  },
  methods: {
    add() {
      let reg = /^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-.,@?^=%&:\/~+#]*[\w\-@?^=%&\/~+#])?$/;
      if (this.name == "" || this.url == "" || this.content == "") {
        alert("输入框不能为空");
      } else if (!reg.test(this.url)) {
        alert("请输入正确的网址");
      } else {
        axios({
          method: "post",
          url: "/api/view/friends",
          data: {
            title: this.name,
            url: this.url,
            content: this.content,
            mean: 0
          }
        }).then(res => {
          this.friend = res.data.friend;
          $("#myModal").modal("toggle");
          this.reload();
        });
      }
    }
  }
};
</script>

<style>
.header {
  background: #bbcdc5;
  background-image: -moz-linear-gradient(top, #00e079, #bbcdc5);
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0, #00e079),
    color-stop(1, #bbcdc5)
  );
  height: 27rem;
  position: relative;
}
.content {
  margin: auto;
  padding: 9rem 0 0 0;
  width: 80%;
  height: 20%;
  text-align: center;
}

.header p {
  color: #fff;
  font-size: 2.2rem;
  font-family: Helvetica, STHeiti STXihei, Microsoft JhengHei, Microsoft YaHei,
    Tohoma, Arial;
}
.person {
  background: #fff;
  width: 20%;
  font-size: 16px;
  line-height: 25px;
  padding: 2%;
  float: left;
  margin: 15px;
}
.person a {
  text-decoration: none;
  color: #000;
}
</style>
