// Questionaire
resultsTrack=0;
var radiosRef = document.getElementById('answers');
var checked;
function nextPage(myurl){
    var radios = document.getElementsByName('test');
    checked = false;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            checked = true;
            break;
        }
    }
    if(!checked){
        alert('Please select an option');
    }
    else{
        if(!myurl.localeCompare('signed_results.html')){
            resultsTrack=1;
        }
        window.location = myurl;
    }
}

var modal;
var spanTrack;
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];
var span4 = document.getElementsByClassName("close")[3];
var span5 = document.getElementsByClassName("close")[4];

function sel(myModal){
    modal = document.getElementById(myModal);
    modal.style.display = "block";
    spanTrack=myModal;
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal.style.display = "none";
}

span2.onclick = function() {
    modal.style.display = "none";
  }
  span3.onclick = function() {
    modal.style.display = "none";
  }
  span4.onclick = function() {
    modal.style.display = "none";
  }
  span5.onclick = function() {
    modal.style.display = "none";
  }

function cls(clsRef){
    clsRef.style.display="none";
}

name;
pic;
function openUser(myurl,email_id,pass_word){

    if(email_id==""|| pass_word==""){
        alert("Fill all required fields");
    }
    else{
        var e_comp1= email_id.localeCompare("willie@hci.com");
        var p_comp1= pass_word.localeCompare("hci_willie");
        var e_comp2= email_id.localeCompare("wildcat@hci.com");
        var p_comp2= pass_word.localeCompare("hci_wildcat");
        if(!e_comp1&&!p_comp1){
            name="Welcome Willie";
            pic="<img src='images/willie.jpg' alt='profile'>";
            window.location = myurl;
        }
        else if(!e_comp2&&!p_comp2){
            name="Welcome Wildcat";
            pic="<img src='images/wildcat.png' alt='profile'>";
            window.location = myurl;
        }
        else{
            alert("Incorrect email or password");
        }
    }
    
}

