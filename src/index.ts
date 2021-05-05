import { bZutatenAnfang, bSchritt1, bSchritt2, bSchritt3, bSchritt4, bSchritt5, rzZutatenAnfang, rzSchritt1, rzSchritt2, rzSchritt3, rzSchritt4, ekZutatenAnfang, ekSchritt1, ekSchritt2, ekSchritt3, ekSchritt4, ekSchritt5 } from "./bakingSteps";
import { brownieButton, backschritteB, closeButtonB, schritt1B, schritt2B, schritt3B, schritt4B, schritt5B, zupfkuchenButton, backschritteRZ, closeButtonRz, schritt1RZ, schritt2RZ, schritt3RZ, schritt4RZ, erdbeerkuchenButton, backschritteEK, closeButtonEk, schritt1EK, schritt2EK, schritt3EK, schritt4EK, schritt5EK, modalBrownie, modalErdbeerkuchen, modalZupfkuchen } from "./domUtils";
import { addEventListeners } from "./eventListener";


addEventListeners();


//die allgemeinen Funktionen
export function open(rezept:HTMLElement, element: HTMLDivElement, rezeptStart:string){
  rezept.style.display='block';
  element.innerHTML= rezeptStart;
}

export function close(rezept:HTMLElement){
  rezept.style.display='none';
}

export function steps(schrittZahl:HTMLElement, element:HTMLDivElement, schritt:string){
  schrittZahl.style.backgroundColor = "green";
  element.innerHTML=schritt;
}




//Brownie Modal öffnen/schließen
export function openBrownieModal(){
  open(modalBrownie, backschritteB, bZutatenAnfang);
}

export function closeBModal(){
  close(modalBrownie);
}

//Zupfkuchen Modal öffnen/schließen
export function openZupfkuchenModal(){
  open(modalZupfkuchen, backschritteRZ, rzZutatenAnfang);
}

export function closeRzModal(){
  close(modalZupfkuchen);
}

//Erdbeerkuchen Modal öfnnen/schließen
export function openErdbeerkuchenModal(){
  open(modalErdbeerkuchen, backschritteEK, ekZutatenAnfang);
}

export function closeEkModal(){
 close(modalErdbeerkuchen);
}





//Brownie Rezept Schritte
  export function showFirstStep(){
    steps(schritt1B, backschritteB, bSchritt1);
  } 

  export function showSecondStep(){
     steps(schritt2B,backschritteB, bSchritt2);
  } 

  export function showThirdStep(){
    steps(schritt3B,backschritteB, bSchritt3);
  } 

  export function showFourthStep(){
    steps(schritt4B,backschritteB, bSchritt4);
  }  

  export function showFifthStep(){
    steps(schritt5B,backschritteB, bSchritt5);
  } 

//Schritte russicher Zupfkuchen
  export function showFirstStepRZ(){
    steps(schritt1RZ,backschritteRZ, rzSchritt1);
  } 

  export function showSecondStepRZ(){
    steps(schritt2RZ,backschritteRZ, rzSchritt2);
  } 

  export function showThirdStepRZ(){
    steps(schritt3RZ,backschritteRZ, rzSchritt3);
  } 

  export function showFourthStepRZ(){
    steps(schritt4RZ,backschritteRZ, rzSchritt4);
  } 

//Schritte Erdbeerkuchen
  export function showFirstStepEK(){
    steps(schritt1EK,backschritteEK, ekSchritt1);
  } 

  export function showSecondStepEK(){
    steps(schritt2EK,backschritteEK, ekSchritt2);
   } 

  export function showThirdStepEK(){
    steps(schritt3EK,backschritteEK, ekSchritt3);
  } 

  export function showFourthStepEK(){
    steps(schritt4EK,backschritteEK, ekSchritt4);
  } 

  export function showFifthStepEK(){
    steps(schritt5EK,backschritteEK, ekSchritt5);
  }