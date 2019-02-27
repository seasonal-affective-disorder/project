// Activities
var event_date;
var event_time;
var s_no;
var c;
var modal;
var span = document.getElementsByClassName("close")[0];
var eventName=["Art Institute of Chicago","Ice Skating in Millenium Park","Garfield Park Conservatory","Escape Room","Open Studio at Bridgeport Art Center"];
var eventCost=["Free with Wildcard","Free admission, Skate Rentals: $12-14","Free (donation recommended)","$32.95","Free"];
var eventAddress=["111 S Michigan Ave, Chicago, IL"," 1 N Michigan Ave, Chicago, IL","300 N Central Park Ave, Chicago, IL","1820 Davis St Suite 151, Evanston, IL","1200 W 35th St, Chicago, IL"];

var Cal = function(divId) {


  this.divId = divId;

  this.DaysOfWeek = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
  ];

  this.Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];


  var d = new Date();
  this.currMonth = d.getMonth();
  this.currYear = d.getFullYear();
  this.currDay = d.getDate();

};


Cal.prototype.nextMonth = function(event_date,event_time) {
  if ( this.currMonth == 11 ) {
    this.currMonth = 0;
    this.currYear = this.currYear + 1;
  }
  else {
    this.currMonth = this.currMonth + 1;
  }
  this.showcurr(event_date,event_time);
};

Cal.prototype.previousMonth = function(event_date,event_time) {
  if ( this.currMonth == 0 ) {
    this.currMonth = 11;
    this.currYear = this.currYear - 1;
  }
  else {
    this.currMonth = this.currMonth - 1;
  }
  this.showcurr(event_date,event_time);
};


Cal.prototype.showcurr = function(event_date,event_time) {
  this.showMonth(this.currYear, this.currMonth, event_date,event_time);
};


Cal.prototype.showMonth = function(y, m,da,t) {
  var d = new Date()

  , firstDayOfMonth = new Date(y, m, 1).getDay()

  , lastDateOfMonth =  new Date(y, m+1, 0).getDate()

  , lastDayOfLastMonth = m == 0 ? new Date(y-1, 11, 0).getDate() : new Date(y, m, 0).getDate();


  var html = '<table style="border:none;margin-top:-40px;">';

  html += '<thead><tr>';
  html += '<td colspan="7">' + this.Months[m] + ' ' + y + '</td>';
  html += '</tr></thead>';


  html += '<tr class="days">';
  for(var i=0; i < this.DaysOfWeek.length;i++) {
    html += '<td>' + this.DaysOfWeek[i] + '</td>';
  }
  html += '</tr>';
  var i=1;
  do {

    var dow = new Date(y, m, i).getDay();

    if ( dow == 0 ) {
      html += '<tr>';
    }

    else if ( i == 1 ) {
      html += '<tr>';
      var k = lastDayOfLastMonth - firstDayOfMonth+1;
      for(var j=0; j < firstDayOfMonth; j++) {
        html += '<td class="not-current">' + "" + '</td>';
        k++;
      }
    }

 
    var chk = new Date();
    var chkY = chk.getFullYear();
    var chkM = chk.getMonth();
 
      if(da==0){
      if (chkY == this.currYear && chkM == this.currMonth && i == this.currDay) {
        html += '<td class="today">' + i + '</td>';}
        else {
          html += '<td class="normal">' + i + '</td>';
        }
      }
      else{
       
        datee = new Date(da)
        lastDayOfLastMonth_1 = m == 0 ? new Date(datee.getFullYear(), 11, 0).getDate() : new Date(datee.getFullYear(), datee.getMonth()+1, 0).getDate();
        var eD;
        var eM;
        if(lastDayOfLastMonth_1 - datee.getDate()==0){
          eD=1;
        }
        else{
          eD = datee.getDate()+1;
        }
        eM = datee.getMonth();
        var eY = datee.getFullYear();
        var today = chkY == this.currYear && chkM == this.currMonth && i == this.currDay;
        var event = eD == i && eM == m && eY == y;
        var mixed = today && event;
        if(mixed){
          html += '<td class="mixed">' + i + '</td>';
        }
        else{
          if (today) {
            html += '<td class="today">' + i + '</td>';}
            else if(event){
                  html += '<td > <button class="event" onclick="view_details()">'+i+'</button> </td>';
 
                }
            else {
              html += '<td class="normal">' + i + '</td>';
            }
        }

      }


    if ( dow == 6 ) {
      html += '</tr>';
    }


    i++;
  }while(i <= lastDateOfMonth);
  html += '</table>';

  document.getElementById(this.divId).innerHTML = html;
};


