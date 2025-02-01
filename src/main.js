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
const startPlayingButton = document.querySelector("#toPlay");

//--Cajas donde se muestran las figuras
const boxOne   = document.querySelector("#boxOne");
const boxTwo   = document.querySelector("#boxTwo");
const boxThree = document.querySelector("#boxThree");

//--Limpiar todos los intervalos
const stopInterval = (ide)=>{
    clearInterval(ide);
}

//--Iniciar el cambiador de imágenes
const startChangingImages = ()=>{


    //intervalo de la caja uno
    let counter1 = 0;
    const ideInterval1 = setInterval(()=>{

        counter1 ++;
        const image = getRandomNumber();
        console.log(image, imageArray[image])
        boxOne.style.backgroundImage = `url(${imageArray[image]})`;

        if(counter1 === MAXIMUM_AMOUNT_PER_ROUND_BOX1 )stopInterval(ideInterval1);
    },200);


    //intervalo de la caja dos
    let counter2 = 0;
    const ideInterval2 = setInterval(()=>{

        counter2 ++;
        const image = getRandomNumber();
        boxTwo.style.backgroundImage = `url(${imageArray[image]})`;
        if(counter2 === MAXIMUM_AMOUNT_PER_ROUND_BOX2 )stopInterval(ideInterval2);
    },200);


    //intervalo de la caja tres
    let counter3 = 0;
    const ideInterval3 = setInterval(()=>{
        counter3 ++;
        const image = getRandomNumber();
        boxThree.style.backgroundImage =  `url(${imageArray[image]})`;
        if(counter3 === MAXIMUM_AMOUNT_PER_ROUND_BOX3 )stopInterval(ideInterval3);

    },200);  

}


//--Escuchar click del botón "Jugar"
startPlayingButton.addEventListener("click", ()=>{
    startChangingImages()
});

// startChangingImages()
console.log(imageArray);
