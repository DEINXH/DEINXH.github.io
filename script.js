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

  
  var logo='';
  logo=type+'Round';

  var itemCard ='<div class="itemCard">';
  itemCard += '<div class="cardTitle'+BOS+'">';
  itemCard += BOS ;
  itemCard +='</div>';
  itemCard +='<h2>'+name+'</h2>';
  itemCard +='<h3>'+skinValue+'$'+'</h3>';
  itemCard += '<img class="'+ logo +'">';
  itemCard += '<button class="deleteButton"><i class="delete"></i></button>';
  itemCard += '</div>'
  
  var cardTitle = document.querySelectorAll('.cardTitle');

 


  var cardArea=document.getElementById("cardArea");
  cardArea.innerHTML+=itemCard;

  var overlay = document.getElementById("overlay");
overlay.style.display = "none";
})


