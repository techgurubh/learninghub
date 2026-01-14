const home = document.getElementById('home');
const numbers = document.getElementById('numbers');
const flowersSection = document.getElementById('flowers');
const quiz = document.getElementById('quiz');
const backBtn = document.getElementById('backBtn');

function goHome(){
  home.classList.remove('hidden');
  numbers.classList.add('hidden');
  flowersSection.classList.add('hidden');
  quiz.classList.add('hidden');
  backBtn.classList.add('hidden');
}

function openNumbers(){
  home.classList.add('hidden');
  numbers.classList.remove('hidden');
  backBtn.classList.remove('hidden');
  buildNumbers();
}

function openFlowers(){
  home.classList.add('hidden');
  flowersSection.classList.remove('hidden');
  backBtn.classList.remove('hidden');
  buildFlowers();
}

function buildNumbers(){
  const grid = document.getElementById('numberGrid');
  grid.innerHTML='';
  for(let i=1;i<=10;i++){
    grid.innerHTML += `<div class="card text-center">${i}<br>${getNumberName(i)}</div>`;
  }
}

function buildFlowers(){
  const grid = document.getElementById('flowerGrid');
  grid.innerHTML='';
  flowers.forEach(f=>{
    grid.innerHTML += `<div class="card text-center text-3xl">${f.emoji}<br>${f.name}</div>`;
  });
}
