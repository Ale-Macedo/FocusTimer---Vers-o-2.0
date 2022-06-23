const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonAdd = document.querySelector('.add')
const buttonRemover = document.querySelector('.remover')

function Add() {
  piscadela = setTimeout(function () {
    buttonAdd.classList.remove('focus')
  }, 200)
  buttonAdd.classList.add('focus')
  if (buttonPlay.classList.contains('focus')) {
    buttonPlay.classList.remove('focus')
  }
}
function Remove() {
  piscadela = setTimeout(function () {
    buttonRemover.classList.remove('focus')
  }, 200)
  buttonRemover.classList.add('focus')
  if (buttonPlay.classList.contains('focus')) {
    buttonPlay.classList.remove('focus')
  }
}




const soundsForest = new Audio('./sons/Floresta.wav')
const soundsChuva = new Audio('./sons/Chuva.wav')
const soundsCoffee = new Audio('./sons/Cafeteria.wav')
const soundsBonfire = new Audio('./sons/Lareira.wav')
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

function sounds() {
  switch (buttonForest.classList.contains('focus')) {
    case true:
      soundsForest.play()
      soundsForest.loop = true
      break;
  
    default:
      soundsForest.pause()
      break;
  }
  switch (buttonRain.classList.contains('focus')) {
    case true:
      soundsChuva.play()
      soundsChuva.loop = true
      break;
  
    default:
      soundsChuva.pause()
      break;
  }
  switch (buttonCoffee.classList.contains('focus')) {
    case true:
      soundsCoffee.play()
      soundsCoffee.loop = true
      break;
  
    default:
      soundsCoffee.pause()
      break;
  }
  switch (buttonBonfire.classList.contains('focus')) {
    case true:
      soundsBonfire.play()
      soundsBonfire.loop = true
      break;
  
    default:
      soundsBonfire.pause()
      break;
  }
}




const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffee = document.querySelector('.coffee')
const buttonBonfire = document.querySelector('.bonfire')

function Forest() {
  if (buttonForest.classList.contains('focus')) {
    buttonForest.classList.remove('focus')

  } else {
    buttonForest.classList.add('focus')
    buttonRain.classList.remove('focus')
    buttonCoffee.classList.remove('focus')
    buttonBonfire.classList.remove('focus')
    
  }
}
function Rain() {
  if (buttonRain.classList.contains('focus')) {
    buttonRain.classList.remove('focus')
    
  } else {
    buttonRain.classList.add('focus')
    buttonForest.classList.remove('focus')
    buttonCoffee.classList.remove('focus')
    buttonBonfire.classList.remove('focus')
    
  }
}
function Coffee() {
  if (buttonCoffee.classList.contains('focus')) {
    buttonCoffee.classList.remove('focus')
  } else {
    buttonCoffee.classList.add('focus')
    buttonForest.classList.remove('focus')
    buttonRain.classList.remove('focus')
    buttonBonfire.classList.remove('focus')
  }
}
function Bonfire() {
  if (buttonBonfire.classList.contains('focus')) {
    buttonBonfire.classList.remove('focus')
  } else {
    buttonBonfire.classList.add('focus')
    buttonForest.classList.remove('focus')
    buttonRain.classList.remove('focus')
    buttonCoffee.classList.remove('focus')
  }
}




const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

function updateDisplay(minutes, seconds) {
  minutes = minutes === undefined ? 25 : minutes
  seconds = seconds === undefined ? 0 : seconds
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}
function countdown() {
  timerTimeOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    let finished = minutes <= 0 && seconds <= 0
    updateDisplay(minutes, 0)

    if (finished) {
      kitchenTimer.play()
      updateDisplay()
      // play()
      return
    }

    if (seconds <= 0) {
      seconds = 60
      --minutes
    }

    updateDisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)
}




buttonPlay.addEventListener('click', function () {
  countdown()
})

buttonStop.addEventListener('click', function () {
  updateDisplay(0, 0)
})

buttonAdd.addEventListener('click', function () {
  Add()
  minutesDisplay.textContent = String(
    Number(minutesDisplay.textContent) + 5
  ).padStart(2, '0')
})

buttonRemover.addEventListener('click', function () {
  Remove()
  if (minutesDisplay.textContent <= 4) {
    updateDisplay(0, 0)
  } else {
    minutesDisplay.textContent = String(Number(minutesDisplay.textContent) - 5).padStart(2, '0')
  }
})

buttonForest.addEventListener('click', function () {
  Forest()
  sounds()
})

buttonRain.addEventListener('click', function () {
  Rain()
  sounds()
})

buttonCoffee.addEventListener('click', function () {
  Coffee()
  sounds()
})

buttonBonfire.addEventListener('click', function () {
  Bonfire()
  sounds()
})
