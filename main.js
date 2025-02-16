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

function pickRandom(){
  computerNum = Math.floor(Math.random()*100) + 1
  console.log("정답",computerNum)
}
function play(){
  let userValue = userInput.value;
  if(userValue < computerNum){
    resultArea.textContent = "UP!!!"
  } else if(userValue > computerNum){
    resultArea.textContent = "DOWN!!!"
  } else {
    resultArea.textContent = "맞췄습니다."
  }
}
pickRandom()