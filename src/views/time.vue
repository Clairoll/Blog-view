<template>
  <div class="time">
    <div class="img">
      <img src="../assets/images/time.jpg" alt>
    </div>
    <div class="top-container container">
      <div class="row">
        <div class="col-md-12">
          <div class="VivaTimeline">
            <dl v-for= "(item,index) in time">
              <dd class="pos-right clearfix" v-if="item.id%2 == 0">
                <div class="circ"></div>
                <div class="time">{{item.createdAt | formatDate}}</div>
                <div class="events">
                  <div class="events-header">{{item.title}}</div>
                  <div class="events-body">
                    <div class="row">
                      <div class="events-desc">
                        <p>{{item.content}}</p>
                      </div>
                    </div>
                  </div>
                  <div class="events-footer"></div>
                </div>
              </dd>
              <dd class="pos-left clearfix" v-else>
                <div class="circ"></div>
                <div class="time">{{item.createdAt | formatDate}}</div>
                <div class="events">
                  <div class="events-header">{{item.title}}</div>
                  <div class="events-body">
                    <div class="row">
                      <div class="events-desc">
                        <p>{{item.content}}</p>
                      </div>
                    </div>
                  </div>
                  <div class="events-footer"></div>
                </div>
              </dd>
            </dl>
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
  name: "timeline",
  data() {
    return {
      time: ""
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
      url: "/api/view/time"
    }).then(res => {
      this.time = res.data.time;
      console.log(res.data);
    });
  }
};
</script>

<style>
.img img {
  width: 100%;
  height: 80vh;
  position: relative;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
}
.VivaTimeline dl dd.pos-right .events {
    float: right;
}
.VivaTimeline dl dd.pos-left .events {
    float: left;
}
.VivaTimeline dl dd.pos-right .time {
    margin-left: -170px;
    text-align: right;
}
.VivaTimeline dl {
  position: relative;
  top: 0;
  padding: 20px 0;
  margin: 0;
}
.VivaTimeline dl dt {
  position: relative;
  top: 30px;
  z-index: 200;
  width: 120px;
  padding: 3px 5px;
  margin: 0 auto 30px;
  font-weight: 400;
  color: #fff;
  text-align: center;
  background-color: #aab2bd;
  background-color: rgba(128, 128, 128, 0.5);
  border-radius: 4px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
}
.VivaTimeline dl dd .circ {
  position: absolute;
  top: 40px;
  left: 50%;
  z-index: 200;
  width: 12px;
  height: 12px;
  margin-left: -6px;
  background-color: rgb(117, 206, 102);
  box-shadow: 0 0 0 4px white, inset 1px 1px 0 rgba(0, 0, 0, 0.08),
    0 3px 0 4px rgba(0, 0, 0, 0.05);
  border-radius: 50%;
}
.VivaTimeline dl dd.pos-left .time {
  margin-left: 0;
  text-align: left;
}
.VivaTimeline dl dd {
    position: relative;
    z-index: 200;
}
.VivaTimeline dl dd .events .events-body .events-desc {
    text-indent: 2em;
    padding: 0 15px;
}
.VivaTimeline dl:before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  z-index: 100;
  width: 4px;
  margin-left: -1px;
  content: "";
  box-shadow: 1px 1px 2px 1px #d7e4ed;
  background-color: #fff;
}
.VivaTimeline dl dd .time {
  position: absolute;
  top: 31px;
  left: 50%;
  display: inline-block;
  padding: 10px 20px;
  color: #49a;
}
.VivaTimeline dl dd .events {
  position: relative;
  width: 47%;
  padding: 1.5em;
  padding-bottom: 0.5em;
  margin-top: 31px;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid transparent;
  box-shadow: 1px 2px 5px #d7e4ed;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
}
.VivaTimeline dl dd .events .events-header {
  min-height: 30px;
  line-height: 20px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}
.VivaTimeline dl dd .events .events-body {
  overflow: hidden;
  zoom: 1;
  background-color: #fff;
  margin-bottom: 10px;
}
</style>
