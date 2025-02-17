//랜덤번호 지정
//유저가 번호 입력 go버튼 누름
// 유저가 맞추면 맞춤
// 유저번호보다 크면 down
// 유저번호보다 작으면 up
// reset시 게임 리셋
// 5번 기회 다쓰면 게임 끝
// 유저 1~100 범위 밖 숫자 입력하면 알려준다. 기회 안깎음
// 입력한 거 또 입력하면 알려줌. 기회 안 깎음.

let computerNum = 0
let playButton = document.getElementById("play-button")
playButton.addEventListener("click",play)
let userInput = document.getElementById("user-input")
let resultArea = document.getElementById("result-area")
let resetButton = document.getElementById("reset-button")
resetButton.addEventListener("click",reset)
let rightAnswer = document.getElementById("right-answer")
let realRemainNumber = 3;
let remainChance = document.getElementById("remain-chance")
let gameOver = false;
let history = []

userInput.addEventListener("focus",function(){
  userInput.value="";
})

function pickRandom(){
  computerNum = Math.floor(Math.random()*100) + 1
  console.log("정답",computerNum)
  rightAnswer.textContent = computerNum;
}
function play(){
  
  let userValue = userInput.value;
  if(userValue<1 || userValue > 100){
    resultArea.textContent = "1과 100사이 숫자를 입력해 주세요"
    return
  }
  if(history.includes(userValue)){
    resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요."
    return;
  }
  realRemainNumber = realRemainNumber-1
  if(userValue < computerNum){
    resultArea.textContent = "UP!!!"
  } else if(userValue > computerNum){
    resultArea.textContent = "DOWN!!!"
  } else {
    resultArea.textContent = "맞췄습니다."
    gameOver=true;
  }

  history.push(userValue)


  remainChance.textContent = realRemainNumber
  if(realRemainNumber <=0){
    gameOver = true;
  }
  if(gameOver==true){
    playButton.disabled = true;
  }
}
function reset() {
  //user input창이 깨끗하게 정리됨
  userInput.value = ""
  //새로운 번호 생성
  pickRandom()
  resultArea.textContent="결과값이 여기 나옵니다"
  realRemainNumber = 3;
  remainChance.textContent = realRemainNumber;
}


pickRandom()