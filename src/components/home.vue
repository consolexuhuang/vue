<template>
  <div class="home">
    <sliders></sliders>
    <navs></navs>
    <marks></marks>
    <shops></shops>
  </div>
</template>
<script>
import sliders from "./sliders";
import navs from "./navs";
import marks from "./marks";
import shops from "./shops";
  export default{
    // data(){
    //   return {
    //     list:[],
    //     dataName:'home'
    //   }
    // },
    mounted(){
      // console.log(this.$root)
      // let url=`../../data/index.data`;
      // let url=`http://localhost:3000/index?a=1&b=2`;//node
      // let url=`http://localhost:80/index.php?a=1&b=2`;//node
    
      //  this.$root.$data.bloading=true;
       this.$root.$data.bheader=true;
       this.$root.$data.bfooter=true;
      // this.$http({
      //   url:url
      // }).then(
      //   res => {
          // setTimeout(()=>{
          //     this.$root.$data.bheader=true;
          //     this.$root.$data.bfooter=true;
          //     this.$root.$data.bloading=false;
          //   // this.list=res.data;
          // },1000);
      //   }
      // )
    },
    components:{
      sliders,navs,marks,shops,
    }
  }
</script>
