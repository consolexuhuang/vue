<template>
  <div>
      <!-- 个人中心 -->
	<article class="user-head">
		<div class="user-bg-img">
			<img src="../assets/images/user_bg.png">
			<div class="user-img">
				<img src="../assets/images/user-img0.jpg">
			</div>
			<div class="login">
				<a href="javascript:;" class="back" @click="enter">退出</a>
				<router-link  to="./login">
				   <a href="javascript:;" class="goins">
					欢迎{{msg}}
                	登录
				   </a>
				</router-link>
			</div>
		</div>
		<div class="user-order">
			<a href="javascript:;" class="select-btn select-btn-t"><img src="../assets/images/indent.png">我的订单 	<span>查看所有订单</span>	 <i class="icon icon-select"></i></a>
		</div>
		<div class="user-nav">
			<a href="javascript:;">
	    		<i class="icon icon-f1"></i>
	    		待付款
	    	</a>
	    	<a href="javascript:;">
	    		<i class="icon icon-f2"></i>
	    		待收货
	    	</a>
	    	<a href="javascript:;">
	    		<i class="icon icon-f3"></i>
	    		已收货
	    	</a>
	    	<a href="javascript:;">
	    		<i class="icon icon-f4"></i>
	    		已取消
	    	</a>
	    	<a href="javascript:;">
	    		<i class="icon icon-f5"></i>
	    		售后
	    	</a>
		</div>
	</article>
	<article class="user-list">
		<a href="javascript:;" class="select-btn select-btn-t"><img src="../assets/images/collct.png">我的收藏 	<span>2</span>	 <i class="icon icon-select"></i></a>
		<a href="javascript:;" class="select-btn select-btn-t"><img src="../assets/images/service.png">联系客服<i class="icon icon-select"></i></a>
		<a href="javascript:;" class="select-btn select-btn-t"><img src="../assets/images/about.png">关于我们<i class="icon icon-select"></i></a>
		<a href="javascript:;" class="select-btn select-btn-t"><img src="../assets/images/set.png">设置<i class="icon icon-select"></i></a>
	</article>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data(){
	  return {
		  msg:''
	  }
  },
  methods:{
	  enter(){
		let url = "http://localhost:3000/enter";
        this.$http({
            withCredentials:true,
            url:url,
            method:"get",
        }).then(function(res){
			console.log(res.data)
			this.$router.push("/login")
		}.bind(this))
	}
  },

  beforeRouteEnter(to,from,next){
    // this.$root.$data.bloading=true;
	// console.log(axios)
	let url = "http://localhost:3000/users"	

    axios.get(url,{withCredentials:true}).then(function(res){
		//  withCredentials:true,
		console.log(res.data)
		if(res.data.error == 0){
           next(_this=>{
			//    alert('success')
			   _this.msg = res.data.name;
		   })
		}else{
			next('./login')
		}
	})
	// console.log(axios);
  },
  mounted(){
	//    console.log(1)
	 this.$root.$data.bheader=true;
	 this.$root.$data.bfooter=true;
	this.$root.$data.bloading=false;
  
  }
}
</script>


<style scoped>
 
@import "../assets/css/style.css";

</style>

