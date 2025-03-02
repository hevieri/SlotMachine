const MAXIMUM_AMOUNT_PER_ROUND_BOX1 = 25;
const MAXIMUM_AMOUNT_PER_ROUND_BOX2 = 35;
const MAXIMUM_AMOUNT_PER_ROUND_BOX3 = 40;
const INTERVAL_TIME_ONE   = 800
const INTERVAL_TIME_TWO   = 850
const INTERVAL_TIME_THREE = 890

//--Array de imágenes
const IMAGE_ARRAY = [
    "src/assets/img/1.jpeg",
    "src/assets/img/2.jpeg",
    "src/assets/img/3.jpeg",
    "src/assets/img/4.jpeg",
    "src/assets/img/5.jpeg",
    "src/assets/img/6.jpeg",
];


const boxOne   = document.querySelector(".transitionOne");
const boxTwo   = document.querySelector(".transitionTwo");
const boxThree = document.querySelector(".transitionThree");
const startPlayingButton = document.querySelector("#play");
const stopPlayingButton  = document.querySelector("#stop");
const showScore  = document.querySelector("#score");


const MATCHING_BOXES_DATA= {
    boxOne: 0,
    boxTwo: 0,
    boxThree: 0
}

export {
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
    showScore,
    MATCHING_BOXES_DATA
}