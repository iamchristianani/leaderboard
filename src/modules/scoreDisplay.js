const showScore = async () => {
  const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/toTmD8xktIACo3ohDmiT/scores/';
  const response = await fetch(requestURL);
  const myScores = await response.json();
  const myScoreList = myScores.result;

  return myScoreList;
};

export default showScore;