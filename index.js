"use strict"
const dataX = [], dataO =[];

//Information utile//
const message = document.querySelector("h2")
console.log(message);
console.dir(message);
let jeuOn = true



let ted = document.querySelectorAll("td")

//Condition de victoire oui combinaion possible //
const Victoire = [[1, 2, 3], [4, 5, 6],[7, 8, 9],[1, 4, 7],
                [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7] ]

// Les message d'information //
function gagnant(prevjoueurX){
    return  ` Le joueur ${prevjoueurX} a gagner !` 
}

function egaliter(){
   return` Egalité !` 
}

function tour(){
    return message.innerHTML = ` c'est au tour du joueur ${prevjoueurX}  !` 
}

// Le joueur qu commence 
let prevjoueurX ="X"

function clickOnCase(event) {
  console.log(event);
  if (occupe(event)) {
    console.log("coucou");
    tour();
  } else {
    let data = event.getAttribute("data-index");
    placesymbole(event,prevjoueurX);
    //dataX.push(parseInt.click(data));
    changeJoueur(event);console.log(changeJoueur)
    //if (victoireVerif(event)) {
      gagnant();
    //} else if (verifegaliter(event)) {
    //  egaliter();
    //} else {
      
   // }
  }
}



  

  function occupe(event){
    console.log("occuper():",event);
    console.dir(event)
    if (event.innerText === ""){
        return false
    }
    else{
        return true
    }
  }
  
  function changeJoueur(event){
    console.log("coucou3");
    if (prevjoueurX === "X"){
        prevjoueurX = "O"
        tour()
    }
    else{
        prevjoueurX = "X"
        tour()
    }
  }

  function placesymbole(Case,Joueur){
    console.dir(Case,Joueur)
    Case.textContent = Joueur;
    

  }


  function verifegaliter(event){
    let v=false
    let m=0
    while(v==false && m<ted.length){
    if (ted[m].textContent == ""){
        v=false; console.dir(ted[m]);
    }
    m++;
    } 
    return v
  }

  function victoireVerif(event){
    let o = false 
    let w = 0 
  
    while(o == false && w< Victoire.length){
        if ( (dataX.includes(Victoire[w][0])&& dataX.includes(Victoire[w][1])&& dataX.includes(Victoire[w][2]))|| (dataO.includes(Victoire[w][0])&& dataO.includes(Victoire[w][1])&& dataO.includes(Victoire[w][2]))){
            o = true
        }
    } return o
  }

  function msn(event) {
    ted.forEach(function (element) {
      element.textContent = "";
    });
    dataX = [];
    dataO = [];
    message.innerHTML = "";
    prevjoueurX = "X";
  }









