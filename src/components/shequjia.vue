<template>
  <div>
      	<!--头部 header-->
	<div>
		<header>
			<div class="header">
				<a href="javascript:window.history.go(-1);"><i class="icon icon-return"></i></a>
				<h1>分享</h1>
			</div>
		</header>
		<div style="height: 2.5rem;"></div>
	</div>
    <article>
        <div class="c-Publish">
          <div class="Pu-text">
            <textarea rows="4" maxlength="50" placeholder="这一刻的想法(50字内)..." v-model="str"></textarea>  
          </div>
          <div class="Pu-img">
            <a href="javascript:;" class="Pu-Add-img">
              <img src="../assets/images/f_addimg.png">
              <input type="file" accept="image/*">
            </a>
          </div>
        </div>
        <div class="submit-btn">
          <button class="btn btn-max btn-forbidden" @click="sub">提交</button>
        </div>
    </article>
  </div>
</template>

<script>
export default {
  data(){
      return {
          str : "",

      }
  },  
  methods:{
      sub(){
           var dt = new Date
           console.log(dt.getTime())
          var url = "http://localhost:3000/content"
         this.$http({
             url:url,
             method:'get',
             params:{
               content:this.str,
            //    user:
               time:dt.getTime()
             }
         }).then(function(res){
            if(res.data == 1){
              alert("发表成功")
            }
         })
      }
  },
  mounted(){
       this.$root.$data.bheader = false;
       this.$root.$data.bfooter= false;
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
.btn-forbidden { background-color: #ee394a !important;}
.submit-btn button { width: 100%; margin: 0;}
@import "../assets/css/style.css"
</style>

