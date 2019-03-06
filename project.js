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

function logSleep(s_date,s_bedtime,s_waketime){
    if((s_date.value=="")||(s_bedtime.value =="")||(s_waketime.value=="")){
        alert("Please enter the required details");
    }
    else{
        if (isNaN(sessionStorage.sleepCount)) {
            sessionStorage.sleepCount = 1;
          } else {
            sessionStorage.sleepCount = Number(sessionStorage.sleepCount)+1;
          }
          index_date="sleep_"+sessionStorage.sleepCount+"_date";
          index_bedtime="sleep_"+sessionStorage.sleepCount+"_bedtime";
          index_waketime="sleep_"+sessionStorage.sleepCount+"_waketime";
          sessionStorage.index_date = s_date.value;
          sessionStorage.index_bedtime = s_bedtime.value;
          sessionStorage.index_waketime = s_waketime.value;
          if (sessionStorage.sleep_content==null) {
            sessionStorage.sleep_content = "<div>"+sessionStorage.sleepCount+". Date: "+s_date.value+
            "<br/>Sleeping hours: "+s_bedtime.value+" to "+s_waketime.value+"</div>";
          } else {
            sessionStorage.sleep_content += "<div>"+sessionStorage.sleepCount+". Date: "+s_date.value+
            "<br/>Sleeping hours: "+s_bedtime.value+" to "+s_waketime.value+"</div>";
          }
         
          document.getElementById('sleep_history').innerHTML=sessionStorage.sleep_content;
        document.getElementById('sleep_history').style.display="block";
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
    
          index_date="nap_"+sessionStorage.napCount+"_date";
          index_bedtime="nap_"+sessionStorage.napCount+"_bedtime";
          index_waketime="nap_"+sessionStorage.napCount+"_waketime";
          sessionStorage.index_date = n_date.value;
          sessionStorage.index_bedtime = n_bedtime.value;
          sessionStorage.index_waketime = n_waketime.value;
          if (sessionStorage.nap_content==null) {
            sessionStorage.nap_content = "<div>"+sessionStorage.napCount+". Date: "+n_date.value+
            "<br/>Nap hours: "+n_bedtime.value+" to "+n_waketime.value+"</div>";
          } else {
            sessionStorage.nap_content += "<div>"+sessionStorage.napCount+". Date: "+n_date.value+
            "<br/>Nap hours: "+n_bedtime.value+" to "+n_waketime.value+"</div>";
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
          sessionStorage.goal_content = "<div>Goal: "+g_bedtime.value+" to "+g_waketime.value+"</div>";
          } else {
            alert("Goal already entered")
          }
          document.getElementById('goal_entered').innerHTML=sessionStorage.goal_content;
        document.getElementById('goal_entered').style.display="block";
    }
}

function showStats(myModal){
    if(sessionStorage.sleepCount==null||sessionStorage.goalCount==null){
        alert("Enter all details to view the statistics");
    }
    else{
        //content= (Content of the stats popup)
        //document.getElementById('statistics').innerHTML=content
        modal = document.getElementById(myModal);
        modal.style.display = "block";

    }

}

function signOut(myURL){
    sessionStorage.clear();
window.location=myURL;
}