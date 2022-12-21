import './css/style.css';
import {
  refreshBtn, inputForm, formName, formScore, warningText,
} from './modules/variableList.js';
import { renderDisplay, addScore,refreshPage } from './modules/addScores.js';

window.addEventListener('load', () => {
  renderDisplay();
});

inputForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (formName.value === '' || formScore.value === '') {
    warningText.classList.remove('warning-display');
    setTimeout(() => {
      warningText.classList.add('warning-display');
    }, 2000);
    return;
  }
  addScore(formName.value, formScore.value);
  formName.value = '';
  formScore.value = '';
  renderDisplay();
});

refreshBtn.addEventListener('click', () => {
  refreshPage();
});

