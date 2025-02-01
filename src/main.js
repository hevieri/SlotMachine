/*---------------------------------------------------------------------------

Controlador de imágenes random

-La idea es que cuando le den al botón "Jugar", cada caja empiece a girar
con un tiempo determinado. Deben  de tener un tiempo global o límite de tiempo
para que paren todos y por cosas dle azar coincidan.
----------------------------------------------------------------------------*/
import './css/style.css';


//--Array de imágenes
const imageArray = [
  "src/assets/img/1.jpg",
  "src/assets/img/2.jpg",
  "src/assets/img/3.jpg",
  "src/assets/img/4.jpg",
  "src/assets/img/5.jpg",
  "src/assets/img/6.jpg",
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
      const image = imageArray();
      boxOne.style.backgroundImage = imageArray[image];

      if(counter1 === 20)stopInterval(ideInterval1);
  },800);  


  //intervalo de la caja dos
  let counter2 = 0;
  const ideInterval2 = setInterval(()=>{

      counter2 ++;
      const image = imageArray();
      boxTwo.style.backgroundImage = imageArray[image];
      if(counter2 === 28)stopInterval(ideInterval2);
  },800);  


  //intervalo de la caja tres
  let counter3 = 0;
  const ideInterval3 = setInterval(()=>{
      counter3 ++;
      const image = "" //imageArray();
      boxThree.style.backgroundImage = imageArray[image];
      if(counter3 === 38)stopInterval(ideInterval3);

  },800);  

}


//--Escuchar click del botón "Jugar"
startPlayingButton.addEventListener("click", startChangingImages());

// startChangingImages()
console.log(imageArray);
