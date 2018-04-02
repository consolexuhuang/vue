<template>
  <div>
      <div>
		<header>
			<div class="header">
				<router-link to="./home">
				  <i class="icon icon-return"></i>
                </router-link>
				<h1>社区</h1>
                <router-link to="./shequjia"><i class="icon icon-addcommunity"></i></router-link>
			</div>
		</header>
		<div style="height: 2.5rem;"></div>
	</div>
    <article v-for="(value) in list" :key="value.id">
        <div class="community-head">
            <img src="../assets/images/user-img0.jpg">
            <span>我是郭小帅</span>
            <p>{{value.content}}</p>
        </div>
        <!-- <ul class="community-content">
            <li><img src="../assets/images/s_sq_01.png"></li>
            <li><img src="../assets/images/s_sq_02.png"></li>
            <li><img src="../assets/images/s_sq_03.png"></li>
        </ul> -->
        <div class="cl"></div>
        <div class="community-foot">
            <em>{{value.time | date}}</em>
            <i class="icon icon-share"></i>
        </div>
    </article>
    <article>
        <div class="community-head">
            <img src="../assets/images/user-img0.jpg">
            <span>我是郭小帅</span>
            <p>[潮流服饰]:秋季大换装，就在我的小店，欢迎参观哈....</p>
        </div>
        <ul class="community-content">
            <li><img src="../assets/images/s_sq_04.png"></li>
            <li><img src="../assets/images/s_sq_05.png"></li>
            <li><img src="../assets/images/s_sq_06.png"></li>
        </ul>
        <div class="cl"></div>
        <div class="community-foot">
            <em>12:30</em>
            <i class="icon icon-share"></i>
        </div>
    </article>
  </div>
</template>
<script>
export default {
 data(){
    return {
        list:[]
    }
 },

  mounted(){
     
      this.$root.$data.bheader = false;
      this.$root.$data.bfooter = true;
      this.$root.$data.bloading=true;

      var url =  "http://localhost:3000/content2"
      this.$http({
          url:url,
          method:"get",          
      }).then(function(res){
        console.log(res.data)
        this.list =  res.data.reverse()
        this.$root.$data.bloading=false;
      }.bind(this))
        // setTimeout(()=>{

        //       this.$root.$data.bloading=false;
        //     // this.list=res.data;
        //   },1000);
  }
}
</script>
<style>
/* 社区 community */
.community-head{ 
    padding: 0 0 .25rem;
    font-size: .75rem;
    line-height: 2rem;
    color: #808080;
}
.community-head img{
    width: 2rem;
    height: 2rem;
    margin-right: .25rem;
    border-radius: 50%;
}
.community-head p{ line-height: 1rem; margin-top: .25rem;}
.community-content{ overflow: hidden; }
.community-content li{
    width: 32%;
    float: left;
    margin: .25rem 1%;
}
.community-content li:nth-of-type(1){ margin-left: 0; }
.community-content li:nth-of-type(3){ margin-right: 0; }
.community-foot em{ font-size: .7rem; color: #999999; }
.community-foot i{
    float: right;
    width: 30px;
    height: 30px;
}
.community-foot i.icon-share{
    background-position: -320px -142px;
}
.c-Publish .Pu-text textarea {
    width: 100%;
    padding: 0;
    margin-bottom: .5rem;
    border: 0;
}
.c-Publish .Pu-img {
    margin: .5rem 0 1rem;
    overflow: hidden;
}
.c-Publish .Pu-img a {
    display: inline-block;
    width: 4rem;
    height: 4rem;
    overflow: hidden;
    float: left;
    margin-right: 2.65%;
    margin-bottom: .4rem; 
}
.c-Publish .Pu-img a.Pu-Add-img {
    position: relative;
    text-align: center;
    margin-right: 0;
}
.c-Publish .Pu-img a>img { height: 4rem;}
.c-Publish .Pu-img a.Pu-Add-img input {
    position: absolute;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
}
.btn-max {
    display: inherit;
    margin: .5rem;
    text-align: center;
    line-height: 1.8rem;
    font-size: .8rem;
}
.btn-forbidden { background-color: #ccc !important;}
.submit-btn button { width: 100%; margin: 0;}
@import "../assets/css/style.css"
</style>

