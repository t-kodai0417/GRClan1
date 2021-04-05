const quiz = [
   {
    question: 'あいうえお問題文',
    answers: [
      '5',
      '2',
      '3',
      '4'
    ],
    correct:'2'
   },{
    question: 'あいうえお問題文2',
    answers: [
      '1',
      '2',
      '3',
      '4'
    ],
    correct:'3'
   },{
    question: 'あいうえお問題文3',
    answers: [
      '1',
      '2',
      '3',
      '4'
    ],
    correct:'4'
   }
];

const quizLength = quiz.length;
let quizIndex = 0;
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
let score = 0;









//クイズの問題表示（関数）
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question
  let buttonindex = 0;
  while(buttonindex < buttonLength){
    $button[buttonindex].textContent = quiz[quizIndex].answers[buttonindex]
    buttonindex++;
  }
}

setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解!');
    score++;
  } else {
    window.alert('不正解!');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    //問題がまだある場合
    setupQuiz();
  } else{
    //問題がもうない場合
    window.alert('終了!');
    window.alert('あなたの正解数は'+ score + '/' + quizLength + 'です！')
    location.href = 'https://grclanofficial.web.fc2.com';
  }
};




let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
};



