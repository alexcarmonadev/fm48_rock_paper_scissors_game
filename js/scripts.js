/* ------------LAS CONSTANTES------------ */
const scoreNumber = document.querySelector('.score-number');
const btns = document.querySelector('.main__btns');
const mainBtns = document.querySelectorAll('.main-btn');
const mainShow = document.querySelector('.main__show');
const showUser = document.querySelector('.show-user');
const showHouse = document.querySelector('.show-house');
const showUserBtn = mainShow.querySelector('.show-user-btn');
const showHouseBtn = mainShow.querySelector('.show-house-btn');
const showResult = document.querySelector('.show-result');
const showPlayBtn = document.querySelector('.show-play-btn');
const modalBox = document.querySelector('.modal-box');
const modalBtn = document.querySelector('.modal-btn');
const modalBtnClose = document.querySelector('.modal-btn-close');
const options = ['rock', 'paper', 'scissors'];
const overlay = document.querySelector('.overlay');

/* ------------LA MODAL------------ */
modalBtn.addEventListener('click', () => {
  overlay.style.display = 'block';
  modalBox.style.display = 'block';
});

modalBtnClose.addEventListener('click', () => {
  overlay.style.display = 'none';
  modalBox.style.display = 'none';
});

/* ------------EL JUEGO------------ */
const start = (e) => {
  showUserBtn.classList.remove('rock', 'paper', 'scissors');
  showHouseBtn.classList.remove('rock', 'paper', 'scissors');
  showPlayBtn.style.display = 'none';
  showResult.style.display = 'none';

  const selectedUserBtn = e.target.dataset.btn;
  const randomNumber = Math.floor(Math.random() * 3);
  const selectedHouseBtn = options[randomNumber];

  mainShow.style.display = 'block';
  btns.style.display = 'none';
  showUserBtn.classList.toggle(selectedUserBtn);
  totalScore = 0;

  winner = () => {
    totalScore = parseInt(scoreNumber.innerHTML);
    const showPoints = () => {
      setTimeout(() => {
        scoreNumber.innerHTML = totalScore;
      }, 1000);
    };

    if (selectedUserBtn == selectedHouseBtn) {
      showResult.textContent = 'DRAW';
    } else if (
      (selectedUserBtn == 'rock' && selectedHouseBtn == 'paper') ||
      (selectedUserBtn == 'paper' && selectedHouseBtn == 'scissors') ||
      (selectedUserBtn == 'scissors' && selectedHouseBtn == 'rock')
    ) {
      totalScore -= 1;
      showResult.textContent = 'YOU LOSE';
      setTimeout(() => {
        showHouse.style.display = 'block';
        showUser.style.display = 'none';
      }, 1000);
      showPoints();
    } else {
      totalScore += 1;
      showResult.textContent = 'YOU WIN';
      setTimeout(() => {
        showUser.style.display = 'block';
        showHouse.style.display = 'none';
      }, 1000);
      showPoints();
    }
  };

  setTimeout(() => {
    showHouseBtn.style.display = 'block';
    showHouseBtn.classList.add(selectedHouseBtn);
    setTimeout(() => {
      showResult.style.display = 'block';
      showPlayBtn.style.display = 'block';
    }, 1000);
  }, 1000);

  setTimeout(() => {
    winner();
  }, 1000);
};

showPlayBtn.addEventListener('click', () => {
  btns.style.display = 'block';
  mainShow.style.display = 'none';
  showUser.style.display = 'none';
  showHouse.style.display = 'none';
});

for (let mainBtn of mainBtns) {
  mainBtn.addEventListener('click', start);
}