<template>
  <div id="app">
    <loading v-show="this.$root.$data.bloading"></loading>
    <headers v-show="this.$root.$data.bheader"></headers>
    <router-view></router-view>
    <footers v-show="this.$root.$data.bfooter"></footers>

    <!-- <shequjia></shequjia>
    <footers></footers> -->

    <!-- <gwc></gwc>
    <footers></footers> -->

    <!-- <user></user>
    <footers></footers> -->

    <!-- <login></login> -->

    <!-- <reg></reg> -->
  </div>
</template>

<script>
import headers from "./components/headers";

import home from "./components/home";

import footers from "./components/footers";
import shequ from "./components/shequ";
import gwc from "./components/gwc";
import user from "./components/user";

import detail from "./components/detail";
import pay from "./components/pay";
import address from "./components/address";

import login from "./components/login"
import reg from "./components/reg"
import merchant from "./components/merchant"
import shequjia from "./components/shequjia"
// import loading from "./components/merchant"

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    headers,home,footers,shequ,gwc,user,login,reg,detail,pay,address,merchant,shequjia    
  },
  methods(){
    //   console.log(this.$root.$data)

  }
}
</script>

<style>
/*!
 * =====================================================
 * CY v1.0.0 (Email:g1079832313@163.com)
 * =====================================================
 */

