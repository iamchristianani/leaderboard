import { refreshBtn, formBtn, formName, formScore, scoreBox } from "./variableList";

let scoreArr = [
  {
    id: 1,
    name: 'Peter Peteru',
    value: '100',
  },
  {
    id: 2,
    name: 'John Fashanu',
    value: '30',
  },
  {
    id: 1,
    name: 'Benson Idahosa',
    value: '73',
  },
  {
    id: 1,
    name: 'Alex Ekwueme',
    value: '95',
  },
];

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

export {renderDisplay};