function openProf(){
    if(!name.localeCompare("Welcome Willie")){
        window.location = "willie_profile.html";
    }
    else if(!name.localeCompare("Welcome Wildcat")){
        window.location = "wildcat_profile.html";
    }
}
function myFunction(x) {
    if (x.type == "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }


var sleep_index_list=[]
var sleep_i=0;
function logSleep(s_beddate,s_wakedate,s_bedtime,s_waketime){
    if((s_beddate.value=="")||(s_wakedate=="")||(s_bedtime.value =="")||(s_waketime.value=="")){
        alert("Please enter the required details");
    }
    else{
        if (isNaN(sessionStorage.sleepCount)) {
            sessionStorage.sleepCount = 1;
          } else {
            sessionStorage.sleepCount = Number(sessionStorage.sleepCount)+1;
          }
          if (sessionStorage.sleep_content==null) {
            var timeStart = new Date(s_beddate.value+" "+ s_bedtime.value).getTime();
            var timeEnd = new Date(s_wakedate.value+" "+s_waketime.value).getTime();
            var no_millisecs = timeEnd - timeStart;

            var no_secs = Math.ceil((no_millisecs / 1000) % 60) ;
            var no_mins = Math.ceil((no_millisecs / (1000*60)) % 60);
            var no_hrs  = Math.ceil((no_millisecs / (1000*60*60)) % 24);
            sessionStorage.sleep_content = "<div>"+s_wakedate.value+"| Sleep Duration: "+no_hrs+"hrs "+no_mins+"mins "+no_secs+"secs</div>";
          } else {
            var timeStart = new Date(s_beddate.value+" "+ s_bedtime.value).getTime();
            var timeEnd = new Date(s_wakedate.value+" "+s_waketime.value).getTime();
            var no_millisecs = timeEnd - timeStart;
            var no_secs = Math.ceil((no_millisecs / 1000) % 60) ;
            var no_mins = Math.ceil((no_millisecs / (1000*60)) % 60);
            var no_hrs  = Math.ceil((no_millisecs / (1000*60*60)) % 24);
            sessionStorage.sleep_content += "<div>"+s_wakedate.value+"| Sleep Duration: "+no_hrs+"hrs "+no_mins+"mins "+no_secs+"secs</div>";
          }
         
          document.getElementById('sleep_history').innerHTML=sessionStorage.sleep_content;
        document.getElementById('sleep_history').style.display="block";
        alert("Sleep time have been logged")
    }
}

function logNap(n_date,n_bedtime,n_waketime){
    if((n_date.value=="")||(n_bedtime.value=="")||(n_waketime.value=="")){
        alert("Please enter the required details")
    }
    else{
        if (isNaN(sessionStorage.napCount)) {
            sessionStorage.napCount = 1;
          } else {
            sessionStorage.napCount = Number(sessionStorage.napCount)+1;
          }
    
          if (sessionStorage.nap_content==null) {
            var timeStart = new Date(n_date.value+" "+ n_bedtime.value).getTime();
            var timeEnd = new Date(n_date.value+" "+n_waketime.value).getTime();
            var no_millisecs = timeEnd - timeStart;
            var no_secs = Math.ceil((no_millisecs / 1000) % 60) ;
            var no_mins = Math.ceil((no_millisecs / (1000*60)) % 60);
            var no_hrs  = Math.ceil((no_millisecs / (1000*60*60)) % 24);
            sessionStorage.nap_content = "<div>"+n_date.value+"| Nap Duration: "+no_hrs+"hrs "+no_mins+"mins "+no_secs+"secs</div>";
          
          } else {
            var timeStart = new Date(n_date.value+" "+ n_bedtime.value).getTime();
            var timeEnd = new Date(n_date.value+" "+n_waketime.value).getTime();
            var no_millisecs = timeEnd - timeStart;
            var no_secs = Math.ceil((no_millisecs / 1000) % 60) ;
            var no_mins = Math.ceil((no_millisecs / (1000*60)) % 60);
            var no_hrs  = Math.ceil((no_millisecs / (1000*60*60)) % 24);
            sessionStorage.nap_content += "<div>"+n_date.value+"| Nap Duration: "+no_hrs+"hrs "+no_mins+"mins "+no_secs+"secs</div>";
          
          }
         
          document.getElementById('nap_history').innerHTML=sessionStorage.nap_content;
        document.getElementById('nap_history').style.display="block";
    }
}

function enterGoal(g_bedtime,g_waketime){
    if((g_bedtime.value=="")||(g_waketime.value=="")){
        alert("Please enter the required details")
    }
    else{
        if (isNaN(sessionStorage.goalCount)) {
            sessionStorage.goalCount = 1;
          index_bedtime="goal_"+sessionStorage.goalCount+"_bedtime";
          index_waketime="goal_"+sessionStorage.goalCount+"_waketime";
          sessionStorage.index_bedtime = g_bedtime.value;
          sessionStorage.index_waketime = g_waketime.value;

          sessionStorage.goal_content = "<div>Goal set: "+tConv24(sessionStorage.index_bedtime)+" to "+tConv24(sessionStorage.index_waketime)+"<br/>Your reminder to bedtime is set.</div>";
          } else {
            alert("Goal already entered")
          }
          document.getElementById('goal_entered').innerHTML=sessionStorage.goal_content;

        document.getElementById('goal_entered').style.display="block";
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

function close_d(){
document.getElementById('stats_modal').style.display="none"
}

function showStats(){
    if(sessionStorage.sleepCount==null||sessionStorage.goalCount==null){
        alert("Enter all details to view the statistics");
    }
    else{

        var content;
        index_bedtime="goal_1_bedtime";
          index_waketime="goal_1_waketime";
        var timeStart = new Date("2019-03-11 "+sessionStorage.index_bedtime).getTime();
          var timeEnd = new Date("2019-03-12 "+sessionStorage.index_waketime).getTime();
          var no_millisecs = timeEnd - timeStart;
          var no_hrs  = Math.ceil((no_millisecs / (1000*60*60)) % 24);
          if(no_hrs>7.5||no_hrs==7.5){
            content="<span class='close' onclick='close_d()'>&times;</span>"+
            "<h3 style='margin-left:40px;'>Sleep Duration</h3>"+
            "<img style='width:400px;height:300px;float:left;margin-left:40px;'src='images/sleep_stats.jpg'/>"+
            "<div style='float:left;margin:41% 20px 0 -400px;width:210px;border:1px solid black;border-radius:7%;padding:10px;'>"+
            "<h3>Average Hours of Sleep:</h3>7.5 hours</div>"+
            "<div style='float:left;margin: 41% 50px 0 -150px;width:210px;border:1px solid black;border-radius:7%;padding:10px;'>"+
            "<h3>Goal:</h3>"+no_hrs+" hours</div>"+
            "<div style='float:left;margin: 41% 0 0 -10px;width:210px;border:1px solid black;border-radius:7%;padding:10px;'>"+
            "<h3>Sleep in deficit by:</h3>"+Math.abs(no_hrs-7.5)+" hours </div>"+
            "<button onclick='next_stats()' style='float:right;background-color:rgb(191, 144, 0);color:white;border-radius:5px;padding:5px;cursor:pointer;margin-top:15px;width:100px;'>Next</button>";
          }
          else{
            content="<span class='close' onclick='close_d()'>&times;</span>"+
            "<h3 style='margin-left:40px;'>Sleep Duration</h3>"+
            "<img style='width:400px;height:300px;float:left;margin-left:40px;'src='images/sleep_stats.jpg'/>"+
            "<div style='float:left;margin:41% 20px 0 -400px;width:210px;border:1px solid black;border-radius:7%;padding:10px;'>"+
            "<h3>Average Hours of Sleep:</h3>7.5 hours</div>"+
            "<div style='float:left;margin: 41% 50px 0 -150px;width:210px;border:1px solid black;border-radius:7%;padding:10px;'>"+
            "<h3>Goal:</h3>"+no_hrs+" hours</div>"+
            "<div style='float:left;margin: 41% 0 0 -10px;width:210px;border:1px solid black;border-radius:7%;padding:10px;'>"+
            "<h3>Sleep in excess by:</h3>"+Math.abs(no_hrs-7.5)+" hours </div>"+
            "<button onclick='next_stats()' style='float:right;background-color:rgb(191, 144, 0);color:white;border-radius:5px;padding:5px;cursor:pointer;margin-top:15px;width:100px;'>Next</button>";
          }

        document.getElementById('stats-content').innerHTML=content;
        document.getElementById('stats_modal').style.display="block";


    }

}
function next_stats(){
  index_bedtime="goal_1_bedtime";
  index_waketime="goal_1_waketime";
  content="<span class='close' onclick='close_d()'>&times;</span>"+
  "<div style='float:left;margin-left:40px;'><h3>Bedtime Stats</h3>"+
  "<img style='width:310px;height:220px;'src='images/bedtime_stats.jpg'/>"+
  "<div style='width:210px;border:1px solid black;border-radius:7%;padding:10px;margin-top:13%;'>"+
  "<h3>Goal Bedtime:</h3>"+tConv24(sessionStorage.index_bedtime)+"</div></div>"+

  "<div style='float:left;margin-left:85px;'><h3>Waketime Stats</h3>"+
  "<img style='width:310px;height:220px;'src='images/waketime_stats.jpg'/>"+
  "<div style='width:210px;border:1px solid black;border-radius:7%;padding:10px;margin-top:13%;'>"+
  "<h3>Goal Waketime:</h3>"+tConv24(sessionStorage.index_waketime)+"</div></div>"+

  "<button onclick='showStats()' style='float:right;background-color:rgb(191, 144, 0);color:white;border-radius:5px;padding:5px;cursor:pointer;margin-top:82.5px;width:100px;'>Back</button>";
document.getElementById('stats-content').innerHTML=content;
}
function signOut(myURL){
    sessionStorage.clear();
window.location=myURL;
}
