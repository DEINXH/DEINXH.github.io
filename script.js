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
  
function iconChange(){
var icons = document.getElementById('icon');
var type= document.getElementById('skinType').value;
icon.className=type
}


const form=document.getElementById('inputform')

inputform.addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  var name= document.getElementById('skinName').value;
  var type= document.getElementById('skinType').value;
  var BOS= document.querySelector('input[name="BOS"]:checked').value;
  var skinValue= document.getElementById('Value').value;
  var note= document.getElementById('note').value;
  var id = document.getElementById('ID').value;
  var date = document.getElementById('Date').value;
  
  

  var logo="";
  if(type==='gun'){
    logo='<img src="./icon/gun.png" style="width:50px;height:auto;>'
  }else if(type==='knife'){
    logo='<img src="./icon/knife.png" style="width:50px;height:auto;>'
  }else if(type==='glove'){
    logo='<img src="./icon/glove.png" style="width:50px;height:auto;>'
  }

  
  var itemCard ;
})