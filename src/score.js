import {
    boxOne,
    boxTwo,
    boxThree,
    startPlayingButton,
    stopPlayingButton,
    showScore,
    MATCHING_BOXES_DATA,
} from './constants.js';

let SCORE = 0;

const updateScoreView   = ()=>{

    showScore.innerText = SCORE;
    console.log("Update Score:: ", SCORE);
}

const calculateScore = ()=>{
    const box1 = MATCHING_BOXES_DATA.boxOne;
    const box2 = MATCHING_BOXES_DATA.boxTwo;
    const box3 = MATCHING_BOXES_DATA.boxThree;
    
    if(box1 === box2 && box2 === box3 ) return 100;
    if(box1 === box2 || box1 === box3 ||  box2 === box3 ) return 50;

    return -10;
}

const setAmount = () =>{
    const getNewScore = calculateScore();
    SCORE = SCORE + getNewScore;

    if(SCORE <= 0) SCORE = 0;
    updateScoreView();
}

export {
    setAmount
}