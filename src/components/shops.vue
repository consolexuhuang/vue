<template>
  <div>
      <article style="margin-bottom: 0;">
    	<h1>精选促销</h1>
      </article>
        <div class="commodity-box">
            <ul class="commodity">
                <!-- <router-link tag="li" to="/detail">
                    <a href="javascript:;">
                        <img src="../assets/images/d_sp_01.jpg">
                        <span>收款海绵包包</span>
                        <span class="price">￥68.00 <s>$75.00</s></span>
                    </a>                
                </router-link>             
               <router-link tag="li" to="/detail">
                    <a href="javascript:;">
                        <img src="../assets/images/d_sp_02.png">
                        <span>百搭学院风英伦背包单双肩包</span>
                        <span class="price">￥1.00 <s>$176.00</s></span>
                    </a>
              </router-link>
               <router-link tag="li" to="/detail">
                    <a href="javascript:;">
                        <img src="../assets/images/d_sp_03.png">
                        <span>百搭学院风英伦背包单双肩包</span>
                        <span class="price">￥1.00 <s>$176.00</s></span>
                    </a>
                </router-link>
               <router-link tag="li" to="/detail">
                    <a href="javascript:;">
                        <img src="../assets/images/d_sp_04.png">
                        <span>百搭学院风英伦背包单双肩包</span>
                        <span class="price">￥1.00 <s>$176.00</s></span>
                    </a>
                 </router-link>
               <router-link tag="li" to="/detail">
                    <a href="javascript:;">
                        <img src="../assets/images/d_sp_06.png">
                        <span>百搭学院风英伦背包单双肩包</span>
                        <span class="price">￥1.00 <s>$176.00</s></span>
                    </a>
                </router-link> -->
               <router-link tag="li" to="/detail"  v-for="(value,index) in list" :key="index" >
                    <a href="javascript:;" >
                        <img :src=value.src>
                        <span>{{value.name}}</span>
                        <span class="price">￥1.00 <s>$176.00</s></span>
                    </a>
                </router-link>
            </ul>	
        </div>
  </div>
</template>

<script>
export default {
 data(){
     return {
         list:[]
     }
 },
  
  mounted(){
    //   var olis = document.getElementsByClassName("lis")[0]
      let url= "http://localhost:3000/article";
      this.$http({
          url:url,
          method:"get",
        //   params:{}
      }).then(function(res){
          console.log(res.data)
           this.list = res.data;
      }.bind(this))
  }
}
</script>

<style>
/* 精选促销 */
.commodity-box{ padding: .5rem; margin-bottom: 3rem; }
.commodity-box2{ margin-bottom: 0; }
.commodity{ overflow: hidden;}
.commodity li{
    float: left;
    width: 32%;
    margin-right: 2%;
    margin-bottom: .25rem;
    background-color: #fff;
}
.commodity li:nth-of-type(3),
.commodity li:nth-of-type(6),
.commodity li:nth-of-type(9){ margin-right: 0; }
.commodity li span{ 
    display: initial;
    color: #1a1a1a; 
    line-height: 1rem; 
    font-size: .7rem; 
    margin-top: .25rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;}
.commodity li span.price{ color: #ed394a; font-size: .75rem; }
.commodity li span.price s{ color: #a6a6a6; font-size: .6rem; }
</style>

