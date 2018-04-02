<template>
  <div>
       <header class="header-dl">

		<a class="history_back" href="index.htm"><img height="40" /></a>

		<span class="main_title">登录</span>

        <div class="rc">
        <router-link to="./reg">免费注册</router-link>
			<!-- <a class="reg" href="register.html"></a> -->
		</div>

	</header>

	<div class="wrapper">

		<div class="content">

              <div class="login_body login_section">

                 <div class="tabs">

                 <div class="tabs_header">

                     <ul class="tabs-items">

                        <li class="btn"><a>帐号登录</a></li>

                        <li class="btn"><a>短信登录</a></li>

                     </ul>

                 </div>

                 <div class="tabs_body">

                     <ul class="login_inputs inputs0">

                       <li class="input">

                      <!-- <span class="label">手机号码</span>-->

                       <input type="tel" ltype="phone"  placeholder="输入手机号码" v-model="userstr"/><span class="icon_close">&times;</span></li>

                       <li class="input">

                       <!--<span class="label">密码</span>-->

                       <input type="password" ltype="ps"  placeholder="输入密码" v-model="passstr1"/><span class="icon_close">&times;</span></li>

                       <li><div class="remember_pwd"><span class="no"></span><span>两周内免登录</span></div><div class="forgot_pwd"><a href="reset_password.html" >忘记密码？</a></div></li>

                       

                    </ul>

                 </div>

                 <div class="tabs_body">

                     <ul class="login_inputs inputs1">

                       <li class="input">

                       <!--<span class="label">手机号码</span>-->

                       <input type="tel" ltype="phone"  placeholder="输入手机号码" /><span class="icon_close">&times;</span><button class="resendcode">获取短信密码</button></li>

                       <li class="input">

                       <!--<span class="label">短信密码</span>-->

                       <input type="password" ltype="code"  placeholder="短信密码" /><span class="icon_close">&times;</span></li>

                    </ul>

                 </div>

                 </div>

                 <a class="btn_order orange submitbtn" @click="gohome">登录</a>

              </div>

             </div>

		</div>	

	<footer>

	    <ul>

            <li class="home"><router-link to="./home"><span>首页</span></router-link></li>

		    <li class="login"><router-link to="./reg"><span>注册</span></router-link></li>

		    <li class="go2top"><router-link to="./home"><span>回顶</span></router-link></li>

	    </ul>

    </footer>

  </div>
</template>

<script>
export default {
data(){
  return {
          userstr:'',
		  passstr1:''
  }
},
//  beforeRouteEnter(to,from,next)
methods:{
    gohome(){
        let url = "http://localhost:3000/cookies";
        this.$http({
            withCredentials:true,
            url:url,
            method:"get",
            params:{
                username:this.userstr,
                password1:this.passstr1
            }
        }).then(function(res){
            console.log(res.data)
            if(res.data.error == 1){
                alert("登录成功")
                // window.location.href = `leisheng.html?${$("#denlu .yhname input").val()}`
                this.$router.push('./user')
                // this.$router.push('./user?'+this.userstr)
            }else{
                if(res.data == 0){
                   alert("用户名或密码错误")
                }
            }
        }.bind(this))
    }
},
  
  mounted(){
      this.$root.$data.bheader=false;
	 this.$root.$data.bfooter=false;
            var switchTabs = function () {
            var tabs, tabsWidth, tabsHeader, tabsHeaderItem, bodyWidth, itemWidth, length, tabsBody
            tabs = $(".tabs");
            tabsBody = tabs.find(".tabs_body");
            tabsHeader = $(".tabs .tabs_header");
            tabsHeaderItem = tabsHeader.find(".btn");
            tabsHeaderItem.first().addClass("selected");
            tabsBody.first().show().siblings(".tabs_body").hide();
            $.each(tabsHeaderItem, function (i, item) {
                $(item).on('click', function () {
                    var key = $(item).index();
                    if (tabsBody.eq(key)) {
                        $(item).addClass("selected").siblings(".btn").removeClass("selected");
                        tabsBody.eq(key).show().siblings(".tabs_body").hide();
                    } else {
                        return;
                    }
                })
            });
        }
        switchTabs();
  }
}
</script>


<style scoped>
@import "../assets/css/base2.css";
@import "../assets/css/login.css";
</style>

