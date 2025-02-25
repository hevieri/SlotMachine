import {
    boxOne,
    boxTwo,
    boxThree,
    startPlayingButton,
    stopPlayingButton,
    showScore,
    SCORE,
    MATCHING_BOXES_DATA,
} from './constants.js';


const updateScoreView = ()=>{
    showScore.innerText = SCORE;
    console.log("Update Score:: ", SCORE);
}

const calculateScore = ()=>{
    

}

setTimeout(()=>{
    updateScoreView();
},500)

export {

}