// selezione bottone play
const buttonPlay = document.querySelector(".play")

// al click del bottone play appare la griglia
buttonPlay.addEventListener("click", 
    function()  {

        // aggiunta classe
        buttonPlay.classList.add("hidden");

        // creazione container
        const container = document.createElement("div");

        // aggiunta classe
        container.classList.add("container");

        // selezione div main
        const main = document.querySelector("main");

        // append al main
        main.append(container);

        // array elementi square
        const squareArray = [];

         // conteggio dei click
         let click = 0;
         
        // ciclo for per creare 100 quadrati
        for (let i = 1; i <= 100; i++) {

            // creazione quadrati interni
            const square = document.createElement("div");

            // push elemento square all'interno di squareArray
            squareArray.push(square);

            // aggiunta classe 
            square.classList.add("square");

            // append al container
            container.append(square);

            // creazione contenuti square
            const number = i;

            // append allo square
            square.append(number);

            // al click della cella cambia colore di sfondo e stampa in console il risultato
            square.addEventListener("click", 
                function()  {

                    // aggiunta classe
                    square.classList.add("clicked");

                    // stampa in console il numero
                    // console.log(i);

                    // conteggio dei click
                    click++;

                }
            )

        }

        // selezione degli square con le bombe
        for (let i = 0; i < 16; i++) {
            // generazione random index per arraySquare
            const randomSquareIndex = randomNumbMinMax(0, 99);

            // selezione elemento da arraySquare in ordine random
            const selectedSquare = squareArray[randomSquareIndex];
            console.log(selectedSquare);

            // al click degli square con le bombe
            selectedSquare.addEventListener("click", function() {

                // selezione div che dice che hai perso
                const haiPerso = document.querySelector(".perso");

                // aggiunta classe bomba
                selectedSquare.classList.add("bomba");

                // aggiunta classe
                haiPerso.classList.add("active");

                // console.log("Hai perso! Punteggio: " + click);

                const contaClick = document.createElement ("h2");
                contaClick.append(click);

                haiPerso.append(contaClick);
                
            });
        }
 
    }
)


///// FUNZIONI /////

// funzione per creare un array di numeri in ordine casuale in un range da 1 a 16
function genArrayRandomNumb (minNum, maxNum, lengthArray) {

    // creazione array da popolare
    const arrayGen = [];
    
    // ciclo per poolare l'aaray
    while (arrayGen.length < lengthArray) {
        // generazione numero random tra min e max tramite funzione
        let newNum = randomNumbMinMax (minNum, maxNum);
        // se il numero generato non è già presente lell'array
        if (!arrayGen.includes(newNum)) {
            // allora push nell'array
            arrayGen.push(newNum);
        }
    }

    return arrayGen;

}

// funzione per generare numero random tra min e max tramite funzione
function randomNumbMinMax (min, max) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  
    return randomNum;
}