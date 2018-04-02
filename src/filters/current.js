export let current = function(data, huobi="￥",digit=2){
   return huobi+data.toFixed(digit)
}