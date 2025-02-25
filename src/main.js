/*--------------------------------------------------------------------------------

                      Controlador de imágenes random

- Se crea un array con la lista de las imagenes disponibles, sin importar
si la cantidad de imágenes aumenta o disminuye, su longitud será el  número
máximo a calcular para crear los números de forma aleatoria.
-Cada número generado aleaotriamente, efectivamente corresponderá a la imágen 
del array.
-Cada caja de imágen contiene su propio intervalo de tiempo en el cual se generarán
las imágenes aleatoriamente. 
---------------------------------------------------------------------------------*/
import './css/style.css';
import './score.js';
import {
    MAXIMUM_AMOUNT_PER_ROUND_BOX1,
    MAXIMUM_AMOUNT_PER_ROUND_BOX2,
    MAXIMUM_AMOUNT_PER_ROUND_BOX3,
    INTERVAL_TIME_ONE,
    INTERVAL_TIME_TWO,
    INTERVAL_TIME_THREE,
    IMAGE_ARRAY,
    boxOne,
    boxTwo,
    boxThree,
    startPlayingButton,
    stopPlayingButton,
    MATCHING_BOXES_DATA
} from './constants.js';


let stop = false;
let ideIntervals = [];

//--Retornar un número random con la cantida de imágenes.
const getRandomNumber = ()=>{
   const  numberImages = IMAGE_ARRAY.length;
   return Math.floor((Math.random() * (numberImages)));
}

//--Limpiar los intervalos
const stopInterval = (ide)=>{
    clearInterval(ide);
    ideIntervals.shift();
    console.log(MATCHING_BOXES_DATA);
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
        const randomImageNumber = getRandomNumber();
        const isBoxMaxReached = ( stop === true || ( counter1 === MAXIMUM_AMOUNT_PER_ROUND_BOX1 ) );
        boxOne.classList.add("transition-one");
        boxOne.style.backgroundImage = `url(${IMAGE_ARRAY[randomImageNumber]})`;

        if( isBoxMaxReached ){
           stopInterval(ideInterval1);
           boxOne.classList.remove("transition-one");
           MATCHING_BOXES_DATA.boxOne = randomImageNumber;
        }

    },INTERVAL_TIME_ONE);


    //intervalo de la caja dos
    let counter2 = 0;
    const ideInterval2 = setInterval(()=>{

        counter2 ++;
        const randomImageNumber = getRandomNumber();
        const isBoxMaxReached =( stop === true || ( counter2 === MAXIMUM_AMOUNT_PER_ROUND_BOX2 ) );
        boxTwo.classList.add("transition-two");
        boxTwo.style.backgroundImage = `url(${IMAGE_ARRAY[randomImageNumber]})`;

        if( isBoxMaxReached ){
            stopInterval(ideInterval2);
            boxTwo.classList.remove("transition-two");
            MATCHING_BOXES_DATA.boxTwo = randomImageNumber;
        }

    },INTERVAL_TIME_TWO);


    //intervalo de la caja tres
    let counter3 = 0;
    const ideInterval3 = setInterval(()=>{

        counter3 ++;
        const randomImageNumber = getRandomNumber();
        const isBoxMaxReached = ( stop === true ||  (counter3 === MAXIMUM_AMOUNT_PER_ROUND_BOX3 ) );

        boxThree.classList.add("transition-three");
        boxThree.style.backgroundImage =  `url(${IMAGE_ARRAY[randomImageNumber]})`;

        if( isBoxMaxReached ){
            stopInterval(ideInterval3);
            boxThree.classList.remove("transition-three");
            MATCHING_BOXES_DATA.boxThree = randomImageNumber;
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


//--Manejar click del botón "Jugar"
startPlayingButton.addEventListener("click", ()=>{
    startChangingImages();
    handleButtons();
});

//--Manejar click del botón "Detener"
stopPlayingButton.addEventListener("click", ()=>{
    stop = true;
    startPlayingButton.style.display = "block";
    stopPlayingButton.style.display = "none";
});