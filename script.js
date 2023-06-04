function addItem(){
    var overlay = document.getElementById("overlay");
    overlay.style.display = "block";
  }
  
function hidePopup(){
    var overlay = document.getElementById("overlay");
    overlay.style.display = "none";
  }

  
function iconChange(){
var icons = document.getElementById('icon');
var type= document.getElementById('skinType').value;
icons.className=type
}



const form=document.getElementById('inputform')
const cardArea=document.getElementById("cardArea");
const overlay2 = document.querySelector('.overlay2');
const infoCard = document.querySelector('.infoCard');

inputform.addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  
  const name= document.getElementById('skinName').value;
  const type= document.getElementById('skinType').value;
  const bos= document.querySelector('input[name="BOS"]:checked').value;
  const skinValue= document.getElementById('Value').value;
  const note= document.getElementById('note').value;
  const id = Date.now()
  const time = new Date().toISOString();
  const date = /\d{4}-\d{1,2}-\d{1,2}/g.exec(time); /* Remove hours, minutes and seconds */
  console.log(form.elements)
  

  var logo='';
  logo=type+'Round';

  const itemCard = document.createElement('div');
  itemCard.className = 'itemCard';
  
  const cardTitle = document.createElement('div');
  cardTitle.className = 'cardTitle'+bos;
  cardTitle.innerHTML= bos;
  itemCard.appendChild(cardTitle)

  const cardContent = document.createElement('div');
  cardContent.className='cardContent';
  cardContent.innerHTML = `<h2> ${name}</h2><h2> ${skinValue}$</h2><img class=${logo}>`
  itemCard.appendChild(cardContent)
  

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML=`<i class="delete"></i>`;
  itemCard.appendChild(deleteButton);



  cardArea.appendChild(itemCard)

  cardTitle.addEventListener('click', function() {
  
  const infoTitle = document.createElement('div');
  infoTitle.className = 'cardTitle'+bos;
  infoTitle.innerHTML= '<p>Details</p> <button class="closebtn"  onclick="hidePopup()">×</button>';
  const detail = document.createElement('div');
  detail.className='detail'
  detail.innerHTML=`<div class= infocontent><div class="basicinfo"><p> Name: ${name}</p><br><br><p> Skin Type: ${type}</p><br><br><p> Buy or sell: ${bos}</div> <div class="infovalue"> <h2> Skin value:${skinValue}$</h2></div> <div class="detailinfo"></p> <img class=${logo}>  <p>ID:<br>${id}</p> <br> <p>Creation Date:<br>${date}</p></div> <div class="noteinfo"><p>Note <div class="notecontent">${note}</div></p></div></div> `;
  infoCard.innerHTML=''
  infoCard.appendChild(infoTitle);
  infoCard.appendChild(detail);
  overlay2.style.display="block"
  
  const closebtn = document.querySelector('.closebtn')

  closebtn.addEventListener('click', function() {
   overlay2.style.display="none"
  })

  
  });
  
  

  deleteButton.addEventListener('click', function() {
    var msg = "Are you sure to delete this?";
   if (confirm(msg)==true){
      alert('Deleted');
      itemCard.remove();
      return true;
  }else{
      alert('Canceled');
      return false;
  }
  });

  form.reset();

/*
(old version of creating a item card, really bad to use!)

  var itemCardHTML ='<div class="itemCard">';
  itemCardHTML += '<div class="cardTitle'+bos+'">';
  itemCardHTML += bos;
  itemCardHTML +='</div>';
  itemCardHTML +='<h2>'+name+'</h2>';
  itemCardHTML +='<h3>'+skinValue+'$'+'</h3>';
  itemCardHTML += '<img class="'+ logo +'">';
  itemCardHTML += '<button  onclick="deleteItem()"class="deleteButton"><i class="delete"></i></button>';
  itemCardHTML += '</div>'
  
*/
  

var overlay = document.getElementById("overlay");
overlay.style.display = "none";
})



