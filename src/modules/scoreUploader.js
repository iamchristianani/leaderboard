const uploadScore = async (theScore) => {
  const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/toTmD8xktIACo3ohDmiT/scores/';
  const response = await fetch(requestURL, {
    method: 'POST',
    body: JSON.stringify(theScore),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  await response.json();
};

export default uploadScore;