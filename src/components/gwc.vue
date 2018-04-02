<template>
  <div>
      <div>
		<header>
			<div class="header">
				<router-link to="./home">
				  <i class="icon icon-return"></i>
                </router-link>
				<h1>购物车</h1>
				<a href="communityAdd.html" class="cart-edit">编辑</a>
			</div>
		</header>
		<div style="height: 2.5rem;"></div>
	</div>
	<!-- 购物车 -->
	<form class="setCmp">
		<!-- <div class="Cart">
			<div class="payment">
				 <input type="radio" class="radio-la" value="" id="check-2" name="doc-radio-1">
	             <label for="check-2"></label>
			</div>
			<a href="javascript:;" class="select-btn select-btn-t"><img src="../assets/images/sjlogo.png">海绵包包</a>
		</div> -->
		<article class="confirmOrder" v-for="(value) in list" :key="value.id">
			<img :src= "value.src" >
			<div class="product-text">
		    	<span>{{value.name}}</span>
		    	<span class="hue">颜色：黑色</span>
		    	<span class="price price-cart">
		    		￥{{value.price*value.count}}
		    		<div class="norms-content-t norms-content-two">
		                <span class="icon norms-out" @click="jian(value.id)"></span>
		                <span>{{value.count}}</span>
		                <span class="icon norms-add" @click="jia(value.id)"></span>
		            </div>
		    	</span>
			</div>
		</article>

	</form>
	<nav class="navbar-fixed-bottom navbar-fixed-bottom-cart">
		<div class="container container-cart">
		    <div class="navbar-text navbar-left pull-left m-cart-disbursement">		合计：￥136.00
		    </div> 
	    	<a href="javascript:;" class="btn btn-warning navbar-btn pull-right" >去结算</a>
	  	</div>	
	</nav>
  </div>
</template>
<script>
export default {
 data(){
   return {

	//    count:"",
	   list:[],
   }
 },

 methods:{
	 jian(id){
		 this.$root.$data.bloading=true;
		//  console.log(id)
         let url = "http://localhost:3000/jian"
          this.$http({
           withCredentials:true,
           url:url,
		   method:'get',
		   params:{
			   id:id,			   
		   }
         }).then(function(res){
		   this.$root.$data.bloading=false;
			//  this.$router.push({path:"/gwc"})
			window.history.go(0)
			 console.log(this)
			//  this.count = res.data
		 }.bind(this))
	 },
	 jia(id){
		 	 this.$root.$data.bloading=true;
		  let url = "http://localhost:3000/jia"
          this.$http({
           withCredentials:true,
           url:url,
		   method:'get',
		   params:{
			   id:id,			   
		   }
         }).then(function(res){
			  this.$root.$data.bloading=false;
			//  this.$router.push({path:"/gwc"})
			 window.history.go(0)
			 console.log(res.data)
			//  this.count = res.data
		 }.bind(this))
	 },
 },

  mounted(){
	  this.$root.$data.bheader = false;
	   let url = "http://localhost:3000/gwc2"
          this.$http({
           withCredentials:true,
           url:url,
           method:'get',
         }).then(function(res){
			 console.log(res.data)
			 this.list = res.data.reverse()
		 }.bind(this))
  },
  
}
</script>
<style>
@import "../assets/css/style.css";
</style>

