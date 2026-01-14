const question = document.getElementById('question');
const options = document.getElementById('options');
const scoreEl = document.getElementById('score');
const feedback = document.getElementById('feedback');

const correctSound = document.getElementById('correctSound');
const wrongSound = document.getElementById('wrongSound');

let score = 0;
let answer = "";

function openQuiz(){
  home.classList.add('hidden');
  quiz.classList.remove('hidden');
  backBtn.classList.remove('hidden');
  score = 0;
  scoreEl.textContent = score;
  nextQuestion();
}

function nextQuestion(){
  options.innerHTML='';
  feedback.textContent='';

  const isFlower = Math.random()>0.5;
  let choices=[];

  if(isFlower){
    const f = flowers[Math.floor(Math.random()*flowers.length)];
    question.textContent = f.emoji;
    answer = f.name;
    choices.push(answer);

    while(choices.length<4){
      const r = flowers[Math.floor(Math.random()*flowers.length)].name;
      if(!choices.includes(r)) choices.push(r);
    }
  } else {
    const n = Math.floor(Math.random()*10)+1;
    question.textContent = n;
    answer = getNumberName(n);
    choices.push(answer);

    while(choices.length<4){
      const r = getNumberName(Math.floor(Math.random()*10)+1);
      if(!choices.includes(r)) choices.push(r);
    }
  }

  choices.sort(()=>Math.random()-.5);

  choices.forEach(c=>{
    const btn=document.createElement('button');
    btn.className="card";
    btn.textContent=c;
    btn.onclick=()=>checkAnswer(c);
    options.appendChild(btn);
  });
}

function checkAnswer(sel){
  if(sel===answer){
    score++;
    feedback.textContent="✅ Correct!";
    correctSound.play();
  }else{
    score=Math.max(0,score-1);
    feedback.textContent="❌ Wrong!";
    wrongSound.play();
  }
  scoreEl.textContent=score;
  setTimeout(nextQuestion,800);
}
