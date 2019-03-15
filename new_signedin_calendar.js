// Activities
var event_date;
var event_time;
var s_no;
var c;
var modal;
var span=document.getElementsByClassName("close")[0];
var eventName=["Art Institute of Chicago","Ice Skating in Millenium Park","Garfield Park Conservatory","Escape Room","Open Studio at Bridgeport Art Center"];
var eventCost=["Free with Wildcard","Free admission, Skate Rentals: $12-14","Free (donation recommended)","$32.95","Free"];
var eventAddress=["111 S Michigan Ave, Chicago, IL"," 1 N Michigan Ave, Chicago, IL","300 N Central Park Ave, Chicago, IL","1820 Davis St Suite 151, Evanston, IL","1200 W 35th St, Chicago, IL"];
var date;

var Cal=function(divId) {

  this.divId=divId;
  this.Months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
  'September', 'October', 'November', 'December' ];

  this.Weekdays=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

  date=new Date();
  this.today_month=date.getMonth();
  this.today_year=date.getFullYear();
  this.today=date.getDate();

};

Cal.prototype.prevMon=function(event_date,event_time) {
  if ( this.today_month == 0 ) {
    this.today_month=11;
    this.today_year=this.today_year-1;
  }
  else {
    this.today_month=this.today_month-1;
  }
  this.current(event_date,event_time);
};


Cal.prototype.current=function(event_date,event_time) {
  this.showMonth(this.today_year, this.today_month, event_date,event_time);
};

Cal.prototype.nxtMon=function(event_date,event_time) {
  if ( this.today_month == 11 ) {
    this.today_month=0;
    this.today_year=this.today_year+1;
  }
  else {
    this.today_month=this.today_month+1;
  }
  this.current(event_date,event_time);
};

Cal.prototype.showMonth=function(y, m,da,t) {
  var d=new Date()
  , last_day_o_mon= new Date(y, m+1, 0).getDate()
  , first_day_o_mon=new Date(y, m, 1).getDay()
  , last_day_lmon=m == 0 ? new Date(y-1, 11, 0).getDate() : new Date(y, m, 0).getDate();

  var html='<table style="border:none;margin-top:-40px;">';
  html+='<thead><tr>';
  html+='<td colspan="7">'+this.Months[m]+' '+y+'</td>';
  html+='</tr></thead>';

  html+='<tr class="days">';
  for(var i=0; i < this.Weekdays.length;i++) {
    html+='<td>'+this.Weekdays[i]+'</td>';
  }
  html+='</tr>';
  var i=1;
  do {
    var day_o_w=new Date(y, m, i).getDay();

    if ( day_o_w == 0 ) {
      html+='<tr>';
    }
    else if ( i == 1 ) {
      html+='<tr>';
      var k=last_day_lmon-first_day_o_mon+1;
      for(var j=0; j < first_day_o_mon; j++) {
        html+='<td class="not-current">'+""+'</td>';
        k++;
      }
    }
    var chk=new Date();
    var chk_yr=chk.getFullYear();
    var chk_mon=chk.getMonth();
      if(da==0){
      if (chk_yr == this.today_year&&chk_mon == this.today_month&&i == this.today) {
        html+='<td class="today">'+i+'</td>';}
        else {
          html+='<td class="normal">'+i+'</td>';
        }
      }
      else{       
        d=new Date(da)
        last_day_lmon_1=m == 0 ? new Date(d.getFullYear(), 11, 0).getDate() : new Date(d.getFullYear(), d.getMonth()+1, 0).getDate();
        var eD;
        var eM;
        if(last_day_lmon_1-d.getDate()==0){
          eD=1;
        }
        else{
          eD=d.getDate()+1;
        }
        eM=d.getMonth();
        var eY=d.getFullYear();
        var today=chk_yr == this.today_year&&chk_mon == this.today_month&&i == this.today;
        var event=eD == i&&eM == m&&eY == y;
        var mixed=today&&event;
        if(mixed){
          html+='<td class="mixed">'+i+'</td>';
        }
        else{
          if (today) {
            html+='<td class="today">'+i+'</td>';}
            else if(event){
                  html+='<td > <button class="event" onclick="view_details()">'+i+'</button> </td>';
 
                }
            else {
              html+='<td class="normal">'+i+'</td>';
            }
        }

      }
    if ( day_o_w == 6 ) {
      html+='</tr>';
    }
    i++;
  }while(i <= last_day_o_mon);
  html+='</table>';
  document.getElementById(this.divId).innerHTML=html;
};


window.onload=function() {

  c=new Cal("divCal");
  event_date=0;
  event_time=0;   
  c.current(event_date,event_time);

  getId('btnNext').onclick=function() {
    c.nxtMon(event_date,event_time);
  };
  getId('btnPrev').onclick=function() {
    c.prevMon(event_date,event_time);
  };
}

function getId(id) {
  return document.getElementById(id);
}

