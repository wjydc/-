// 日历

// 日历框默认值
function clander(ele,Dateformat){
        var date = new Date();
        this.year = date.getFullYear();
        var months = date.getMonth() + 1;
        this.month=months <10 ? "0" + months : months;
        this.date = date.getDate();
        // this.day = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六")[date.getDay()];
        this.hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        this.minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        this.second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        var currentTime;
        if(Dateformat=='yyyy-MM-dd HH:mm:ss'){
          currentTime =this.year + "-" + this.month + "-" + this.date + " " +  +this.hour + ":" + this.minute+":"+this.second;
        }
        if(Dateformat=='yyyy-MM-dd HH:mm'){
          currentTime =this.year + "-" + this.month + "-" + this.date + " " +  +this.hour + ":" + this.minute;
        }
        if(Dateformat=='yyyy-MM-dd'){
          currentTime =this.year + "-" + this.month + "-" + this.date;
        }
        if(Dateformat=='yyyy-MM'){
          currentTime =this.year + "-" + this.month;
        }
       $(ele).val(currentTime);
   
      
  } 
// clander()