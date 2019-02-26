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