function addCal(sno){
  s_no =sno;
  event_date=document.getElementById('event_date'+sno).value;
  event_time=document.getElementById('event_time'+sno).value;
  if(event_date=="")
  {
    alert("Please enter date");
  }
  else if(event_time=="")
  {
    alert("Please enter time")
  }
  else{
    var monthname=new Array("01","02","03","04","05","06","07","08","09","10","11","12");
    var date= new Date(event_date);
    var curr=new Date();
    var curr_date = curr.getFullYear()+"-"+monthname[curr.getMonth()]+"-"+curr.getDate();
    var curr1 = new Date(curr_date);
    var curr_time=curr.getHours()+":"+curr.getSeconds()
    var date_ms =date.getTime();
    var curr_ms=curr1.getTime();

    if(date_ms < curr_ms|| (date_ms == curr_ms&&event_time < curr_time)){
      alert("Invalid Entry")
    }
    else{
      if(s_no==1){
        var start= "10:30";
        var end="16:30";
        if(event_time > start&&event_time< end){
          c.current(event_date,event_time);
          alert("Event added!")
          modal=document.getElementById("myModal"+s_no);
          modal.style.display="none";
        }

        else{
          alert("The activity is not available at the choosen time.")
        }
      }

      else if(s_no==2){
        var startTime1= "12:00";
        var endTime1="19:30";
        var startTime2= "12:00";
        var endTime2="21:30";
        var startTime3= "10:00";
        var endTime3="20:30";
        var sch1=date.getDay()>=0&&date.getDay()<4&&event_time>startTime1&&event_time<endTime1;
        var sch2=date.getDay()==4&&event_time>startTime2&&event_time<endTime2;
        var sch3=(date.getDay()==5||date.getDay()==6)&&event_time>startTime3&&event_time<endTime3;
        if(sch1||sch2||sch3){
          c.current(event_date,event_time);
          alert("Event added!")
          modal=document.getElementById("myModal"+s_no);
          modal.style.display="none";
        }

        else{
          alert("The activity is not available at the choosen time.")
        }
      }

      else if(s_no==3){
        var startTime1= "09:00";
        var endTime1="16:30";
        var startTime2= "09:00";
        var endTime2="19:30";
        
        var sch1=date.getDay()!=2&&event_time>startTime1&&event_time<endTime1;
        var sch2=date.getDay()==2&&event_time>startTime2&&event_time<endTime2;
  
        if(sch1||sch2){
          c.current(event_date,event_time);
          alert("Event added!")
          modal=document.getElementById("myModal"+s_no);
          modal.style.display="none";
        }

        else{
          alert("The activity is not available at the choosen time.")
        }
      }

      else if(s_no==4){
        var start= "10:00"
        var end="22:30"
        if(event_time > start&&event_time< end){
          c.current(event_date,event_time);
          alert("Event added!")
          modal=document.getElementById("myModal"+s_no);
          modal.style.display="none";
        }

        else{
          alert("The activity is not available at the choosen time.")
        }
      }

      else if(s_no==5){
        var startTime1= "07:00";
        var endTime1="21:30";

        var sch1=date.getDay()==5&&date.getDate()+1 > 14&& date.getDate()+1< 22 &&event_time>startTime1&&event_time<endTime1;

        if(sch1){
          c.current(event_date,event_time);
          alert("Event added!")
          modal=document.getElementById("myModal"+s_no);
          modal.style.display="none";
        }

        else{
          alert("The activity is not available at the choosen time.")
        }
      }

    }
    
  }
}

function tConv24(time24) {
  var ts = time24;
  var H = +ts.substr(0, 2);
  var h = (H % 12) || 12;
  h = (h < 10)?("0"+h):h;  // leading 0 at the left for 1 digit hours
  var ampm = H < 12 ? " AM" : " PM";
  ts = h + ts.substr(2, 3) + ampm;
  return ts;
}

// When the user clicks on <span> (x), close the modal
function close_d() {
  document.getElementById("details"+s_no).style.display="none";
}

function view_details(){
  var content;
  if (eventName[s_no-1] == "Ice Skating in Millenium Park") {
  	content="<span class='close' onclick='close_d()'>&times;</span>Event Added<br/><h3>"+eventName[s_no-1]+"</h3><br/>"+eventCost[s_no-1]+"<br/>"+event_date+"<br/>"+tConv24(event_time)+"<br/>"+eventAddress[s_no-1]+"<br/></br><button style='width:100px;' onclick=\"window.open('https://www.chicago.gov/city/en/depts/dca/supp_info/millennium_park10.html', '_blank')\">Get Tickets!</button>";
  	document.getElementById("details-content"+s_no).innerHTML=content;
  }
  else if (eventName[s_no-1] == "Escape Room") {
  	content="<span class='close' onclick='close_d()'>&times;</span>Event Added<br/><h3>"+eventName[s_no-1]+"</h3><br/>"+eventCost[s_no-1]+"<br/>"+event_date+"<br/>"+tConv24(event_time)+"<br/>"+eventAddress[s_no-1]+"<br/></br><button style='width:100px;' onclick=\"window.open('https://www.lockedchicago.com', '_blank')\">Get Tickets!</button>";
  	document.getElementById("details-content"+s_no).innerHTML=content;
  }
  else {
  	content="<span class='close' onclick='close_d()'>&times;</span>Event Added<br/><h3>"+eventName[s_no-1]+"</h3><br/>"+eventCost[s_no-1]+"<br/>"+event_date+"<br/>"+tConv24(event_time)+"<br/>"+eventAddress[s_no-1];
  	document.getElementById("details-content"+s_no).innerHTML=content;
  }
  document.getElementById("details"+s_no).style.display="block";
}


