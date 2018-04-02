<template>
   <!-- footer 底部菜单 -->
    <footer>
        <router-link active-class="pick" to="/home" @click="show"> 
            <!-- <a href="javascript:;" > -->
                <i class="icon icon-f1"></i>
                首页
            <!-- </a> -->
        </router-link>

         <router-link active-class="pick" to="/shequ">
            <!-- <a href="javascript:;"> -->
                <i class="icon icon-f2"></i>
                社区
            <!-- </a> -->
        </router-link>

        <router-link active-class="pick" to="/gwc">
            <!-- <a href="javascript:;"> -->
                <i class="icon icon-f3"></i>
                购物车
            <!-- </a> -->
         </router-link>

          <router-link active-class="pick" to="/user">
            <!-- <a href="javascript:;"> -->
                <i class="icon icon-f4"></i>
                我
            <!-- </a> -->
        </router-link>
    </footer>
</template>

<script>
export default {
  methods:{
      show:function(){
         setTimeout(()=>{
            this.$root.$data.bloading=false;
          },1000);
      },
  }
}
</script>

<style scoped>
/* footer 底部菜单 */
footer{
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    padding: .25rem 0;
    background-color: #fff;
    border-top: 1px solid #e6e6e6;
}
footer a{ 
    display: initial; 
    width: 25%;
    float: left;
    text-align: center;
    color: #737373;
}
footer a.pick{ color: #ed394a; }
footer a i{ 
    display: inherit !important;
    margin: 0 auto; 
    width: 30px; 
    height: 30px; 
}
footer a i.icon{background-size: 280px 280px;}
footer a i.icon-f1{ background-position: -110px -4px; }
footer a i.icon-f2{ background-position: -73px -4px; }
footer a i.icon-f3{ background-position: -36px -4px; }
footer a i.icon-f4{ background-position: 0 -4px; }
footer a.pick i.icon-f1{ background-position: -110px -33px; }
footer a.pick i.icon-f2{ background-position: -73px -33px; }
footer a.pick i.icon-f3{ background-position: -36px -33px; }
footer a.pick i.icon-f4{ background-position: 0 -33px; }
footer a span{ display: inherit; }

.tab_content { display: none !important;}
.show { display: block !important;}
</style>

