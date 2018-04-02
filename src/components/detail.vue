<template>
   <div>
       <!--头部 header-->
	<div>
		<header>
			<div class="header">
                <a href="javascript:window.history.go(-1);">
				  <i class="icon icon-return"></i>
                </a>
				<h1>商家</h1>
			</div>
		</header>
		<!-- <div style="height: 2.5rem;"></div> -->
	</div> 
     
       <div class="product-head">
		<a href="javascript:;"><img src="../assets/images/fx02.png"></a>
		<a href="javascript:;"><img src="../assets/images/sc02.png"></a>
		<img src="../assets/images/cp.jpg">
	   </div>
	<article class="product-text">
    	<span>首款海绵包包</span>
    	<span class="price">68.00 </span>
    </article>
    <a id="norms" href="javascript:;" class="select-btn select-btn-s">选择规格<i class="icon icon-select"></i></a>
    <!-- 选择规格 -->
    <div class="norms-box">
    	<div class="norms-box-bg"></div>
        <div class="norms-content">
            <div class="norms-content-t norms-content-one">
                <div class="norms-img"><img src="../assets/images/cp_gg.png"></div>
                <div class="norms-c-text">
                    <span class="name">首款海绵包包</span>
                    <span class="price">68.00 </span>
                </div>
                <div class="norms-off-btn"><img src="../assets/images/off_btn.png"></div>
            </div>
            <div class="norms-content-t norms-content-two">
                数量
                <span class="icon norms-out" @click="jian"></span>
                <span class="count">{{count}}</span>
                <span class="icon norms-add" @click="jia"></span>
            </div>
            <div class="norms-content-three">
                颜色<br>
                <!-- <router-link active-class="pick"> -->

                <span class="pick">黑色</span>
                <!-- </router-link> -->
                <!-- <router-link active-class="pick"> -->

                <span >白色</span>
                <!-- </router-link> -->
            </div>
        </div>
    </div>
    <a href="javascript:;" class="select-btn select-btn-t"><img src="../assets/images/sjlogo.png">海绵包包 <i class="icon icon-select"></i></a>
    <a href="javascript:;" class="select-btn select-btn-t select-btn-d"><img src="../assets/images/tel.png">020-8888-8888</a>
    <!-- 详情内容 product-content -->
    <div class="product-content">
    	<ul id="tab_btn" class="product-content-ul">
    		<li class="pick">
    			<span>图文详情</span>
    		</li>
    		<li>
    			<span>用户评价</span>
    		</li>
    	</ul>
    	<ul class="product-content-ul2">
    		<li class="tab_content show">
    			<img src="../assets/images/xq01.png">
    			<img src="../assets/images/xq02.jpg">
    			<img src="../assets/images/xq03.jpg">
    		</li>
    		<li class="tab_content">
    			用户评价
    			<div class="evaluate">
    				<div class="evaluate-head">
    					<img src="../assets/images/user-img0.jpg">
	    				<p>郭小帅 <span>2016-08-24</span></p>
	    				<p><img src="../assets/images/xingxing.png"></p>
    				</div>
    				<p>这个包包不错，值得拥有</p>
    			</div>
    			<div class="evaluate">
    				<div class="evaluate-head">
    					<img src="../assets/images/user-img0.jpg">
	    				<p>郭小帅 <span>2016-08-24</span></p>
	    				<p><img src="../assets/images/xingxing.png"></p>
    				</div>
    				<p>这个包包不错，值得拥有</p>
    			</div>
    			<div class="evaluate">
    				<div class="evaluate-head">
    					<img src="../assets/images/user-img0.jpg">
	    				<p>郭小帅 <span>2016-08-24</span></p>
	    				<p><img src="../assets/images/xingxing.png"></p>
    				</div>
    				<p>这个包包不错，值得拥有</p>
    			</div>
    		</li>
    	</ul>
    </div>
    <!-- 加入购物车底部 -->
    <div class="add-shopping">
    	<a href="javascript:;" class="shopping-btn">
    		<em>2</em>
    		<i class="icon icon-car"></i>
    	</a>
        <router-link to="./pay" class="btn btn-red fr">
          立即购买
        </router-link>
    	<!-- <a href="confirmOrder.html" class="btn btn-red fr">立即购买</a> -->
    	<a href="javascript:;" class="btn btn-yellow fr" @click="tianjia">加入购物车</a>
    	<div class="cl"></div>
    </div>
   </div>
