import showScore from './scoreDisplay.js';
import uploadScore from './scoreUploader.js';
import { scoreTable} from './variableList.js';

let scoreArr = [];

// Display all scores
const renderDisplay = () => {
  scoreTable.innerHTML = `
    <tr>
      <th>Player</th>
      <th>Score</th>
    </tr>
  `;
  if (scoreArr.length === 0) {
    const noScore = document.createElement('tr');
    noScore.innerHTML =  `
      <td class="empty-table" colspan="2">
        <i class="fa-regular fa-face-smile face-icon"></i>
        <p class="empty-text">Add a new score or click the refresh button!</p>
      </td>
    `;
    scoreTable.appendChild(noScore);
  }
  scoreArr.forEach((score, index) => {
    const oneScore = document.createElement('tr');
    oneScore.id = index;
    oneScore.className = 'score-info';
    oneScore.innerHTML = `
      <td>${score.user}</td>
      <td>${score.score}</td> 
    `;
    scoreTable.appendChild(oneScore)
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