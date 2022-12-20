import { formName, formScore, scoreBox } from "./variableList";

let scoreArr = [];

// Save To Local Directory
const saveToDir = (arr) => {
  const jsonData = JSON.stringify(arr);
  localStorage.setItem('scores', jsonData);
};

//Display all scores
const renderDisplay = () => {
  scoreBox.innerHTML = '';
  scoreArr.forEach((score, index) => {
    const oneScore = document.createElement('li');
    oneScore.id = index;
    oneScore.className = 'score-info';
    oneScore.innerHTML = `
    ${score.name}: ${score.value}
    `;
    scoreBox.appendChild(oneScore);
  })
};

//Push scores to the array and save to local directory
const addScore = (name, value) => {
  const eachScore = {};
  eachScore.id = scoreArr.length + 1;
  eachScore.name = name;
  eachScore.value = value;
  scoreArr.push(eachScore);
  formName.value = '';
  formScore.value = '';
  saveToDir(scoreArr);
}

// Extract From Local Directory and Display
const displayList = () => {
  const getJsonData = localStorage.getItem('scores');
  if (getJsonData) {
    scoreArr = JSON.parse(getJsonData);
  }
  renderDisplay();
};



export {renderDisplay, addScore, displayList};