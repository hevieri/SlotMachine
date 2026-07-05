import {
    showScore,
    showReward,
    MATCHING_BOXES_DATA,
    reelOne,
    reelTwo,
    reelThree,
} from './constants.js';

let SCORE = 0;

const updateScoreView = () => {
    showScore.innerText = SCORE;
}

const calculateScore = () => {
    const box1 = MATCHING_BOXES_DATA.boxOne;
    const box2 = MATCHING_BOXES_DATA.boxTwo;
    const box3 = MATCHING_BOXES_DATA.boxThree;

    if(box1 === box2 && box2 === box3) return 100;
    if(box1 === box2 || box1 === box3 || box2 === box3) return 50;

    return -10;
}

const addWinAnimation = (reels) => {
    reels.forEach(reel => {
        reel.classList.add("win");
        setTimeout(() => reel.classList.remove("win"), 2400);
    });
}

const fireConfetti = () => {
    const container = document.getElementById('confetti-container');
    const colors = ['#ffd700', '#ff6b6b', '#ff4757', '#ffa502', '#ff6348', '#ffd700', '#b8860b'];
    const shapes = ['■', '●', '▲', '★', '♦'];

    for(let i = 0; i < 80; i++) {
        const el = document.createElement('div');
        el.className = 'confetti-piece';
        el.textContent = shapes[Math.floor(Math.random() * shapes.length)];
        el.style.left = Math.random() * 100 + '%';
        el.style.color = colors[Math.floor(Math.random() * colors.length)];
        el.style.fontSize = (Math.random() * 14 + 8) + 'px';
        el.style.animationDuration = (Math.random() * 2 + 2) + 's';
        el.style.animationDelay = (Math.random() * 1.5) + 's';
        container.appendChild(el);

        setTimeout(() => el.remove(), 5000);
    }
}

const animateWinningBoxes = () => {
    const box1 = MATCHING_BOXES_DATA.boxOne;
    const box2 = MATCHING_BOXES_DATA.boxTwo;
    const box3 = MATCHING_BOXES_DATA.boxThree;
    const points = calculateScore();

    if(points <= 0) return;

    const reelsToAnimate = [];

    if(box1 === box2) { reelsToAnimate.push(reelOne, reelTwo); }
    if(box1 === box3 && !reelsToAnimate.includes(reelOne)) { reelsToAnimate.push(reelOne, reelThree); }
    if(box2 === box3 && !reelsToAnimate.includes(reelTwo) && !reelsToAnimate.includes(reelThree)) {
        reelsToAnimate.push(reelTwo, reelThree);
    }
    if(box1 === box2 && box2 === box3) {
        reelsToAnimate.length = 0;
        reelsToAnimate.push(reelOne, reelTwo, reelThree);
    }

    addWinAnimation(reelsToAnimate);
    showReward.innerText = '+' + points;
    fireConfetti();

    setTimeout(() => { showReward.innerText = '-'; }, 3000);
}

const setAmount = () => {
    const getNewScore = calculateScore();
    SCORE = SCORE + getNewScore;

    if(SCORE <= 0) SCORE = 0;

    updateScoreView();

    if(getNewScore > 0) {
        animateWinningBoxes();
    } else {
        showReward.innerText = getNewScore;
        setTimeout(() => { showReward.innerText = '-'; }, 2000);
    }
}

export {
    setAmount
}
