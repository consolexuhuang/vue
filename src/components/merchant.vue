<template>
  <div>
      <!--头部 header-->
	<div>
		<header>
			<div class="header">
				<a href="javascript:window.history.go(-1);"><i class="icon icon-return"></i></a>
				<h1>商家</h1>
			</div>
		</header>
		<!-- <div style="height: 2.5rem;"></div> -->
	</div>
    <div class="merchant">
        <img src="../assets/images/sj_logo2.png">
        <p>海绵包包</p>
        <span class="btn">联系客服</span>
    </div>
    <div class="merchant-notice">
        <p>上新时间：每周二上新,默认圆通快递，全店默认两件包邮</p>
    </div>
    <div class="commodity-box commodity-box2">
        <ul class="commodity">
            <li v-for="(value,index) in list" :key="index">
                <router-link to="./detail" >
                <!-- <a href="productDetails.html"> -->
                    <img :src=value.src>
                    <span>{{value.name}}</span>
                    <span class="price">￥68.00 <s>$75.00</s></span>
                <!-- </a> -->
                </router-link>
            </li>
        </ul>   
    </div>
  </div>
</template>

<script>
export default {
  data(){
      return {
          list:[],
      }
  },
  mounted(){
    //    this.$root.$data.bheader=false;
	 this.$root.$data.bfooter=true;
      let url= "http://localhost:3000/article";
      this.$http({
          url:url,
          method:"get",
        //   params:{}
      }).then(function(res){
          console.log(res.data)
           this.list = res.data;
      }.bind(this))
  },
  
}
</script>

<style>
 @import "../assets/css/style.css";
</style>

