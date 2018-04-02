<template>
  <!--轮播图 banner-->
    <!-- <div class="m-slider" id="slider">
	    <div class="ks_dbox ks_ts">
	         <div class="ks_wrap">
	           <img src="../assets/images/banner1.jpg">
	         </div>
	         <div class="ks_wrap">
	           <img src="../assets/images/banner2.jpg">
	         </div>
	         <div class="ks_wrap">
	           <img src="../assets/images/banner3.jpg">
	         </div>
	    </div>
	    <div class="ks-circles"><ul class="ks_wt"></ul></div>
    </div> -->
    <swipe class="my-swipe">
        <swipe-item>
            <img src="../assets/images/banner1.jpg">
        </swipe-item>
        <swipe-item>
            <img src="../assets/images/banner2.jpg">
        </swipe-item>
        <swipe-item>
            <img src="../assets/images/banner3.jpg">
        </swipe-item>
    </swipe>
</template>

<script>
    import "../../node_modules/vue-swipe/dist/vue-swipe.css";
    import {Swipe,SwipeItem} from "vue-swipe";
    export default{
        components:{
            'swipe':Swipe,
            'swipe-item':SwipeItem
        }
        // mounted(){
        //        $('#slider').slider({
        //             className: 'slider_box',
        //             tick: 4000 //播放间隔
        //         });
        //         var imgPieces=$('.m-slider').find('.ks_wrap');
        //         for(var i=0;i<imgPieces.length;i++){
        //           $('.ks_wt').append('<li></li>');
        //           $('.ks_wt').find('li').eq(0).addClass('active');
        //         }   
        // }
    }
</script>
<style scoped>
img{width: 100%;height: 100%}
.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}
 
.slide1 {
  background-color: #0089dc;
  color: #fff;
}
 
.slide2 {
  background-color: #ffd705;
  color: #000;
}
 
.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}

.content{margin:0 auto; margin-bottom:0.8rem;}
.content .banner{margin-top:0.6rem;position: relative;overflow: hidden; z-index: 1}
.banner ul li{width:6.4rem;float:left;position: relative;}
.banner ul li img{width:100%; display:block;}
.banner ul li .text-box{width:5.8rem; padding:0 0.3rem;height:1.24rem; position:absolute; left:0; bottom:0; color:#fff; background:rgba(0,0,0,0.5);}
.text-box h2{ font-size:0.3rem; font-weight:normal; margin-top:0.22rem; line-height:100%; margin-bottom:0.22rem; overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}
.text-box p{ line-height:100%;}

.banner ol{position:absolute; right:0.2rem;bottom:0.2rem;}
.banner ol li{width:0.15rem;height:0.15rem; background:#5477b2; float:left; border-radius:50%; margin-right:0.08rem;}
.banner ol li.active{ background:#fff;}

/*-- 轮播图 banner --*/
/* .m-slider {
    position: relative;
    overflow: hidden;
    width: 100%;
    margin: 0 auto;
}
.ks_wrap {
    width: 100%;
}
.ks_ts {
    -webkit-transition: 500ms;
}
.ks_dbox {
    display: -webkit-box;
    width: 100%;
    text-align: left;
}
.ks_wt {
    display: -webkit-box;
    margin: 0;
    padding: 0;
    -webkit-box-pack: center;
}
.ks_wt li {
    list-style: none;
    text-align: center;
    color: #fff;
}
.ks-circles {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
}
.ks_wt_1 .ks_wt li {
    line-height: 35px;
    height: 35px;
    border-right: solid 1px #bbb;
    -webkit-box-flex: 1;
}
.ks-circles .ks_wt li {
    overflow: hidden;
    width: 12px;
    height: 3px;
    margin: 10px 5px;
    text-indent: 20px;
    background-color: #fff;
}
.ks_wt_1 .ks_wt .active {
    color: #000;
    background: -webkit-linear-gradient(top, #e7e7e7 0, #dfdfdf 100%);
}
.ks-circles .ks_wt .active {
    -webkit-animation: kt2 .8s ease-in-out;
    background: #ee394a;
}
@-webkit-keyframes kt2 {
    0% {
        -webkit-transform: scale(1);
    }
    60% {
        -webkit-transform: scale(1.4);
    }
    100% {
        -webkit-transform: scale(1);
    }
}
article{ padding: .5rem; background-color: #fff; margin-bottom: .5rem; border-top: 1px solid #e6e6e6; border-bottom: 1px solid #e6e6e6;}
article h1{  font-size: .875rem; color: #666; }
article.no-pad{ padding: 0; } */
</style>

