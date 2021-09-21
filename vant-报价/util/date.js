//获取当前日期
 const dates = { 
	getCurrentDate(){
   var date=new Date();
    var year=date.getFullYear();
    var month=date.getMonth()+1;
   var day=date.getDate();
    return year+"-"+this.formatZero(month)+"-"+this.formatZero(day);
 }
 ,
 //格式化日期时间
  formatZero(n){
     if(n>=0&&n<=9){
          return "0"+n;
     }else{
          return n;
     }
  }
 }
 module.exports = dates