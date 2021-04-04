const question = 'あいうえお問題文';
const answers = [
  '1',
  '2',
  '3',
  '4'
];

const correct = '2';
const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

//クイズの問題表示（関数）
const setupQuiz = () => {
  document.getElementById("js-question").textContent = question;
  let buttonindex = 0;
  while(buttonindex < buttonLength){
    $button[buttonindex].textContent = answers[buttonindex];
    buttonindex++;
  }
}

setupQuiz();

const clickHandler = (e) => {
  if(correct === e.target.textContent){
    window.alert('正解!');
  } else {
    window.alert('不正解!');
  }
};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
};



