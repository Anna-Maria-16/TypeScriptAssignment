import { brownieButton, closeButtonB, zupfkuchenButton, closeButtonRz, erdbeerkuchenButton, closeButtonEk, schritt1B, schritt2B, schritt3B, schritt4B, schritt5B, schritt1RZ, schritt2RZ, schritt3RZ, schritt4RZ, schritt1EK, schritt2EK, schritt3EK, schritt4EK, schritt5EK} from "./domUtils";
import { openBrownieModal as openBModal, closeBModal, openZupfkuchenModal as openRzModal, closeRzModal, openErdbeerkuchenModal as openEkModal, closeEkModal, showFirstStep, showSecondStep, showThirdStep, showFourthStep, showFifthStep, showFirstStepRZ, showSecondStepRZ, showThirdStepRZ, showFourthStepRZ, showFirstStepEK, showSecondStepEK, showThirdStepEK, showFourthStepEK, showFifthStepEK} from "./index";


export function addEventListeners(){

brownieButton.addEventListener('click', openBModal);
closeButtonB.addEventListener('click', closeBModal);

zupfkuchenButton.addEventListener('click', openRzModal);
closeButtonRz.addEventListener('click', closeRzModal);

erdbeerkuchenButton.addEventListener('click', openEkModal);
closeButtonEk.addEventListener('click', closeEkModal);


//Nach Klick auf die Buttons die Schritte der Brownies anzeigen
schritt1B.addEventListener('click', showFirstStep);
schritt2B.addEventListener('click', showSecondStep);
schritt3B.addEventListener('click', showThirdStep);
schritt4B.addEventListener('click', showFourthStep);
schritt5B.addEventListener('click', showFifthStep);
//Nach Klick auf die Buttons die Schritte des russichen Zupfkuchen anzeigen
schritt1RZ.addEventListener('click', showFirstStepRZ);
schritt2RZ.addEventListener('click', showSecondStepRZ);
schritt3RZ.addEventListener('click', showThirdStepRZ);
schritt4RZ.addEventListener('click', showFourthStepRZ);
//Nach Klick auf die Buttons die Schritte des Erdbeerkuchens anzeigen
schritt1EK.addEventListener('click', showFirstStepEK);
schritt2EK.addEventListener('click', showSecondStepEK);
schritt3EK.addEventListener('click', showThirdStepEK);
schritt4EK.addEventListener('click', showFourthStepEK);
schritt5EK.addEventListener('click', showFifthStepEK);

//Zutaten durchstreichen
/*zutatenLi.addEventListener('mouseover', check);*/
}


