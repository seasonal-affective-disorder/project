// Questionaire

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
        window.location = myurl;
    }
}

// Activities

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