window.onload = function() {

  c = new Cal("divCal");
  event_date=0;
  event_time=0;		
  c.showcurr(event_date,event_time);

  getId('btnNext').onclick = function() {
    c.nextMonth(event_date,event_time);
  };
  getId('btnPrev').onclick = function() {
    c.previousMonth(event_date,event_time);
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
    var date =  new Date(event_date);
    var time = new Date(event_time);
    var curr = new Date();
    var date_ms =date.getTime();
    var time_ms = time.getTime();
    var curr_ms = curr.getTime();
    if(date_ms < curr_ms|| (date_ms == curr_ms && time_ms < curr_ms)){
      alert("Invalid Entry")
    }
    else{
      if(s_no==1){
        var start= "10:30";
        var end = "16:30";
        if(event_time > start && event_time< end){
          c.showcurr(event_date,event_time);
          alert("Event added!")
          modal = document.getElementById("myModal"+s_no);
          modal.style.display = "none";
        }

        else{
          alert("The activity is not available")
        }
      }

      else if(s_no==2){
        var startTime1= "12:00";
        var endTime1 = "19:30";
        var startTime2= "12:00";
        var endTime2 = "21:30";
        var startTime3= "10:00";
        var endTime3 = "20:30";
        var sch1 = date.getDay()>=0 && date.getDay()<4 && event_time>startTime1 && event_time<endTime1;
        var sch2 = date.getDay()==4 && event_time>startTime2 && event_time<endTime2;
        var sch3 = (date.getDay()==5||date.getDay()==6) && event_time>startTime3 && event_time<endTime3;
        if(sch1||sch2||sch3){
          c.showcurr(event_date,event_time);
          alert("Event added!")
          modal = document.getElementById("myModal"+s_no);
          modal.style.display = "none";
        }

        else{
          alert("The activity is not available")
        }
      }

      else if(s_no==3){
        var startTime1= "09:00";
        var endTime1 = "16:30";
        var startTime2= "09:00";
        var endTime2 = "19:30";
        
        var sch1 = date.getDay()!=2 && event_time>startTime1 && event_time<endTime1;
        var sch2 = date.getDay()==2 && event_time>startTime2 && event_time<endTime2;
  
        if(sch1||sch2){
          c.showcurr(event_date,event_time);
          alert("Event added!")
          modal = document.getElementById("myModal"+s_no);
          modal.style.display = "none";
        }

        else{
          alert("The activity is not available")
        }
      }

      else if(s_no==4){
        var start= "10:00"
        var end = "22:30"
        if(event_time > start && event_time< end){
          c.showcurr(event_date,event_time);
          alert("Event added!")
          modal = document.getElementById("myModal"+s_no);
          modal.style.display = "none";
        }

        else{
          alert("The activity is not available")
        }
      }

      else if(s_no==5){
        var startTime1= "07:00";
        var endTime1 = "21:30";

        var sch1 = date.getDay()==5 && date.getDate()+1 > 14&& date.getDate()+1< 22 &&event_time>startTime1 && event_time<endTime1;

        if(sch1){
          c.showcurr(event_date,event_time);
          alert("Event added!")
          modal = document.getElementById("myModal"+s_no);
          modal.style.display = "none";
        }

        else{
          alert("The activity is not available")
        }
      }

    }
    
  }
}

function view_details(){
  var content;
  content="<span class='close' onclick='close_d()'>&times;</span>Event Added<br/><h3>"+eventName[s_no-1]+"</h3><br/>"+eventCost[s_no-1]+"<br/>"+event_date+"<br/>"+event_time+"<br/>"+eventAddress[s_no-1];
  document.getElementById("details-content"+s_no).innerHTML=content;
  document.getElementById("details"+s_no).style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function close_d() {
  document.getElementById("details"+s_no).style.display = "none";
}
