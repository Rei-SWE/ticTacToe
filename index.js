const text = document.querySelector('#text')
const gameborad = document.querySelector('.gameborad')
const startButton = document.querySelector('.strat-button')
const countNumber = document.querySelector(".match-time")
const max = 10;
let isClicked = false;
let turn = 'o';
const p = document.querySelector('.block p');





/* 3X3 게임보드 생성 함수 + 게임 승리조건 */
const startGame = () => {
  for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
      let divEle = document.createElement('div')
      let p = document.createElement('p')
      divEle.id = `${i}${j}`;
      divEle.className = 'block';
      gameborad.appendChild(divEle)
      divEle.appendChild(p)
      divEle.addEventListener('mouseover', () => {
        divEle.animate({opacity: [0, 1]}, 1000)
      // console.log(divEle.id);
       });

      divEle.addEventListener('click', () => {
        if(p.textContent !== ''){
          alert('에러');
          return;
        }
          p.textContent = turn;
        if(turn === 'o'){
            p.style.color = 'red'
            turn = 'x'
          } else if(turn === 'x'){
            turn = 'o'
          }
        })
      }
    } 
  }

startGame();


const clickDiv = (event) => {
  event.target.textContent = turn;
  console.log('turn: ' + turn)
}

/*타이머 설정 */
function countTime(countNumber, max) {
  let isPaused = false;
  let intervalId;
  let minutes = Math.floor(max / 60);
  let seconds = max % 60;

  function start() {
    intervalId = setInterval(() => {
      countNumber.textContent = `⌛ ${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
      
      if (max < 1) {
        clearInterval(intervalId);
        alert('Game Over!');
        max = 11;
        
        startButton.innerHTML =  `<button>➡️ Play </button>`
        isClicked = false;
        }
        max--;
        minutes = Math.floor(max / 60);
        seconds = max % 60;
        console.log('max: ' + max)
      }, 1000);
  }

  function pause() {
    isPaused = true;
    clearInterval(intervalId);
  }

  function resume() {
    isPaused = false;
    start();
  }
  
  return {
    start,
    pause,
    resume
  };
}


const { start, pause, resume } = countTime(countNumber, max);

startButton.addEventListener('click', () => {

    if(!isClicked){
    isClicked = true;
    countTime(countNumber, max);
    startButton.innerHTML =  `<button>⏹️ Pause</button>`
    text.textContent =  'Play Game'
    start();
  } else {
    isClicked = false;
    startButton.innerHTML =  `<button>➡️ Play </button>`
    pause();

  }
});

