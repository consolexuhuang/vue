<template>
  <article>
    	<h1>商城客户</h1>
    	<div class="client">
			<router-link to="./merchant"><img src="../assets/images/scyh0.jpg"><span>海绵包包</span></router-link>
	    	<router-link to="./merchant"><img src="../assets/images/scyh3.png"><span>韩国代购</span></router-link>
	    	<router-link to="./merchant"><img src="../assets/images/scyh4.png"><span>ARC潮店</span></router-link>
	    	<router-link to="./merchant"><img src="../assets/images/scyh1.png"><span>欧力女装</span></router-link>
    	</div>
    </article>
</template>
<style>
/* 商城客户 */
.client{ overflow: hidden; margin: .5rem .25rem;}
.client a{ width: 20.5%; float: left; margin-right: 6%; text-align: center; font-size: .8rem;}
.client a img{ border-radius: 50%; }
.client a:nth-of-type(4){ margin-right: 0; }
</style>

