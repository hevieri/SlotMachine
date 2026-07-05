const MAXIMUM_AMOUNT_PER_ROUND_BOX1 = 25;
const MAXIMUM_AMOUNT_PER_ROUND_BOX2 = 35;
const MAXIMUM_AMOUNT_PER_ROUND_BOX3 = 40;
const INTERVAL_TIME_ONE   = 300;
const INTERVAL_TIME_TWO   = 320;
const INTERVAL_TIME_THREE = 340;

const IMAGE_ARRAY = [
  "assets/img/1.jpeg",
  "assets/img/2.jpeg",
  "assets/img/3.jpeg",
  "assets/img/4.jpeg",
  "assets/img/5.jpeg",
  "assets/img/6.jpeg",
];

const boxOne   = document.querySelector("#boxOne .box-img");
const boxTwo   = document.querySelector("#boxTwo .box-img");
const boxThree = document.querySelector("#boxThree .box-img");
const reelOne   = document.querySelector("#boxOne");
const reelTwo   = document.querySelector("#boxTwo");
const reelThree = document.querySelector("#boxThree");
const startPlayingButton = document.querySelector("#play");
const stopPlayingButton  = document.querySelector("#stop");
const showScore  = document.querySelector("#score");
const showReward = document.querySelector("#reward");

const MATCHING_BOXES_DATA = {
  boxOne: 0,
  boxTwo: 0,
  boxThree: 0
};

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
  reelOne,
  reelTwo,
  reelThree,
  startPlayingButton,
  stopPlayingButton,
  showScore,
  showReward,
  MATCHING_BOXES_DATA
};
