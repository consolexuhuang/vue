<template>
  <div>
      	<!--头部 header-->
	<div>
		<header>
			<div class="header">
				<a href="javascript:window.history.go(-1)"><i class="icon icon-return"></i></a>
				<h1>收货地址</h1>
			</div>
		</header>
		<!-- <div style="height: 2.5rem;"></div> -->
	</div>
	<!-- 收货地址 -->
	<article class="orderSite">
		<a href="javascript:;">
			<p>收货人：郭小帅&nbsp;&nbsp;13688888888</p>
			<span><em>[默认]</em>广州市番禺区市桥街道81号</span>
			<i class="icon icon-select"></i>
		</a>
		<a href="javascript:;">
			<p>收货人：郭小帅&nbsp;&nbsp;13688888888</p>
			<span>广州市番禺区市桥街道81号</span>
			<i class="icon icon-select"></i>
		</a>
	</article>
	<div class="add-site">
		<a href="siteAdd.html" class="btn bottom-btn">新增地址</a>	
	</div>
  </div>
</template>
<script>
export default {
  mounted(){
	  this.$root.$data.bfooter = false
  }
}
</script>

<style>
 @import "../assets/css/style.css";
</style>

