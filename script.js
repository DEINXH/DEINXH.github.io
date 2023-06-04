function addItem(){
    var overlay = document.getElementById("overlay");
    overlay.style.display = "block";
  }
  
function hidePopup(){
    var overlay = document.getElementById("overlay");
    overlay.style.display = "none";
  }


function randomID() {
  var Rand = Math.random()
  var mineId = Math.round(Rand * 100000000)
 document.getElementById("ID").innerHTML = "ID:"+mineId;
}

function dateID(){
  let time= new Date().toISOString();
  var date=/\d{4}-\d{1,2}-\d{1,2}/g.exec(time); /* Remove hours, minutes and seconds */
  document.getElementById("Date").innerHTML = date;
}
  
