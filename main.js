/**게임 화면으로 이동 */
const playgameButton = document.querySelector('.header_playbutton')

playgameButton.addEventListener('click' , () => {
  const header = document.querySelector('header')
  const main = document.querySelector('main')
  header.style.display = 'none';
  main.style.display = 'block';
})

/*타이머 설정 */
const playAgain = document.querySelector('.footer_button')
const time = document.querySelector('.status_time')
let intervalId;

function countTime(max) {
  clearInterval(intervalId)
  let minutes = Math.floor(max / 60);
  let seconds = max % 60;
  intervalId = setInterval(() => {
      time.textContent = ` ${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
      if (max < 1) {
        clearInterval(intervalId);
        alert('Game Over!');
        max = 300
        }
        max--;
        minutes = Math.floor(max / 60);
        seconds = max % 60;
        console.log('max: ' + max)
      }, 1000);
    }

playAgain.addEventListener('click', function() {
  countTime(300);
});


/** 3X3 게임보드 생성  */
const boardBox = document.querySelectorAll('.board_box');
const boardCOunt = document.querySelectorAll('.board_count')
const startGame = () => {
  boardBox.forEach((box, index) => {
    const x = Math.floor(index / 3);
    const y = index % 3;
    box.addEventListener('click', () => {
      console.log(`${x}${y}`);
    });
  })
  ;
};

startGame();

// boardBox.forEach((box) => {
//   box.addEventListener('click', console.log(`${box.id}`));
// });
// const text = document.querySelector('#text')
// const gameborad = document.querySelector('.gameborad')
// const startButton = document.querySelector('.strat-button')
// const countNumber = document.querySelector(".match-time")
// const max = 10;
// let isClicked = false;
// let turn = 'o';
// const p = document.querySelector('.block p');





// /* 3X3 게임보드 생성 함수 + 게임 승리조건 */
// const startGame = () => {
//   for(let i = 0; i < 3; i++){
//     for(let j = 0; j < 3; j++){
//       let divEle = document.createElement('div')
//       let p = document.createElement('p')
//       divEle.id = `${i}${j}`;
//       divEle.className = 'block';
//       gameborad.appendChild(divEle)
//       divEle.appendChild(p)
//       divEle.addEventListener('mouseover', () => {
//         divEle.animate({opacity: [0, 1]}, 1000)
//       // console.log(divEle.id);
//        });

//       divEle.addEventListener('click', () => {
//         if(p.textContent !== ''){
//           alert('에러');
//           return;
//         }
//           p.textContent = turn;
//         if(turn === 'o'){
//             p.style.color = 'red'
//             turn = 'x'
//           } else if(turn === 'x'){
//             turn = 'o'
//           }
//         })
//       }
//     } 
//   }

// startGame();


// const clickDiv = (event) => {
//   event.target.textContent = turn;
//   console.log('turn: ' + turn)
// }
