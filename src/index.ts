//Brownie Modal 
//öffnen
const brownieButton=document.getElementById('bButton') as HTMLElement;
brownieButton.addEventListener('click', openBrownieBox);
  
function openBrownieBox(){
    const modalBrownie=document.getElementById('bRezeptBox') as HTMLElement;
    modalBrownie.style.display='block';
  }

//schließen
 const closeButtonB = document.getElementById('closeBModal') as HTMLElement;
 closeButtonB.addEventListener('click', closeBrownieModal);

 function closeBrownieModal(){
  const modalBrownie=document.getElementById('bRezeptBox') as HTMLElement;
  modalBrownie.style.display='none';
 }


//russischer Zupfkuchen Modal 
//öffnen
const zupfkuchenButton = document.getElementById('rzButton') as HTMLElement;
zupfkuchenButton.addEventListener('click', openZupfkuchenBox);

function openZupfkuchenBox(){
  const modalZupfkuchen = document.getElementById('RzRezeptBox') as HTMLElement;
  modalZupfkuchen.style.display='block';
}

//schließen
const closeButtonRz = document.getElementById('closeRzModal') as HTMLElement;
closeButtonRz.addEventListener('click', closeRzModal);

function closeRzModal(){
 const modalRz=document.getElementById('RzRezeptBox') as HTMLElement;
 modalRz.style.display='none';
}


//Erdbeerkuchen Modal öffnen
const erdbeerkuchenButton = document.getElementById('ekButton') as HTMLElement;
erdbeerkuchenButton.addEventListener('click', openErdbeerkuchenBox);

function openErdbeerkuchenBox(){
  const modalErdbeerkuchen = document.getElementById('EkRezeptBox') as HTMLElement;
  modalErdbeerkuchen.style.display='block';
}

//schließen
const closeButtonEk = document.getElementById('closeEkModal') as HTMLElement;
closeButtonEk.addEventListener('click', closeEkModal);

function closeEkModal(){
 const modalEk=document.getElementById('EkRezeptBox') as HTMLElement;
 modalEk.style.display='none';
}