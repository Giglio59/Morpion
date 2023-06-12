"use strict"
var dataX = [], dataO =[];

//Information utile//
const message = document.querySelector("h2")
let jeuOn = true



let ted = document.querySelectorAll("td")

//Condition de victoire oui combinaion possible //
const Victoire = [[1, 2, 3], [4, 5, 6],[7, 8, 9],[1, 4, 7],
                [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7] ]

// Les message d'information //
function gagnant(prevjoueurX){
    return  ` Le joueur ${joueurX} a gagner !` 
}

function egaliter(){
   return` Egalité !` 
}

function tour(){
    return message.innerHTML = ` c'est au tour du joueur ${prevjoueurX}  !` 
}

// Le joueur qu commence 
let prevjoueurX ="X"

function click(event){ console.log(event);
    if (occupé(event))
    {tour()}
    else{  let data = event.getAttribute("data-index"); 
        placesymbole(event.target,prevjoueurX);
        dataX.push(parseInt(data));
        dataO.push(parseInt(data));
        if (victoireVerif())
        {
            gagnant()
        }
        else if (verifegaliter()) {
            egaliter()
        }
        else{
            changeJoueur()
        }
    }
}



  

  function occupé(event){
    if (event.target.textContent == ""){
        return false
    }
    else{
        return true
    }
  }
  
  function changeJoueur(){
    if (prevjoueurX == "X"){
        prevjoueurX = "O"
    }
    else{
        prevjoueurX = "X"
    }
  }

  function placesymbole(Case,Joueur){
    Case.textContent = Joueur;
    

  }


  function verifegaliter(){
    let v=false
    let m=0
    while(v==false && m<ted.length){
    if (ted[m].textContent == ""){
        v=false
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

  function msn() {
    ted.forEach(function (element) {
      element.textContent = "";
    });
    dataX = [];
    dataO = [];
    message.innerHTML = "";
    prevjoueurX = "X";
  }









