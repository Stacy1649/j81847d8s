// function ShowTime(){
// 　var NowDate = new Date();
// 　var h = NowDate.getHours();
// 　var m = NowDate.getMinutes();
// 　var s = NowDate.getSeconds();　
// 　document.getElementById('showbox').innerHTML = (NowDate.getFullYear()-1911)+ '-' +(NowDate.getMonth()+1) + "-" + NowDate.getDate() + " " +h+':'+m+':'+s;
// 　setTimeout('ShowTime()',1000);
// }

window.addEventListener("load",function() {  
  setTimeout(function(){
  window.scrollTo(0, 1); }, 10);
});

function ShowTime(){
　var NowDate = new Date();
	var month = (NowDate.getMonth()+1) > 9 ? (NowDate.getMonth()+1) : '0'+(NowDate.getMonth()+1);
	var tDate = NowDate.getDate() > 9 ? NowDate.getDate() : '0'+NowDate.getDate();
　var h = NowDate.getHours() > 9 ? NowDate.getHours() : '0'+NowDate.getHours();
　var m = NowDate.getMinutes() > 9 ? NowDate.getMinutes() : '0'+NowDate.getMinutes();
　var s = NowDate.getSeconds() > 9 ? NowDate.getSeconds() : '0'+NowDate.getSeconds();
　document.getElementById('date').innerHTML = (NowDate.getFullYear()-1911)+ '-' + month + "-" + tDate + " " +h+':'+m+':'+s;
　setTimeout('ShowTime()',1000);
}