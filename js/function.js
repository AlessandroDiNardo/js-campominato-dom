// funzione crea elementi square
function box() {

    // crea elemento e aggiungo classe square
    const elem = document.createElement("div");
    elem.classList.add("square");
    
    // return
    return elem;
}

// funzine generatore random num
function randomNum(min, max) {
    return (Math.floor(Math.random() * ((max + 1) - min) + min));
}

// funzione che crea un array di numeri random unici
function genArrNumRandom(howMany, minNum, maxNum) {  
    const newArr = [];

    // generare array di tot elementi tra numeri random min e max
    while(newArr.length < howMany) {
        // genera numeri random min e max
        let newNum = randomNum(minNum, maxNum);

        if(!newArr.includes(newNum)) {
            newArr.push(newNum);
        }
    }

    return newArr;
}
