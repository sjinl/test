//创建date对象
/*var d1=new Date("2018/11/11 10:20:30")
var d2=new Date(2018,10,11,10.20,30)//月份范围0-11
//当前的系统时间就是电脑时间
var d3=new Date()
var d4=new Date(1122640000)
console.log(d1)
console.log(d2)
console.log(d3)
console.log(d4)*/
//获取具体的日期时间信息
//var d1=new Date("2018/11/18 10:40:30")
//对象方法
//获取
/*console.log(d1.getFullYear())
console.log(d1.getMonth())//0-11
console.log(d1.getDate())//
console.log(d1.getHours())//
console.log(d1.getMinutes())//
console.log(d1.getSeconds())
console.log(d1.getMilliseconds())
console.log(d1.getDay())//0-6
var d1=new Date()
var year=d1.getFullYear()
var month=d1.getMonth()+1
var date=d1.getDate()
var hours=d1.getHours()
var minutes=d1.getMinutes()
var seconds=d1.getSeconds()
var day=d1.getDay()
switch(day){
case 0:{day="星期日";break;}
case 1:{day="星期一";break;}
case 2:{day="星期二";break;}
case 3:{day="星期三";break;}
case 4:{day="星期四";break;}
case 5:{day="星期五";break;}
default:day="星期六"


}
var ampm;
if(hours<12){ampm="上午"}
else{ampm="下午"}

console.log(year+"年"+month+"月"+date+"日"+" "+hours+"时"+minutes+"分"+seconds+"秒"+" "+day+" "+ampm)*/
//获取距离计算机元年的毫秒数

//距离2018圣诞节还有多长时间
//2018圣诞节的计算机元年时间-当前时间距离计算机元年时间
/*var now=new Date()
var d2=new Date(2018,10,11,10.20,30)
console.log(now)
console.log(d2.toLocaleString())
console.log(now.toLocaleDateString())
console.log(now.toLocaleTimeString())

//设置date中的信息
var d1=new Date("2018-11-15 12:30:00")
d1.setFullYear(2021)
d1.setMonth(5)//0-11
d1.setDate(18)
d1.setTime(19990)


console.log(d1.toLocaleString())
var d1=new Date("2018/12/25")
var d2=new Date()
var dc=d1-d2
console.log(dc)
//把相差的时间转成秒
dc=Math.floor(dc/1000)
//获取相差的天数
var day=Math.floor(dc/(24*60*60))
console.log(day)
//获取天数后相差的小时
var hours=dc%(24*60*60)
hours=Math.floor(hours/(60*60))
console.log(hours)
//获取分钟
//相差的秒数和一小时的秒数取余
var minutes=dc%(60*60)
minutes=Math.floor(minutes/60)
console.log(minutes)
//秒
var seconds=dc%60
console.log(seconds)
console.log("距离2018年圣诞节还有"+day+"天"+hours+"小时"+minutes+"分钟"+seconds+"秒")*/
var d1=new Date("2021-10-16")
console.log(d1) 
console.log(d1.getDay())
if(d1.getDay()==0){d1.setDate(d1.getDate()-2)}
else if(d1.getDay()==6){d1.setDate(d1.getDate()-1)}
console.log(d1)






