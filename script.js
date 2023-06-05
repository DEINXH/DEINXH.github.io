 /* display the inputform popup*/
function addItem(){
    var overlay = document.getElementById("overlay");
    overlay.style.display = "block";
  }
  
  /*  hide the inputform popup by clicking the cancelBtn*/
function hidePopup(){
    var overlay = document.getElementById("overlay");
    overlay.style.display = "none";
  }

  /* Icon change function according to user's choice */
function iconChange(){
var icons = document.getElementById('icon');
var type= document.getElementById('skinType').value;
icons.className=type
}


/* DOM process*/
const form=document.getElementById('inputform')
const cardArea=document.getElementById("cardArea");
const overlay2 = document.querySelector('.overlay2');
const infoCard = document.querySelector('.infoCard');

let cards = []; // store the data of cards

/* function for making a basic item card*/
function renderCards() {

  cardArea.innerHTML = ''; //clear the card area
  for (const card of cards) {
    const { id, name, type, bos, skinValue, note, date } = card;

    const logo = type + 'Round';

    //create card
    const itemCard = document.createElement('div');
    itemCard.className = 'itemCard';
    
    //create card header
    const cardTitle = document.createElement('div');
    cardTitle.className = 'cardTitle' + bos;
    cardTitle.innerHTML = bos;
    itemCard.appendChild(cardTitle);
    
    //create card content
    const cardContent = document.createElement('div');
    cardContent.className = 'cardContent';
    cardContent.innerHTML = `<h2>${name}</h2><h2>${skinValue}$</h2><img class="${logo}">`;
    itemCard.appendChild(cardContent);
   
    //create delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = `<i class="delete"></i>`;
    itemCard.appendChild(deleteButton);
    
    //Add the generated card to the card area
    cardArea.appendChild(itemCard);
    
    
    //click the card header to see the infocard popup
    cardTitle.addEventListener('click', function() {
      const infoTitle = document.createElement('div');
      infoTitle.className = 'infoTitle' + bos;
      infoTitle.innerHTML = '<p>Details</p><button class="closebtn">×</button>';
      const detail = document.createElement('div');
      detail.className = 'detail';
      detail.innerHTML = `<div class=infocontent><div class="basicinfo"><p>Name: ${name}</p><br><br><p>Skin Type: ${type}</p><br><br><p>Buy or sell: ${bos}</p></div><div class="infovalue"><h2>Skin value: ${skinValue}$</h2></div><div class="detailinfo"><img class="${logo}"><p>ID:<br>${id}</p><br><p>Creation Date:<br>${date}</p></div><div class="noteinfo"><p>Note <div class="notecontent">${note}</div></p></div></div>`;
      infoCard.innerHTML = '';
      infoCard.appendChild(infoTitle);
      infoCard.appendChild(detail);
      overlay2.style.display = 'block';
      
      const closebtn = document.querySelector('.closebtn');
      
      //click close button to close the info card popup
      closebtn.addEventListener('click', function() {
        overlay2.style.display = 'none';
      });
    });
    

    //click the delete button to delete the relative card from the database and local storage; send confirm message through the browser
    deleteButton.addEventListener('click', function() {
      var msg = 'Are you sure to delete this?';
      if (confirm(msg) == true) {
        alert('Deleted');
        const cardIndex = cards.findIndex(card => card.id === id);
        cards.splice(cardIndex, 1);
        saveCardsToLocalStorage();
        itemCard.remove();
        return true;
      } else {
        alert('Canceled');
        return false;
      }
    });
  }
}

// save the card data to localstorage
function saveCardsToLocalStorage() {
  localStorage.setItem('cards', JSON.stringify(cards));
}

// fetch data from local storage for submission
function loadCardsFromLocalStorage() {
  if (localStorage.getItem('cards')) {
    cards = JSON.parse(localStorage.getItem('cards'));
    renderCards();
  }
}

//submit the form
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('skinName').value;
  const type = document.getElementById('skinType').value;
  const bos = document.querySelector('input[name="BOS"]:checked').value;
  const skinValue = document.getElementById('Value').value;
  const note = document.getElementById('note').value;
  const id = Date.now();
  const time = new Date().toISOString();
  const date = /\d{4}-\d{1,2}-\d{1,2}/g.exec(time); /* Remove hours, minutes, and seconds */

  const card = {
    id,
    name,
    type,
    bos,
    skinValue,
    note,
    date
  };
  
  //save the relatve data to local storage and use renderCards() function to generate the itemcard
  cards.push(card);
  saveCardsToLocalStorage();
  renderCards();

  //clear the inputform
  form.reset();

  //hide the additem popup
  var overlay = document.getElementById("overlay");
  overlay.style.display = "none";
});

// Loading data from local storage when the web page is loaded
loadCardsFromLocalStorage();