</template>

<script>


export default {
  data(){
      return {
          id:0,
          count:1,
      }
  },
  methods:{
      
      tianjia(){
        var oname = document.getElementsByClassName("name")[0]
        var oprice = document.getElementsByClassName("price")[0]
        var ocount = document.getElementsByClassName("count")[0]
        // console.log(oname)
        var aname = oname.innerHTML;
        var aprice = oprice.innerHTML
        var acount = ocount.innerHTML
        this.id+=1
          let url = "http://localhost:3000/gwc"
          this.$http({
           withCredentials:true,
           url:url,
           method:'get',
           params:{
              id: this.id,
              src:"src/assets/images/cp_gg.png",
              name:aname,
              price:aprice,
              count:this.count
           }
          }).then(function(res){
              if(res.data == 1){
                  alert("添加成功")
              }
            //   console.log(res.data)
          })
      },
      jian(){
         this.count++
      },
      jia(){
        this.count--
      },
  },

  mounted(){
       
    //    this.$root.$data.bheader=false;
	 this.$root.$data.bfooter=false;
       var tab_Btns_box=document.getElementById('tab_btn');
	    var tab_Btns=tab_Btns_box.getElementsByTagName('li');
	    var tab_contents=document.getElementsByClassName('tab_content');
	    for(var i=0;i<tab_Btns.length;i++){
	    tab_Btns[i].index=i;

	    tab_Btns[i].onclick=function(){
	     for(var i=0;i<tab_Btns.length;i++){
	     if(i!==this.index){
	     tab_Btns[i].classList.remove('pick')
	     }
	     }
	     tab_Btns[this.index].className="pick";

	     for(var j=0;j<tab_contents.length;j++){
	     if(j!==this.index){
	         tab_contents[j].classList.remove('show');
	     }
	         tab_contents[this.index].classList.add('show');
	     }
	    }
      };
      
      $(document).ready(function(){
          $("#norms").click(function(){
          $(".norms-box").show();
          });
          $(".norms-box-bg").click(function(){
          $(".norms-box").hide();
          });
          $(".norms-off-btn").click(function(){
          $(".norms-box").hide();
          });
        });
  }

}
</script>


<style>
 /* 商品详情 */
