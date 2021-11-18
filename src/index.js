import './style.css';
import { postScore, getTable } from './consume-api';

const form = document.querySelector('#form');
const refresh = document.querySelector('#refresh');
const scores = document.querySelector('.scores');
const player = document.querySelector('.your-name');
const score = document.querySelector('.your-score');

const render = async () => {
  const DataFromAPI = await getTable();
  const data = DataFromAPI.result;
  const sortedDatat = data.sort((a, b) => b.score - a.score);
  const scores = document.querySelector('.scores');
  sortedDatat.forEach((element) => {
    scores.innerHTML += `<li>${element.user}:${element.score}</li>`;
  });
};
document.addEventListener('DOMContentLoaded', async () => {
  await render();
});
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  await postScore(player.value, score.value);
  player.value = '';
  score.value = '';
});

refresh.addEventListener('click', async () => {
  scores.innerHTML = '';
  await render();
});