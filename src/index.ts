import { bZutatenAnfang, bSchritt1, bSchritt2, bSchritt3, bSchritt4, bSchritt5, rzZutatenAnfang, rzSchritt1, rzSchritt2, rzSchritt3, rzSchritt4, ekZutatenAnfang, ekSchritt1, ekSchritt2, ekSchritt3, ekSchritt4, ekSchritt5 } from "./bakingSteps";
import { brownieButton, backschritte, closeButtonB, schritt1, schritt2, schritt3, schritt4, schritt5, zupfkuchenButton, backschritteRZ, closeButtonRz, schritt1RZ, schritt2RZ, schritt3RZ, schritt4RZ, erdbeerkuchenButton, backschritteEK, closeButtonEk, schritt1EK, schritt2EK, schritt3EK, schritt4EK, schritt5EK, modalBrownie, modalErdbeerkuchen, modalZupfkuchen } from "./domUtils";

//Brownie Modal 
//öffnen

brownieButton.addEventListener('click', openBrownieBox);
closeButtonB.addEventListener('click', closeBrownieModal);

zupfkuchenButton.addEventListener('click', openZupfkuchenBox);
closeButtonRz.addEventListener('click', closeRzModal);

erdbeerkuchenButton.addEventListener('click', openErdbeerkuchenBox);
closeButtonEk.addEventListener('click', closeEkModal);

  
function openBrownieBox(){
  modalBrownie.style.display='block';
  backschritte.innerHTML= bZutatenAnfang;
}


function closeBrownieModal(){
  modalBrownie.style.display='none';
}

 //Schritte
 
 schritt1.addEventListener('click', showFirstStep);
    function showFirstStep(){
      schritt1.style.backgroundColor = "green";
      backschritte.innerHTML=bSchritt1;
    } 


schritt2.addEventListener('click', showSecondStep);
   function showSecondStep(){
     schritt2.style.backgroundColor = "green";
     backschritte.innerHTML=bSchritt2;
   } 


schritt3.addEventListener('click', showThirdStep);
  function showThirdStep(){
    schritt3.style.backgroundColor = "green";
    backschritte.innerHTML=bSchritt3;
  } 


schritt4.addEventListener('click', showFourthStep);
  function showFourthStep(){
    schritt4.style.backgroundColor = "green";
    backschritte.innerHTML=bSchritt4;
  } 


schritt5.addEventListener('click', showFifthStep);
  function showFifthStep(){
    schritt5.style.backgroundColor = "green";
    backschritte.innerHTML=bSchritt5;
  } 



//russischer Zupfkuchen Modal 
//öffnen

function openZupfkuchenBox(){
  modalZupfkuchen.style.display='block';
    backschritteRZ.innerHTML= rzZutatenAnfang;
}

//schließen
function closeRzModal(){
  modalZupfkuchen.style.display='none';
}

//Schritte

schritt1RZ.addEventListener('click', showFirstStepRZ);
  function showFirstStepRZ(){
    schritt1RZ.style.backgroundColor = "green";
    backschritteRZ.innerHTML=rzSchritt1;
  } 


schritt2RZ.addEventListener('click', showSecondStepRZ);
   function showSecondStepRZ(){
     schritt2RZ.style.backgroundColor = "green";
     backschritteRZ.innerHTML=rzSchritt2;
   } 


schritt3RZ.addEventListener('click', showThirdStepRZ);
  function showThirdStepRZ(){
    schritt3RZ.style.backgroundColor = "green";
    backschritteRZ.innerHTML=rzSchritt3;
  } 


schritt4RZ.addEventListener('click', showFourthStepRZ);
  function showFourthStepRZ(){
    schritt4RZ.style.backgroundColor = "green";
    backschritteRZ.innerHTML=rzSchritt4;
  } 





//Erdbeerkuchen Modal
//öffnen

function openErdbeerkuchenBox(){
  modalErdbeerkuchen.style.display='block';
  backschritteEK.innerHTML= ekZutatenAnfang;
}

//schließen
function closeEkModal(){
 modalErdbeerkuchen.style.display='none';
}

//Schritte

schritt1EK.addEventListener('click', showFirstStepEK);
  function showFirstStepEK(){
    schritt1EK.style.backgroundColor = "green";
    backschritteEK.innerHTML=ekSchritt1;
  } 


schritt2EK.addEventListener('click', showSecondStepEK);
   function showSecondStepEK(){
     schritt2EK.style.backgroundColor = "green";
     backschritteEK.innerHTML=ekSchritt2;
   } 


schritt3EK.addEventListener('click', showThirdStepEK);
  function showThirdStepEK(){
    schritt3EK.style.backgroundColor = "green";
    backschritteEK.innerHTML=ekSchritt3;
  } 


schritt4EK.addEventListener('click', showFourthStepEK);
  function showFourthStepEK(){
    schritt4EK.style.backgroundColor = "green";
    backschritteEK.innerHTML=ekSchritt4;
  } 


schritt5EK.addEventListener('click', showFifthStepEK);
  function showFifthStepEK(){
    schritt5EK.style.backgroundColor = "green";
    backschritteEK.innerHTML=ekSchritt5;
  } 