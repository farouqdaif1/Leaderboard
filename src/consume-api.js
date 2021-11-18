const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/qpJzDrNKPfT9yfzINpnR/scores';

const getTable = async () => {
  const scores = await fetch(baseUrl, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return scores.json();
};

const postScore = async (userInput, scoreInput) => {
  const postScores = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(
      {
        user: userInput,
        score: scoreInput,
      },
    ),

  });
  return postScores.json();
};

export { getTable, postScore };
