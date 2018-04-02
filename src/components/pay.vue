<template>
  <div>
      	<!--头部 header-->
	<div>
		<header>
			<div class="header">
				<a href="javascript:window.history.go(-1)"><i class="icon icon-return"></i></a>
				<h1>确认订单</h1>
			</div>
		</header>
		<!-- <div style="height: 2.5rem;"></div> -->
	</div>
	<!-- 确认订单 -->
	<article class="orderSite">
        <router-link to="./address">
			<p>收货人：郭小帅&nbsp;&nbsp;13688888888</p>
			<span>广州市番禺区市桥街道81号</span>
			<i class="icon icon-select"></i>
        </router-link>
		<!-- <a href="site.html">
		</a> -->
	</article>
	<a href="javascript:;" class="select-btn select-btn-t"><img src="../assets/images/sjlogo.png">海绵包包</a>
	<article class="confirmOrder">
		<img src="../assets/images/cp_gg.png">
		<div class="product-text">
	    	<span>首款海绵包包</span>
	    	<span class="hue">颜色：黑色</span>
	    	<span class="price">￥68.00 <s>$75.00</s><em>X1</em></span>
		</div>
	</article>
	<article>
		<form class="setCmp">
			<div class="setCmp-input select-Industry">
				<div class="payment">
					 <input type="radio" class="radio-la" value="微信支付" id="check-2" name="doc-radio-1">
		             <label class="icon-radio" for="check-2">微信支付</label>
				</div>
				<div class="payment">
					 <input type="radio" class="radio-la" value="支付宝" id="check-3" name="doc-radio-1">
		             <label class="icon-radio icon-radio2" for="check-3">支付宝</label>
				</div>			
			</div>
		</form>
	</article>
	<nav class="navbar-fixed-bottom">
		<div class="container">
		    <div class="navbar-text navbar-left pull-left m-cart-disbursement">		合计：￥68.00
		        <p>商品总价￥68.00， 优惠￥7.00</p>
		    </div> 
	    	<a href="javascript:;" class="btn btn-warning navbar-btn pull-right" >去结算</a>
	  	</div>	
	</nav>
  </div>
</template>
<style scoped>
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
</style>

