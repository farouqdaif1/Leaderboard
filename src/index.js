import './style.css';

const scores = [
  {
    name: 'name',
    scores: 100,
  },
  {
    name: 'name',
    scores: 20,
  },
  {
    name: 'name',
    scores: 50,
  },
  {
    name: 'name',
    scores: 78,
  },
  {
    name: 'name',
    scores: 125,
  },
  {
    name: 'name',
    scores: 77,
  },
];
const list = document.querySelector('.scores');
scores.forEach((score) => {
  list.innerHTML += `<li>${score.name}:${score.scores}</li>`;
});