/* L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */

/*Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l’utente clicca su una cella:
se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba. */

const myContainer = document.querySelector(".container");

// apparizione livello
let btnPlay = document.getElementById("play");
btnPlay.addEventListener('click',
    function(event) {
        event.preventDefault()

        let level = document.getElementById("difficult").value;
        // easy level
        if(level === "easy") {

            myContainer.innerHTML = '';
            myContainer.style.height = "100%";

            // creare array di numeri random
            const arrBomb = genArrNumRandom(16, 1, 100);
            console.log(arrBomb);

            for (let i = 1; i <= 100; i++) {
            
                let newElem = box("div", "square");
                myContainer.appendChild(newElem);
                newElem.classList.add("easy");

                newElem.innerHTML = arrBomb[i];
                console.log(newElem);

                newElem.addEventListener("click",
                    function(){
                        if(arrBomb.includes(i)) {
                            newElem.classList.add("bomb");
                            console.log("Levello easy, elemento selzionato: ", i);
                        }else{
                            newElem.classList.remove("bomb");
                            newElem.classList.add("safe");
                            console.log("Levello easy, elemento selzionato: ", i);
                        }
                    }
                );
            }
        }

        // medium level
        

        // hard level
        
    }
);
