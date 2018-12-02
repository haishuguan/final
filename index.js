function myDate(){
  var date=new Date();
  var year=date.getFullYear();
  var month=date.getMonth() + 1;
  var day=date.getDate();
  var hours=date.getHours();
  var minutes=date.getMinutes();
  var seconds=date.getSeconds();
  var str=year+"/"+month+"/"+day+"   "+hours+":"+minutes+":"+seconds;
  var myTime=document.getElementById("time");
  myTime.innerHTML=str;
}
function timeout(){
  window.setInterval(myDate,1000);
}
var str="Hello World. Hello cat lover. "
function display(){
  document.getElementById("roll").innerHTML=str;
  str=str.substring(1,str.length)+str.substring(0,1);
  setTimeout(display,100);
}
