import './css/style.css';
import { setAmount } from './score.js';
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
    reelOne,
    reelTwo,
    reelThree,
    startPlayingButton,
    stopPlayingButton,
    MATCHING_BOXES_DATA
} from './constants.js';

let stop = false;
let ideIntervals = [];

const getRandomNumber = () => {
   const numberImages = IMAGE_ARRAY.length;
   return Math.floor((Math.random() * numberImages));
}

const stopInterval = (ide) => {
    clearInterval(ide);
    ideIntervals.shift();

    if(ideIntervals.length == 0){
        setAmount();
        resetButton();
    }
}

const applySpinEffect = (reelEl) => {
    reelEl.classList.add('spinning-fast');
}

const removeSpinEffect = (reelEl) => {
    reelEl.classList.remove('spinning-fast');
}

const startChangingImages = () => {
    if(ideIntervals.length > 0) return;
    ideIntervals = [];
    stop = false;

    let counter1 = 0;
    applySpinEffect(reelOne);
    const ideInterval1 = setInterval(() => {
        counter1++;
        const randomImageNumber = getRandomNumber();
        const isBoxMaxReached = (stop === true || counter1 === MAXIMUM_AMOUNT_PER_ROUND_BOX1);
        boxOne.style.backgroundImage = `url(${IMAGE_ARRAY[randomImageNumber]})`;

        if(isBoxMaxReached){
            MATCHING_BOXES_DATA.boxOne = randomImageNumber;
            removeSpinEffect(reelOne);
            stopInterval(ideInterval1);
        }
    }, INTERVAL_TIME_ONE);

    let counter2 = 0;
    applySpinEffect(reelTwo);
    const ideInterval2 = setInterval(() => {
        counter2++;
        const randomImageNumber = getRandomNumber();
        const isBoxMaxReached = (stop === true || counter2 === MAXIMUM_AMOUNT_PER_ROUND_BOX2);
        boxTwo.style.backgroundImage = `url(${IMAGE_ARRAY[randomImageNumber]})`;

        if(isBoxMaxReached){
            MATCHING_BOXES_DATA.boxTwo = randomImageNumber;
            removeSpinEffect(reelTwo);
            stopInterval(ideInterval2);
        }
    }, INTERVAL_TIME_TWO);

    let counter3 = 0;
    applySpinEffect(reelThree);
    const ideInterval3 = setInterval(() => {
        counter3++;
        const randomImageNumber = getRandomNumber();
        const isBoxMaxReached = (stop === true || counter3 === MAXIMUM_AMOUNT_PER_ROUND_BOX3);
        boxThree.style.backgroundImage = `url(${IMAGE_ARRAY[randomImageNumber]})`;

        if(isBoxMaxReached){
            MATCHING_BOXES_DATA.boxThree = randomImageNumber;
            removeSpinEffect(reelThree);
            stopInterval(ideInterval3);
        }
    }, INTERVAL_TIME_THREE);

    ideIntervals.push(ideInterval1, ideInterval2, ideInterval3);
}

const handleButtons = () => {
    startPlayingButton.style.display = "none";
    stopPlayingButton.style.display = "inline-flex";
}

startPlayingButton.addEventListener("click", () => {
    startChangingImages();
    handleButtons();
});

stopPlayingButton.addEventListener("click", resetButton);

function resetButton(){
    stop = true;
    stopPlayingButton.style.display = "none";
    setTimeout(() => {
        startPlayingButton.style.display = "inline-flex";
    }, 700);
}
