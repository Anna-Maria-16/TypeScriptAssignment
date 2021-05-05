//einzelne Backschritte BROWNIE in einer Variablen speichern
const bZutatenAnfang:string = `<p id="zutaten">Du brauchst dafür:</p>
                          <ul id="zutatenB">
                            <li>6 Eier (Gr. M)</li>
                            <li>120g weißer Zucker</li>
                            <li>120g brauner Zucker</li>
                            <li>120g Zartbitterschokolade klein gehackt</li>
                            <li>250g Butter</li>
                            <li>4 EL Sonnenblumenöl</li>
                            <li>140g Weizenmehl</li>
                            <li>1 TL Backpulver</li>
                            <li>100g Backkakao</li>
                            <li>80g Zartbitterschokolade klein gehackt zum Unterheben</li>
                          <br>
                              <li>Backform (ca. 25x35 cm)</li>
                          </ul>`;

const bSchritt1:string = `<ul class="zutatenListe">
                            <li>Backform (ca. 25x35 cm)</li>
                          </ul>
                          <p>Zuerst den Backofen auf <b>175 Grad Ober- und Unterhitze</b> vorheizen.<br>Ein kleines Blech oder eine rechteckige Backform mit Backpapier belegen.</p>`

const bSchritt2:string = `<ul class="zutatenListe">
                            <li>120g Zartbitterschokolade klein gehackt</li>
                            <li>250g Butter</li>
                            <li>4 EL Sonnenblumenöl</li>
                          </ul>
                          <p>Die klein gehackte Schokolade und Butter zusammen in einem Topf im heißen Wasserbad schmelzen.<br>Danach leicht abkühlen lassen. Das Öl zur Schoko-Butter-Masse geben. </p>`;

const bSchritt3:string = `<ul class="zutatenListe">
                            <li>6 Eier (Gr. M)</li>
                            <li>120g weißer Zucker</li>
                            <li>120g brauner Zucker</li>
                          </ul>
                          <p>Nun die Eier mit dem weißen und braunen Zucker sehr schaumig schlagen.</p>`;

const bSchritt4:string = `<ul class="zutatenListe">
                            <li>140g Weizenmehl</li>
                            <li>1 TL Backpulver</li>
                            <li>100g Backkakao</li>
                            <li>80g Zartbitterschokolade klein gehackt zum Unterheben</li>
                          </ul>
                          <p>Das Mehl mit Backpulver und Kakao mischen.<br>Die Schoko-Butter-Masse und die trockenen Zutaten kurz, aber kräftig, unter die Eiercreme rühren. Die klein gehackte Schokolade ebenfalls dazugeben (ein paar Chunks für die Deko aufheben).</p>`;

const bSchritt5:string = `<p>Den Brownieteig in die vorbereitete Form füllen und glattstreichen. Restliche gehackte Schokolade darüber verteilen.<br>Die Brownies ca. 20-25 Minuten backen – die Backzeit hängt von eurem Ofen ab. Nicht zu lange im Ofen lassen! Der Teig sollte noch etwas weich sein, aber natürlich im Inneren nicht mehr hin- und her wackeln. (Die Brownies werden beim Abkühlen noch etwas fester)</p>`;

//einzelne Backschritte RUSSICHER ZUPFKUCHEN in einer Variablen speichern
const rzZutatenAnfang: string = `<p id="zutaten">Du brauchst dafür:</p>
                                <ul id="zutatenRZ">
                                  <li>300 g Weizenmehl</li>
                                  <li>4 EL Backkakao</li>
                                  <li>150 g Zucker</li>
                                  <li>1 Pck. Backpulver</li>
                                  <li>1 Ei (Gr. M)</li>
                                  <li>150 g kalte Butter</li>
                                  <li>1 Prise Salz</li>
                                  <li>etwas Butter für die Form</li>
                                  <li>3 Eier (Gr. M)</li>
                                  <li>150 g Zucker</li>
                                  <li>200 g weiche Butter</li>
                                  <li>500 g Magerquark</li>
                                  <li>1 Pck. Vanillezucker</li>
                                  <li>1 Pck. Vanillepuddingpulver</li>
                                  <li>etwas Puderzucker zum Bestreuen</li>
                                </ul>`;

