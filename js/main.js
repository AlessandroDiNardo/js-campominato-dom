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
            let arrBox = genArrNumRandom(100, 1, 100);
            console.log(arrBox);

            for (let i = 1; i <= 100; i++) {

                let newElem = box();
                newElem.addEventListener("click",
                        function(){
                            newElem.classList.toggle("clicked");
                            console.log("Levello easy, elemento selzionato: ", i);
                        }
                    );
                
                myContainer.appendChild(newElem);
                newElem.append(i);
                newElem.classList.add("easy");
            }
        }

        // medium level
        if(level === "medium") {

            myContainer.innerHTML = '';
            
            for (let i = 1; i <= 81; i++) {
        
                let newElem = box();
                newElem.addEventListener("click",
                        function(){
                            newElem.classList.toggle("clicked");
                            console.log("Levello medium, elemento selzionato: ", i);
                        }
                    );
                
                myContainer.appendChild(newElem);
                newElem.append(i);
                newElem.classList.add("medium");
            }
        }

        // hard level
        // medium level
        if(level === "hard") {

            myContainer.innerHTML = '';

            for (let i = 1; i <= 49; i++) {
        
                let newElem = box();
                newElem.addEventListener("click",
                        function(){
                            newElem.classList.toggle("clicked");
                            console.log("Levello hard, elemento selzionato: ", i);
                        }
                    );
                
                myContainer.appendChild(newElem);
                newElem.append(i);
                newElem.classList.add("hard")
            }
        }
    }
);
