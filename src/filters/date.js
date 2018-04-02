import {fillzero} from './fillzero'
export let date=time=>{
  let d=new Date();
  d.setTime(time)*1000;
  return `${d.getFullYear()}年${fillzero(d.getMonth()+1)}月${fillzero(d.getDate())}日${fillzero(d.getHours())}时${fillzero(d.getMinutes())}分`
};