const rzSchritt1:string = `<ul class="zutatenListe">
                              <li>Springform (Ø 26 cm)</li>
                              <li>etwas Butter für die Form</li>
                            </ul>
                            <p>Ofen auf 180 Grad Ober-/ Unterhitze (Umluft: 160 Grad) vorheizen. Springform gut einfetten. </p>`;

const rzSchritt2:string = `<ul class="zutatenListe">
                              <li>300 g Weizenmehl</li>
                              <li>4 EL Backkakao</li>
                              <li>150 g Zucker</li>
                              <li>1 Pck. Backpulver</li>
                              <li>1 Ei (Gr. M)</li>
                              <li>150 g kalte Butter</li>
                              <li>1 Prise Salz</li>
                            </ul>
                            <p>Für den Teig alle Zutaten zu einem homogenen Teig verkneten. Die Hälfte des Teigs in die Springform drücken, dabei einen Rand von etwa 3 cm bilden. Den restlichen Teig bei Seite legen. Um den Rand gleichmäßiger zu gestalten, einfach mit einem Messer am Rand entlangfahren und überschüssigen oder ungleichmäßigen Teig abschneiden.</p>`;
          
const rzSchritt3:string = `<ul class="zutatenListe"></ul>
                              <li>3 Eier (Gr. M)</li>
                              <li>150 g Zucker</li>
                              <li>200 g weiche Butter</li>
                              <li>500 g Magerquark</li>
                              <li>1 Pck. Vanillezucker</li>
                              <li>1 Pck. Vanillepuddingpulver</li>
                            </ul>
                            <p>Eier mit dem Zucker und der Butter verquirlen.<br>Magerquark, Vanillezucker und Vanillepuddingpulver hinzugeben und gut durchrühren.<br>Masse auf den Teig geben. </p>
                            <p>Die beiseite gelegte Hälfte des Teigs in kleine Stücke reißen und diese mit kleinen Lücken vorsichtig auf die Füllung legen.</p> `;

const rzSchritt4:string = `<p>Kuchen im vorgeheizten Ofen circa 60 Min. backen. Gegebenenfalls nach 45 Min. mit Alufolie abdecken, damit er nicht zu dunkel wird. Der Kuchen sollte am Ende nicht mehr zu sehr wackeln aber auch nicht ganz fest sein. Den Kuchen komplett auskühlen lassen, erst dann aus der Form nehmen. Nach Belieben mit Puderzucker bestreuen. Der Kuchen ergibt ca. 12 Stücke.</p>`;



//einzelne Backschritte ERDBEERKUCHEN in einer Variablen speichern
const ekZutatenAnfang: string = `<p id="zutaten">Du brauchst für den Boden:</p>
                                <ul id="zutatenEK">
                                  <li>250 g Zucker</li>
                                  <li>1 Pck. Vanillezucker</li>
                                  <li>4 Eier</li>      
                                  <li>125 ml Öl</li>
                                  <li>150 ml Orangenlimonade</li>
                                  <li>250 g Mehl</li>
                                  <li>3 TL, gehäuft Backpulver</li>
                                <br>
                                <p id="zutaten2">Du brauchst für den Belag:</p>
                                  <li>600 ml Sahne</li>
                                  <li>400 ml Schmand</li>
                                  <li>2 Pck. Vanillezucker</li>
                                  <li>2 Pck. Cremepulver (Paradiescreme Vanille)</li>
                                  <li>1,5 kg Erdbeeren</li>
                                  <li>1 Pck. Tortenguss, rot</li>
                                  <li>n. B. Wasser</li>
                                </ul>`;

const ekSchritt1:string = ` <ul class="zutatenListe">
                              <li>250 g Zucker</li>
                              <li>1 Pck. Vanillezucker</li>
                              <li>4 Eier</li>
                              <li>125 ml Öl</li>
                              <li>150 ml Orangenlimonade</li>
                              <li>250 g Mehl</li>
                              <li>3 TL, gehäuft Backpulver</li>
                            </ul>
                            <p>Für den Boden die Eier mit dem Zucker und dem Vanillezucker verrühren.<br>Nun Öl, Orangenlimonade, Mehl und Backpulver hinzufügen.</p>`;

