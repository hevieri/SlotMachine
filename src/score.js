import {
    showScore,
    MATCHING_BOXES_DATA,
} from './constants.js';

let SCORE = 0;

const updateScoreView   = ()=>{
    showScore.innerText = SCORE;
}

const calculateScore = ()=>{
    const box1 = MATCHING_BOXES_DATA.boxOne;
    const box2 = MATCHING_BOXES_DATA.boxTwo;
    const box3 = MATCHING_BOXES_DATA.boxThree;
    
    if(box1 === box2 && box2 === box3 ) return 100;
    if(box1 === box2 || box1 === box3 ||  box2 === box3 ) return 50;

    return -10;
}


function addAnimation(type){

    const boxPointer = {

        box1AndBox2: ()=>{
            const box1 = document.querySelector("#boxOne");
            const box2 = document.querySelector("#boxTwo");
            box1.classList.add("winning-boxes");
            box2.classList.add("winning-boxes");
     
             setTimeout(()=>{
                box1.classList.remove("winning-boxes");            
                box2.classList.remove("winning-boxes");            
             },1500);

        },

        box1AndBox3: ()=>{
            const box1 = document.querySelector("#boxOne");
            const box3 = document.querySelector("#boxThree");
            box1.classList.add("winning-boxes");
            box3.classList.add("winning-boxes");
     
             setTimeout(()=>{
                box1.classList.remove("winning-boxes");            
                box3.classList.remove("winning-boxes");            
             },1500);
        },

        box2AndBox3: ()=>{
            const box2 = document.querySelector("#boxTwo");
            const box3 = document.querySelector("#boxThree");
            box2.classList.add("winning-boxes");
            box3.classList.add("winning-boxes");
     
             setTimeout(()=>{
                box2.classList.remove("winning-boxes");            
                box3.classList.remove("winning-boxes");            
             },1500);
        },

        allBoxes: ()=>{
            const boxes = document.querySelector('.caja');
            boxes.classList.add("winning-boxes");
     
             setTimeout(()=>{
                 boxes.classList.remove("winning-boxes");            
             },1500);
        },

    }
    
    boxPointer[type]();

}


const animateWinningBoxes = () =>{

    const box1 = MATCHING_BOXES_DATA.boxOne;
    const box2 = MATCHING_BOXES_DATA.boxTwo;
    const box3 = MATCHING_BOXES_DATA.boxThree;

    if( box1 === box2 && box2 === box3 ){
        const type = "allBoxes";
        addAnimation(type);
    }

    if( box1 === box2 ){
        const type = "box1AndBox2";
        addAnimation(type);
    }

    if( box1 === box3 ){
        const type = "box1AndBox3";
        addAnimation(type);
    }

    if( box2 === box3 ){
        const type = "box2AndBox3";
        addAnimation(type);
    }

}

const setAmount = () =>{

    const getNewScore = calculateScore();
    SCORE = SCORE + getNewScore;
    
    if(SCORE <= 0) SCORE = 0;
    
    updateScoreView();
    animateWinningBoxes();
    
}

export {
    setAmount
}