.product-head{ position: relative; }
.product-head a{
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    top: .5rem;
    right: .5rem;
}
.product-head a:nth-of-type(1){ right: 2.5rem; }
.product-text { padding: .5rem; margin-bottom: 0; border-bottom: 0;}
.product-text span{
    display: initial;
    color: #1a1a1a; 
    line-height: 1.4rem; 
    font-size: 1rem; 
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.product-text span.price{ color: #ed394a; font-size: .875rem; }
.product-text span.price s{ color: #a6a6a6; font-size: .75rem; }
.select-btn{ 
    position: relative;
    display: block;
    line-height: 2.2rem; 
    font-size: .875rem;
    padding: 0 .5rem;
    border-top: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6; 
    background-color: #fff;
}
.select-btn-s{ margin-bottom: .5rem; }
i.icon-select{
    position: absolute;
    width: 20px;
    height: 20px;
    right: .25rem;
    top: .5rem;
    background-size: 220px 220px;
    background-position: -163px -5px;
}
.select-btn-t{ padding-left: 2.5rem; }
.select-btn-t img{
    position: absolute;
    top: .3rem;
    left: .5rem;
    width: 1.5rem;
    height: 1.5rem;
}
.select-btn-d{ border-top: 0; }
.select-btn-d img{
    top: .45rem;
    left: .8rem;
    width: 1.1rem;
    height: 1.1rem;
}
.product-content-ul{ overflow: hidden; }
.product-content-ul li{
    width: 50%;
    float: left;
    line-height: 2.2rem;
    text-align: center;
    background-color: #f5f5f5;
}
.product-content-ul li span{
    padding: 0 .5rem;
    line-height: 2.2rem;
    display: inline-block;
    border-bottom: 2px solid #f5f5f5;
}
.product-content-ul li.pick span{
    color: #ed394a;
    border-bottom: 2px solid #ed394a;
}
.product-content-ul2{ margin-bottom: 3rem; }
.product-content-ul2{ background-color: #fff; }
.product-content-ul2 li{ padding: .5rem; }
/* 选择规格 */
.norms-box{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .5);
    z-index: 2;
    display: none;
}
.norms-box .norms-box-bg{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 3;
}
.norms-box  .norms-content{
    position: absolute;
    top: 40%;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #fff;
    z-index: 4;
}
.norms-content-t{ border-bottom: 1px solid #e6e6e6;}
.norms-content-one{ width: 100%; height: 4rem; }
.norms-content-one .norms-img{ 
    position: absolute; 
    top: -1.5rem;
    left: .5rem;
    width: 5rem;
}
.norms-content-one .norms-c-text{ margin-left: 6rem; margin-top: .5rem;}
.norms-c-text span{
    display: initial;
    color: #1a1a1a; 
    line-height: 1.4rem; 
    font-size: 1rem; 
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.norms-c-text span.price{ color: #ed394a; font-size: .875rem; }
.norms-c-text span.price s{ color: #a6a6a6; font-size: .75rem; }
.norms-content-one .norms-off-btn{
    position: absolute;
    top: -.5rem;
    right: .5rem;
    width: 1rem;
}
.norms-content-two{ line-height: 1.5rem; padding: .5rem; font-size: .8rem;}
.norms-content-two span{
    width: 1rem;
    height: 1rem;
    margin: .25rem;
    line-height: 1rem;
    text-align: center;
    float: right;
}
.norms-content-two span.norms-out{
    background-size: 200px 200px;
    background-position: -106px -4px;
}
.norms-content-two span.norms-add{
    background-size: 200px 200px;
    background-position: -106px -25px;
}
.norms-content-three{
    padding: .5rem;
    font-size: .8rem;
}
.norms-content-three span{ border: 1px solid #ccc; font-size: .7rem; padding: .1rem .5rem; margin-top: .5rem; display: inline-block;}
.norms-content-three span.pick{ border: 1px solid #ee394a; background-color: #ee394a; color: #fff;}
/* 用户评价 evaluate */
.evaluate{ overflow: hidden; margin: .5rem 0; }
.evaluate>p{ padding-left: 2.5rem; }
.evaluate-head>img{ 
    width: 2rem; 
    height: 2rem;
    border-radius: 50%;
    float: left;
}
.evaluate-head p{ padding-left: 2.5rem; }
.evaluate-head p span{
    font-size: .6rem;
    color: #999;
    float: right;
}
.evaluate-head p img{ width: 76px; height: 12px; }
/* 加入购物车底部 */
.add-shopping{
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    height: 2.5rem;
    border-top: 1px solid #e6e6e6;
    background-color: #fff;
    z-index: 5;
}
.add-shopping a.shopping-btn{
    position: absolute;
    width: 3.3rem;
    height: 3.3rem;
    line-height: 3.3rem;
    bottom: .3rem;
    left: .5rem;
    background-color: #ed394a;
    border-radius: 50%;
    text-align: center;
}
.add-shopping a.shopping-btn em{
    position: absolute;
    top: 0;
    right: 0;
    width: 1rem;
    height: 1rem;
    line-height: 1rem;
    color: #fff;
    border-radius: 50%;
    background-color: #fbc725;
}
.add-shopping a.shopping-btn i.icon-car{
    width: 2rem;
    height: 2rem;
    margin-top: .5rem;
    background-size: 250px 250px;
    background-position: -188px -25px;
}
.add-shopping a{ margin-right: .5rem; }
.add-shopping a.btn{ margin-top: .2rem; }
/* 确认订单 */
article.orderSite{ padding: 0 ; border-bottom: 0;}
.orderSite a{ position: relative; display: block; padding: .5rem; border-bottom: 1px solid #e6e6e6; }
.orderSite p{ font-size: .85rem; color: #404040; }
.orderSite span{ font-size: .75rem; color: #999; }
.orderSite span em{ color: #ed394a; margin-right: .25rem;}
.orderSite a i.icon-select{ top: 1.25rem; }
article.confirmOrder{border-top: 0;}
.confirmOrder img{ width: 4.8rem; height: 4.8rem; float: left; margin-right: .5rem;}
.product-text span.hue{ font-size: .65rem; color: #737373; line-height: 1rem; }
.product-text span.price em{ float: right; }
.navbar-fixed-bottom{
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    margin: 0;
    padding: 0;
    z-index: 1030;
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
}
.container{
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
}
.m-component-foot .container {
    padding: 0 10px;
}
.navbar-text {
    color: #ee394a;
    font-size: 1.2em;
    margin: 10px 0 0;
}
.navbar-text>p {
    margin-bottom: 0;
    font-size: .8em;
    color: #a7a7a7;
}
.m-cart-disbursement {
    margin-top: 5px;
    font-size: 14px;
}
.navbar-btn {
    margin: 6px 0 6px 10px;
}
.btn-warning {
    color: #fff;
    background-color: #ee394a;
    border-color: #ee394a;
}
.navbar-btn {
    margin-top: 8px;
    margin-bottom: 8px;
}
.pull-left {
    float: left!important;
}
.pull-right {
    float: right!important;
}

.icon-radio{
    position: relative;
    }
.icon-radio:after{
    content: "";
    width: 32px;
    height: 32px;
    position: absolute;
    background-image: url(../assets/images/icon.png);
    background-size: 250px 250px;
    background-position: 0px -132px;
    top: 7px;
    left: 0;
    display: block;
}
.icon-radio2:after{ background-position: -32px -132px;}
.setCmp .setCmp-input input{ border: none; padding: 0; margin: 0; width: 100%;}
.radio-la,
.checkbox-la{ display: none; }
.radio-la+label,
.checkbox-la+label{ position: relative; display: inline-block; z-index: 9; text-indent: 2rem; width: 100%; min-height: 1rem; padding: .5rem 0; line-height: 1.2rem; color: #999;}
.select-association-list .radio-la+label{ width: 100%; }
.radio-la+label:before,
.checkbox-la+label:before{ 
    content: "";
    width: 30px; 
    height: 30px; 
    position: absolute; 
    background-image: url(../assets/images/icon.png);
    background-size: 300px 300px;
    background-position: -127px -128px;
    top: 7px; 
    right: 0; 
    display: block; 
}
.radio-la:checked+label:before{ background-position: -95px -128px;}
.add-site{ position: fixed; right: 0; bottom: 0; left: 0;}
/* 新增地址 */
.input-row {
    overflow: hidden;
    clear: left;
    min-height: 40px;
    border-bottom: 1px solid #e7e7e7;
}
.input-row label {
    position: absolute;
    float: left;
    width: 4rem;
    padding: .5rem 0 .5rem .5rem;
    line-height: 1.2rem;
}
.input-row2 label{ color: #999; }
.input-row label~input{
    padding-left: 4rem;
    padding-right: 1rem;
    margin-bottom: 0;
    border: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: normal;
    border-radius: 0;
}
.addSite-radio .radio-la+label{ text-indent: .5rem; }
.addSite-radio .radio-la+label:before{ right: .5rem; }
</style>
