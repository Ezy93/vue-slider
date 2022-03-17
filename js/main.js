/**
 *
 *
 *
Riprendiamo l'esercizio carosello e rifacciamolo, questa volta usando gli oggetti, prendendo come riferimento il codice scritto oggi insieme a lezione, 
che troverete direttamente nella mia repository di github a questo link: [link github]

Modifichiamo il codice dell'esercizio per renderlo funzionante con un array di oggetti al posto dei tre array separati, con una sola regola: non è possibile modificare l'HTML ma solamente JS e CSS.
Ricordiamo sempre l'importanza dell'integrità del dato.

Bonus 1:
Sperimentiamo attraverso l'uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:
al click di un bottone o già dall'inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.

Bonus 2:
E se volessi un bottone per invertire la "direzione" del carosello?

 *
 */


const landscape = [
    {
        nome : "Acadia National park",
        descrizione : "vera e propria perla del New England, incastonato nella bellissima Mount Desert Island.",
        image : "acadia-national-park.jpg",
    },

    {
        nome : "Bar Harbor",
        descrizione : "Bar Harbor è una città degli Stati Uniti d'America, situata nella contea di Hancock, nel Maine.",
        image : "bar-harbor.jpg",
    },

    {
        nome : "Costa oceano pacifico",
        descrizione : "vera e propria perla dell'oceano pacifico.",
        image : "coast.jpg",
    },

    {
        nome : "Biedesheim",
        descrizione : "Biedesheim è un comune di 634 abitanti della Renania-Palatinato, in Germania.",
        image : "germany-biedesheim.jpg",
    },

    {
        nome : "Scozia",
        descrizione : "tipico paesaggio scozzese.",
        image : "scotland.jpg",
    },

    {
        nome : "Yellow stone National park",
        descrizione : "non so se è davvero lo yellowstone.",
        image : "yellowstone.jpg",
    },
];






/* ciclo for che inserisce dinamicamente i thumbnail nel DOM */
for(let i = 0; i < landscape.length; i++){
    document.querySelector("div.my-thumbnails").innerHTML +=`
    <div id= "thumb" style="width: calc(100% / ${landscape.length})"; >
        <img class = "img-fluid pointer sleepy" src="img/${landscape[i].image}" alt="random landscape picture">
    </div>`;


    document.querySelector("div.my-carousel-images").innerHTML += `
    <div class="carousel-element text-white position-relative d-none">
        <img src="img/${landscape[i].image}" alt="alt="random landscape picture" class="w-100">
        <div class = "position-absolute px-3 my-bottom">
            <h2>${landscape[i].nome}</h2>
            <p>${landscape[i].descrizione}</p>
        </div>
    </div>`; 
}

/* inizializzo una variabile che mi servira da contatore per scegliere quale immagine sara attiva */
let active = 1;

/* rendo gli elementi iniziali attivi */
document.getElementsByClassName("carousel-element")[active].classList.add("active");

document.getElementsByClassName("pointer")[active].classList.add("active-thumb");
document.getElementsByClassName("pointer")[active].classList.remove("sleepy");


const previousButton = document.querySelector(".my-previous");
const nextButton = document.querySelector(".my-next");


/* aggiungo un eventlistener per far si che al click sul bottone previous le immagini scorrano  */
previousButton.addEventListener("click" , function(){
    
    document.getElementsByClassName("carousel-element")[active].classList.remove("active");
    document.getElementsByClassName("pointer")[active].classList.remove("active-thumb");
    document.getElementsByClassName("pointer")[active].classList.add("sleepy");
    
    
    if(active == 0){
        active = landscape.length - 1;
    }else{
        active--;
    }

    document.getElementsByClassName("carousel-element")[active].classList.add("active");
    document.getElementsByClassName("pointer")[active].classList.add("active-thumb");
    document.getElementsByClassName("pointer")[active].classList.remove("sleepy");

});


/* aggiungo un eventlistener per far si che al click sul bottone next le immagini scorrano  */
nextButton.addEventListener("click" , function(){
    
    document.getElementsByClassName("carousel-element")[active].classList.remove("active");
    document.getElementsByClassName("pointer")[active].classList.remove("active-thumb");
    document.getElementsByClassName("pointer")[active].classList.add("sleepy");
    
    
    if(active === landscape.length - 1){
        active = 0;
    }else{
        active++;
    }

    document.getElementsByClassName("carousel-element")[active].classList.add("active");
    document.getElementsByClassName("pointer")[active].classList.add("active-thumb");
    document.getElementsByClassName("pointer")[active].classList.remove("sleepy");

});