const ekSchritt2:string = `<p>Den Teig auf einem mit Backpapier ausgelegten Backblech verteilen und bei 180 °C Ober-/Unterhitze im vorgeheizten Ofen 25 Minuten backen.</p>`;

const ekSchritt3:string = ` <ul class="zutatenListe">
                              <li>600 ml Sahne</li>
                              <li>2 Pck. Vanillezucker</li>
                              <li>2 Pck. Cremepulver (Paradiescreme Vanille)</li>
                              <li>400 ml Schmand</li>
                            </ul>
                            <p>Für den Belag die Sahne mit dem Puddingpulver und Vanillezucker 3 Minuten schlagen (die Masse wird relativ fest).<br>Den Schmand unterheben und die Vanillecreme auf den erkalteten Boden streichen.</p>`;

const ekSchritt4:string = `<ul class="zutatenListe">
                            <li>1,5 kg Erdbeeren</li>   
                          </ul>
                          <p>Erdbeeren waschen, entstielen, große evtl. halbieren und auf der Vanillecreme verteilen.</p>`;

const ekSchritt5:string = `<ul class="zutatenListe">
                            <li>1 Pck. Tortenguss, rot</li>
                          </ul>
                          <p>Den Tortenguss nach Packungsanweisung mit dem Wasser anrühren, kochen und anschließend über den Erdbeeren verteilen. Fest werden lassen und dann ist der Kuchen servierfertig.</p>`;

//das Div-Element holen, worin die Backschritte angezeigt werden
let backschritte = document.getElementById('backschritte') as HTMLDivElement;
let backschritteRZ = document.getElementById('backschritteRZ') as HTMLDivElement;
let backschritteEK = document.getElementById('backschritteEK') as HTMLDivElement;


//Brownie Modal 
//öffnen
const brownieButton=document.getElementById('bButton') as HTMLElement;
brownieButton.addEventListener('click', openBrownieBox);
  
    function openBrownieBox(){
      const modalBrownie=document.getElementById('bRezeptBox') as HTMLElement;
      modalBrownie.style.display='block';

        backschritte.innerHTML= bZutatenAnfang;
    }

//schließen
 const closeButtonB = document.getElementById('closeBModal') as HTMLElement;
 closeButtonB.addEventListener('click', closeBrownieModal);

    function closeBrownieModal(){
      const modalBrownie=document.getElementById('bRezeptBox') as HTMLElement;
      modalBrownie.style.display='none';
    }

 //Schritte
 const schritt1 = document.getElementById('b1') as HTMLElement;
 schritt1.addEventListener('click', showFirstStep);
    function showFirstStep(){
      schritt1.style.backgroundColor = "green";
      backschritte.innerHTML=bSchritt1;
    } 

const schritt2 = document.getElementById('b2') as HTMLElement;
schritt2.addEventListener('click', showSecondStep);
   function showSecondStep(){
     schritt2.style.backgroundColor = "green";
     backschritte.innerHTML=bSchritt2;
   } 

const schritt3 = document.getElementById('b3') as HTMLElement;
schritt3.addEventListener('click', showThirdStep);
  function showThirdStep(){
    schritt3.style.backgroundColor = "green";
    backschritte.innerHTML=bSchritt3;
  } 

const schritt4 = document.getElementById('b4') as HTMLElement;
schritt4.addEventListener('click', showFourthStep);
  function showFourthStep(){
    schritt4.style.backgroundColor = "green";
    backschritte.innerHTML=bSchritt4;
  } 

const schritt5 = document.getElementById('b5') as HTMLElement;
schritt5.addEventListener('click', showFifthStep);
  function showFifthStep(){
    schritt5.style.backgroundColor = "green";
    backschritte.innerHTML=bSchritt5;
  } 

//russischer Zupfkuchen Modal 
//öffnen
const zupfkuchenButton = document.getElementById('rzButton') as HTMLElement;
zupfkuchenButton.addEventListener('click', openZupfkuchenBox);