/*! bass.css v1.0.0 | gjb */
@charset "utf-8"; 
/*1 重定义浏览器默认样式*/
*{word-wrap:break-word}
html,body,h1,h2,h3,h4,h5,h6,hr,p,iframe,dl,dt,dd,ul,ol,li,pre,form,button,input,textarea,th,td,fieldset{margin:0;padding:0}
ul,ol,dl{list-style-type:none}
html,body{*position:static}
html{font-family: sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}
address,caption,cite,code,dfn,em,th,var{font-style:normal;font-weight:normal}
input,button,textarea,select,optgroup,option{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit}
input,button{overflow: visible;vertical-align:middle;outline:none}
body,th,td,button,input,select,textarea{font-family:"Microsoft Yahei","Hiragino Sans GB","Helvetica Neue",Helvetica,tahoma,arial,Verdana,sans-serif,"WenQuanYi Micro Hei","\5B8B\4F53";color: #333;-webkit-font-smoothing:antialiased;-moz-font-smoothing:antialiased}
input,select,textarea{color:#555;background-color:#fff; border:solid 1px #ddd;}
body{line-height:1.6;}
h1,h2,h3,h4,h5,h6{font-size:100%}
a,area{outline:none;blr:expression(this.onFocus=this.blur())}
a{text-decoration:none;cursor: pointer;}
a:hover{text-decoration:underline;}
a.ie6:hover{zoom:1}
a,
a:focus,
a:hover,
a:active{ outline:none; color: #333; text-decoration:none;}
a.btn,
a.btn:hover,
a.btn:active{ color: #fff; }
sub,sup{vertical-align:baseline}
textarea { resize: none;}
.fl{ float: left; }
.fr{ float: right; }
/*img*/
img{border:0;vertical-align:middle}
a img,img{-ms-interpolation-mode:bicubic}
.img-responsive{max-width: 100%;height: auto}

/*IE下a:hover 背景闪烁*/
*html{overflow:-moz-scrollbars-vertical;zoom:expression(function(ele){ele.style.zoom = "1";document.execCommand("BackgroundImageCache",false,true)}(this))}

/*HTML5 reset*/
header,footer,section,aside,details,menu,article,section,nav,address,hgroup,figure,figcaption,legend{display:block;margin:0;padding:0}time{display:inline}
audio,canvas,video{display:inline-block;*display:inline;*zoom:1}
audio:not([controls]){display:none}
legend{width:100%;margin-bottom:20px;font-size:21px;line-height:40px;border:0;border-bottom:1px solid #e5e5e5}
legend small{font-size:15px;color:#999}
svg:not(:root) {overflow: hidden}
fieldset {border-width:0;padding: 0.35em 0.625em 0.75em;margin: 0 2px;border: 1px solid #c0c0c0}
input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button {height: auto}
input[type="search"] {-webkit-appearance: textfield; /* 1 */-moz-box-sizing: content-box;-webkit-box-sizing: content-box; /* 2 */box-sizing: content-box}
input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration {-webkit-appearance: none}

/*清楚浮动
*/
.cl:after,.clearfix:after{content:".";display:block;height:0;clear:both;visibility:hidden}.cl,.clearfix{zoom:1}

/* header */
header{position: fixed;left: 0;top: 0;width: 100%;z-index: 10;}
header .header{min-height: 2.5rem;line-height: 2.5rem;background-color: #ee394a ;position: relative; z-index: 999;}
header h1{color: #fff; text-align: center; font-size: 1rem; font-weight: normal;}
header h1 i{font-size: 1.5rem; position: absolute; left: .2rem; top: 0px; color: rgba(255,255,230,1);}

.return{position: absolute;height: 2.5rem; line-height: 2.5rem; left: 0;top: 0;cursor: pointer;padding: 0 .4rem;color: rgba(255,255,255,1);background: transparent;font-size: 1.2rem; }
.return:active{ color: #fff; }

/*-- 默认Android -------------------------------------------*/
html{font-size: 20px;}

@media only screen and (max-width:320px){
	html{font-size: 17.5px !important;}
}

/*-- 兼容iphone4/4s -------------------------------------------*/
@media (device-height:480px) and (-webkit-min-device-pixel-ratio:2){
	html{font-size: 18px;}
	header .header{top: initial !important;}
}


/*-- 兼容iphone5 -----------------------------------------*/
@media (device-height:568px) and (-webkit-min-device-pixel-ratio:2){
	html{font-size: 20px;}
	header .header{top: initial !important;}
}


/*-- 兼容iphone 6 --------------------------------------------*/
@media (device-width:375px) and (-webkit-min-device-pixel-ratio:2){
	html{font-size: 20px;}
	header .header{top: initial !important;}
	.D-BuyNum input{top: 0 !important;}
	.cartContentList .D-BuyNum button{line-height: 1.15rem;}
}


/*-- 兼容iphone6 plus --------------------------------------------*/
@media (device-width:414px) and (-webkit-min-device-pixel-ratio:3.0){
	html{font-size: 23px;}
	header .header{top: initial !important;}
}


/*-- 兼容 iPad 3 & 4 ------------------------------------------*/
@media only screen 
and (min-device-width : 768px) 
and (max-device-width : 1024px)
and (-webkit-min-device-pixel-ratio: 2) {
	html{font-size: 30px;}
	header .header{top: initial !important;}
	.order-Address dl dt i{font-size: .8rem;}
	menu i.icon-cart span{right: 23%;}
}

/* ----------------- */
input[type=color], 
input[type=date], 
input[type=datetime-local], 
input[type=datetime], 
input[type=email], 
input[type=month], 
input[type=number], 
input[type=password], 
input[type=search], 
input[type=tel], 
input[type=text],
input[type=time], 
input[type=url], 
input[type=week], 
select, 
textarea {
    width: 100%;
    -webkit-appearance: none;
    padding: .5rem 0;
    margin-bottom: 15px;
    line-height: 1.2rem;
    -webkit-user-select: text;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 3px;
    outline: 0;
}
body{font-size: .8rem; background-color: #f5f5f5;}
h1,h2,h3,h4,h5,h6{ font-weight: 400;}
img{ width: 100%; }
span.icon-uniE918{ color: #60abff; }
.btn{
	padding: .4rem;
    border-radius: 5px;
    border: initial;
    background-color: #ff4e00;
    color: #fff;
    margin-right: 0px;
    font-size: .75rem;
}
.bottom-btn{ 
    width: 94%; 
    margin: .5rem 3%;  
    background-color: #ed394a;
    display: block;
    padding: .5rem 0;
    text-align: center;
    font-size: .875rem;
}
a.bottom-btn2{   
    background-color: #fff;
    color: #ed394a;
}
.cy-btn{
    width: 100%;
    line-height: 1.8rem;
    background-color: #00cc00;
}
.btn-max{
    display: inherit;
    margin: .5rem;
    text-align: center;
    line-height: 1.8rem;
    font-size: .8rem;
}
.btn-yellow{ background-color: #f5ba20; }
.btn-green{ background-color: #00cc00; }
.btn-red{ background-color: #ee394a !important; }
.btn-b{ background-color: #60abff; }
.btn-forbidden{background-color: #ccc; }
.btn-upgrade{ background-color: #f10180; }
.btn-set{background-color: #F90;}
/*-- icon图标 --*/
.icon {
    display: inline-block;
    background-image: url(./assets/images/icon.png);
    background-size: 350px 350px;
}

</style>
