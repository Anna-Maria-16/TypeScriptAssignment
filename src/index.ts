//Brownie-Rezept
//Container
let openB= document.getElementById('BrezeptBox') as HTMLDivElement;

function openContainerB(){
  openB.style.display = 'block';
}

function closeContainerB(){
  openB.style.display ='none';
}


//nächster Back-Schritt
let index:number = 1;
    schritt(index);

function nächsterSchritt(n:number){
  schritt(index +=n);
}

function schritt(n:number){
  let i:any;
  let schritte = document.getElementsByClassName('Schritt') as any;

  if(n>schritte.length) {
      index=1;
  }

  if(n<1) {
      index = schritte.length;
  }

  for(i=0; i<schritte.length; i++) {
      schritte[i].style.display= 'none';
  }

schritte[index -1].style.display='block'
}


//zutaten durchstreichen
let list = document.getElementById('zutaten-1') as HTMLElement;
list.addEventListener('click', check);

function check(e:any) {
  if(e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
} false;




//Russischer-Zupfkuchen-Rezept
//Container

let rzBox= document.getElementById('RZrezeptBox') as HTMLDivElement;

function openContainerRZ(){
  rzBox.style.display = 'block';
}

function closeContainerRZ(){
  rzBox.style.display ='none';
}



//Erdbeerkuchen-Rezept
//Container
let ekBox= document.getElementById('EKrezeptBox') as HTMLDivElement;

function openContainerEK(){
  ekBox.style.display = 'block';
}

function closeContainerEK(){
  ekBox.style.display ='none';
}