function openZupfkuchenBox(){
  const modalZupfkuchen = document.getElementById('RzRezeptBox') as HTMLElement;
  modalZupfkuchen.style.display='block';
    backschritteRZ.innerHTML= rzZutatenAnfang;
}

//schließen
const closeButtonRz = document.getElementById('closeRzModal') as HTMLElement;
closeButtonRz.addEventListener('click', closeRzModal);

function closeRzModal(){
 const modalRz=document.getElementById('RzRezeptBox') as HTMLElement;
 modalRz.style.display='none';
}

//Schritte
const schritt1RZ = document.getElementById('rz1') as HTMLElement;
 schritt1RZ.addEventListener('click', showFirstStepRZ);
    function showFirstStepRZ(){
      schritt1RZ.style.backgroundColor = "green";
      backschritteRZ.innerHTML=rzSchritt1;
    } 

const schritt2RZ = document.getElementById('rz2') as HTMLElement;
schritt2RZ.addEventListener('click', showSecondStepRZ);
   function showSecondStepRZ(){
     schritt2RZ.style.backgroundColor = "green";
     backschritteRZ.innerHTML=rzSchritt2;
   } 

const schritt3RZ = document.getElementById('rz3') as HTMLElement;
schritt3RZ.addEventListener('click', showThirdStepRZ);
  function showThirdStepRZ(){
    schritt3RZ.style.backgroundColor = "green";
    backschritteRZ.innerHTML=rzSchritt3;
  } 

const schritt4RZ = document.getElementById('rz4') as HTMLElement;
schritt4RZ.addEventListener('click', showFourthStepRZ);
  function showFourthStepRZ(){
    schritt4RZ.style.backgroundColor = "green";
    backschritteRZ.innerHTML=rzSchritt4;
  } 





//Erdbeerkuchen Modal
//öffnen
const erdbeerkuchenButton = document.getElementById('ekButton') as HTMLElement;
erdbeerkuchenButton.addEventListener('click', openErdbeerkuchenBox);

function openErdbeerkuchenBox(){
  const modalErdbeerkuchen = document.getElementById('EkRezeptBox') as HTMLElement;
  modalErdbeerkuchen.style.display='block';

  backschritteEK.innerHTML= ekZutatenAnfang;
}

//schließen
const closeButtonEk = document.getElementById('closeEkModal') as HTMLElement;
closeButtonEk.addEventListener('click', closeEkModal);

function closeEkModal(){
 const modalEk=document.getElementById('EkRezeptBox') as HTMLElement;
 modalEk.style.display='none';
}

//Schritte
const schritt1EK = document.getElementById('ek1') as HTMLElement;
 schritt1EK.addEventListener('click', showFirstStepEK);
    function showFirstStepEK(){
      schritt1EK.style.backgroundColor = "green";
      backschritteEK.innerHTML=ekSchritt1;
    } 

const schritt2EK = document.getElementById('ek2') as HTMLElement;
schritt2EK.addEventListener('click', showSecondStepEK);
   function showSecondStepEK(){
     schritt2EK.style.backgroundColor = "green";
     backschritteEK.innerHTML=ekSchritt2;
   } 

const schritt3EK = document.getElementById('ek3') as HTMLElement;
schritt3EK.addEventListener('click', showThirdStepEK);
  function showThirdStepEK(){
    schritt3EK.style.backgroundColor = "green";
    backschritteEK.innerHTML=ekSchritt3;
  } 

const schritt4EK = document.getElementById('ek4') as HTMLElement;
schritt4EK.addEventListener('click', showFourthStepEK);
  function showFourthStepEK(){
    schritt4EK.style.backgroundColor = "green";
    backschritteEK.innerHTML=ekSchritt4;
  } 

const schritt5EK = document.getElementById('ek5') as HTMLElement;
schritt5EK.addEventListener('click', showFifthStepEK);
  function showFifthStepEK(){
    schritt5EK.style.backgroundColor = "green";
    backschritteEK.innerHTML=ekSchritt5;
  } 