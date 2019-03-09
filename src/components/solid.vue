<template>
  <div class="banner">
    <nav class="navbar" style="margin-bottom:0">
      <div class="row">
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header" style="margin-left:15%;">
              <button type="button" class="navbar-toggle" data-toggle = "collapse"  data-target = "#bs-example-navbar-collapse-1">  
                <span class="sr-only"></span>  
                <span class="icon-bar"></span>  
                <span class="icon-bar"></span>  
                <span class="icon-bar"></span>  
              </button>   
              <router-link to="/index" tag="a" class="navbar-brand">
                <span>风雅</span>
              </router-link>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1" style="margin-right:25%;">
              <ul class="nav navbar-nav navbar-right mynav">
                <li>
                  <router-link to="/index" tag="a" :class="this.$route.path == '/index' ? 'active': ''">
                    <span>首页</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="/comment" tag="a" :class="this.$route.path == '/comment' ? 'active': ''">
                    <span>留言</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="/time" tag="a" :class="this.$route.path == '/time' ? 'active': ''">
                    <span>时光轴</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="/friend" tag="a" :class="this.$route.path == '/friend' ? 'active': ''">
                    <span>圈子</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="/me" tag="a" :class="this.$route.path == '/me' ? 'active': ''">
                    <span>关于我</span>
                  </router-link>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "solid"
};
</script>

<style>

.mynav .active {
  border-bottom: 2px solid #ff8a00;
  /* height: 2px; */
} 
.mynav li:after {
    content: ' ';
    position: absolute;
    z-index: 2;
    bottom: 0;
    left: 50%;
    display: block;
    height: 1px;
    transform: translate(-50%);
}
.mynav li:hover:after {
    height: 2px;
    animation: ad_width .5s linear forwards;
    background: #ff8a00;
}
@keyframes ad_width {
    from {
        width: 0
    }
    to {
        width: 100%
    }
}
</style>
