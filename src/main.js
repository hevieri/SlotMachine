/*---------------------------------------------------------------------------

                      Controlador de imágenes random

-La idea es que cuando le den al botón "Jugar", cada caja empiece a girar
con un tiempo determinado. Deben  de tener un tiempo global o límite de tiempo
para que paren todos y por cosas dle azar coincidan.
----------------------------------------------------------------------------*/
import './css/style.css';

const MAXIMUM_AMOUNT_PER_ROUND_BOX1 = 25;
const MAXIMUM_AMOUNT_PER_ROUND_BOX2 = 35;
const MAXIMUM_AMOUNT_PER_ROUND_BOX3 = 40;
const INTERVAL_TIME_ONE   = 800
const INTERVAL_TIME_TWO   = 850
const INTERVAL_TIME_THREE = 890
let stop = false;
let ideIntervals = [];

//--Array de imágenes
const imageArray = [
    "src/assets/img/1.jpeg",
    "src/assets/img/2.jpeg",
    "src/assets/img/3.jpeg",
    "src/assets/img/4.jpeg",
    "src/assets/img/5.jpeg",
    "src/assets/img/6.jpeg",
];

//--Retornar un número random con la cantida de imágenes.
const getRandomNumber = ()=>{
   const  numberImages = imageArray.length;
   return Math.floor((Math.random() * (numberImages)));
}

//--Botón "Jugar"
const startPlayingButton = document.querySelector("#play");
const stopPlayingButton  = document.querySelector("#stop");

//--Cajas donde se muestran las figuras
const boxOne   = document.querySelector(".transitionOne");
const boxTwo   = document.querySelector(".transitionTwo");
const boxThree = document.querySelector(".transitionThree");

//--Limpiar los intervalos
const stopInterval = (ide)=>{
    clearInterval(ide);
    ideIntervals.shift();
    console.log(ide);
}

//--Iniciar el cambiador de imágenes
const startChangingImages = ()=>{

    if(ideIntervals.length > 0)return alert("Ya se está jugando");
    ideIntervals=[];
    stop = false;

    //intervalo de la caja uno
    let counter1 = 0;
    const ideInterval1 = setInterval(()=>{

        counter1 ++;
        const image = getRandomNumber();
        const isBoxMaxReached = ( stop === true || ( counter1 === MAXIMUM_AMOUNT_PER_ROUND_BOX1 ) );
        // console.log(image, imageArray[image])
        console.log( isBoxMaxReached, "Interval:: ", ideInterval1, "Stop:: ", stop);
        boxOne.classList.add("transition-one");
        boxOne.style.backgroundImage = `url(${imageArray[image]})`;

        if( isBoxMaxReached ){
            stopInterval(ideInterval1);
            boxOne.classList.remove("transition-one");
        }

    },INTERVAL_TIME_ONE);


    //intervalo de la caja dos
    let counter2 = 0;
    const ideInterval2 = setInterval(()=>{

        counter2 ++;
        const image = getRandomNumber();
        const isBoxMaxReached =( stop === true || ( counter2 === MAXIMUM_AMOUNT_PER_ROUND_BOX2 ) );
        boxTwo.classList.add("transition-two");
        boxTwo.style.backgroundImage = `url(${imageArray[image]})`;

        if( isBoxMaxReached ){
            stopInterval(ideInterval2);
            boxTwo.classList.remove("transition-two");
        }

    },INTERVAL_TIME_TWO);


    //intervalo de la caja tres
    let counter3 = 0;
    const ideInterval3 = setInterval(()=>{

        counter3 ++;
        const image = getRandomNumber();
        const isBoxMaxReached = ( stop === true ||  (counter3 === MAXIMUM_AMOUNT_PER_ROUND_BOX3 ) );

        boxThree.classList.add("transition-three");
        boxThree.style.backgroundImage =  `url(${imageArray[image]})`;

        if( isBoxMaxReached ){
            stopInterval(ideInterval3);
            boxThree.classList.remove("transition-three");
        }

    },INTERVAL_TIME_THREE);  
    
    //Ingresar los nuevos ides de intervalos
    ideIntervals.push(ideInterval1, ideInterval2, ideInterval3);

}

//--Ocultar botón de "Jugar" y mostrar el botón de "Detener"
const handleButtons = () =>{
    startPlayingButton.style.display = "none";

    setTimeout(()=>{
        stopPlayingButton.style.display = "block";
    },2000);


}

//--Escuchar click del botón "Jugar"
startPlayingButton.addEventListener("click", ()=>{
    startChangingImages();
    handleButtons();
});

//--Escuchar click del botón "Detener"
stopPlayingButton.addEventListener("click", ()=>{
    stop = true;
    startPlayingButton.style.display = "block";
    stopPlayingButton.style.display = "none";
});



// startChangingImages()
console.log(imageArray);
