<template>
  <div>
      <header class="header-dl">

		<div class="logo">

			<!-- <a class="history_back" href="#"><img height="40" src="http://cdn1.yaochufa.com/images/mobile/back.png" alt="返回"></a> -->

		</div>

		<span class="main_title">会员注册</span>

		<div class="rc">

			 <router-link to="./login">登录</router-link>

		</div>

	</header>

	<div class="wrapper">

		<div class="content">

            <div class="login_body">

                <ul class="login_inputs">

                   <li class="input"><span class="label">手机号码</span><input type="tel" ltype="phone"  placeholder="输入手机号码"  v-model="userstr"/><span class="icon_close">&times;</span></li>

                   <li class="input"><span class="label">真实姓名</span><input type="text" ltype="userName"  placeholder="真实姓名" /><span class="icon_close">&times;</span></li>

                   <li class="input"><span class="label">设置密码</span><input type="password" ltype="password"  placeholder="输入用户密码"  v-model="passstr1"/><span class="icon_close">&times;</span></li>

                   <li class="input"><span class="label">确认密码</span><input type="password" placeholder="确认密码"  v-model="passstr2"/><span class="icon_close">&times;</span></li>

                   <!--<li class="input"><span class="label">邮箱</span><input type="text" ltype="Email" placeholder="输入邮箱" /><span class="icon_close">&times;</span></li>-->

                   

                </ul>

                <a class="btn_order orange" @click="goin">注册</a>

            </div>

		</div>

	</div>

	<footer>

	</footer>
  </div>
</template>
<script>
export default {
  data(){
	  return {
		  userstr:'',
		  passstr1:'',
          passstr2:'',
	  }
  },
  
  methods:{
	  goin(){
	//   console.log(this.$root)
		  let url = "http://localhost:3000/regist"
		  this.$http({
			  method:"get",
			 url : url,
			 params:{username:this.userstr,
				   password1:this.passstr1,
				   password2:this.passstr2
				   }
		  }).then(function(res){
			 console.log(res.data);
			 if(res.data == 0){
                 alert("用户已注册")
			 }else{
				 if(res.data == 1){
					 alert("成功")
					 console.log(this)
					this.$router.push("./login")
					//  window.history.go(-1)
				 }
			 }
		  }.bind(this))
	  }
  },
  mounted(){
	 this.$root.$data.bheader=false;
	 this.$root.$data.bfooter=false;
  }
}
</script>

<style>
@import "../assets/css/base2.css";
@import "../assets/css/login.css";
</style>

