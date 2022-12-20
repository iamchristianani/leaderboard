import "./css/style.css";
import { refreshBtn, inputForm, formName, formScore, warningText } from "./modules/variableList";
import {renderDisplay, addScore, displayList} from "./modules/addScores";
import {refreshPage} from "./modules/refreshFunction";

window.addEventListener('load', () => {
  displayList();
});

inputForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (formName.value == '' || formScore.value == '') {
    warningText.classList.remove('warning-display');
    setTimeout(() => {
      warningText.classList.add('warning-display');
    }, 2000);
    return;
  }
  addScore(formName.value, formScore.value);
  renderDisplay();
})

refreshBtn.addEventListener('click', () => {
  refreshPage();
})
