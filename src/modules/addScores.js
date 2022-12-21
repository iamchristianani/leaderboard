import showScore from './scoreDisplay.js';
import uploadScore from './scoreUploader.js';
import { scoreBox } from './variableList.js';

let scoreArr = [];

// Display all scores
const renderDisplay = () => {
  scoreBox.innerHTML = '';
  scoreArr.forEach((score, index) => {
    const oneScore = document.createElement('li');
    oneScore.id = index;
    oneScore.className = 'score-info';
    oneScore.innerHTML = `
    ${score.user}: ${score.score}
    `;
    scoreBox.appendChild(oneScore);
  });
};

const refreshPage = async () => {
  const arr = await showScore();
  scoreArr = await arr;
  renderDisplay();
};

const addScore = async (name, value) => {
  const eachScore = {};
  eachScore.id = scoreArr.length + 1;
  eachScore.user = name;
  eachScore.score = value;
  scoreArr.push(eachScore);
  uploadScore(eachScore);
};

export { renderDisplay, addScore, refreshPage };