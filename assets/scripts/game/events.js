'use strict'
const store = require('../store')
const api = require('./api')
const ui = require('./ui')
const getFormsFields = require('./../../../lib/get-form-fields')
let gameIsOver = false
let board = ['', '', '', '', '', '', '', '', '']
let moveCount = 0
let player1 = 'X'
const switchPlayers = function () {
  if (player1 === 'X') {
    player1 = 'O'
  } else player1 = 'X'
}

// SignUP
const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormsFields(form)
  console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

// SignIN
const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormsFields(form)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

// changePassword
const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormsFields(form)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

// signOUT
const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// StartGame
const onStartGame = function (event) {
  event.preventDefault()

  api.startGame()
    .then(ui.startGameSuccess)
    .catch(ui.startGameFailure)
}

const onClickBox = function (event) {
  event.preventDefault()
  if (!this.innerHTML) {
    this.innerHTML = player1
    store.userInput = this.id
    board[store.userInput] = this.innerHTML
    moveCount += 1
    api.xo(store.userInput, store.player1, store.gameIsOver)
      .then(ui.clickBoxSuccess)
      .catch(ui.clickBoxFailure)
    winCheck()
    drawCheck()
    switchPlayers()
    console.log(board)
  } else {
    alert('Position has been taken! Try again.')
  }
}

const winCheck = function () {
  if (board[0] !== '' && board[0] === board[1] && board[0] === board[2]) {
    gameIsOver = true
    $('#win-lose').html(`${player1} WON!`)
    $('#win-lose').show()
  } else if (board[0] !== '' && board[0] === board[3] && board[0] === board[6]) {
    gameIsOver = true
    $('#win-lose').html(`${player1} WON!`)
    $('#win-lose').show()
  } else if (board[1] !== '' && board[1] === board[4] && board[1] === board[7]) {
    gameIsOver = true
    $('#win-lose').html(`${player1} WON!`)
    $('#win-lose').show()
  } else if (board[2] !== '' && board[2] === board[5] && board[2] === board[8]) {
    gameIsOver = true
    $('#win-lose').html(`${player1} WON!`)
    $('#win-lose').show()
  } else if (board[2] !== '' && board[2] === board[4] && board[2] === board[6]) {
    gameIsOver = true
    $('#win-lose').html(`${player1} WON!`)
    $('#win-lose').show()
  } else if (board[3] !== '' && board[3] === board[4] && board[3] === board[5]) {
    gameIsOver = true
    $('#win-lose').html(`${player1} WON!`)
    $('#win-lose').show()
  } else if (board[6] !== '' && board[6] === board[7] && board[6] === board[8]) {
    gameIsOver = true
    $('#win-lose').html(`${player1} WON!`)
    $('#win-lose').show()
  } else if (board[0] !== '' && board[0] === board[4] && board[0] === board[8]) {
    gameIsOver = true
    $('#win-lose').html(`${player1} WON!`)
    $('#win-lose').show()
  }
}

const drawCheck = function () {
  if (moveCount === 9 && gameIsOver === false) {
    $('#draw').html('Draw!')
    $('#draw').show()
    console.log('Draw')
    console.log(gameIsOver)
  }
}
const onResetFunction = function (event) {
  event.preventDefault()
  api.startGame()
    .then(ui.startGameSuccess)
    .catch(ui.startGameFailure)
  board = ['', '', '', '', '', '', '', '', '']
  moveCount = 0
  gameIsOver = false
}
const addHandlers = function () {
  $('#sign-in').on('submit', onSignIn)
  $('#sign-up').on('submit', onSignUp)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#start-game').on('submit', onStartGame)
  $('#reset').on('submit', onResetFunction)
  $('#0').on('click', onClickBox)
  $('#1').on('click', onClickBox)
  $('#2').on('click', onClickBox)
  $('#3').on('click', onClickBox)
  $('#4').on('click', onClickBox)
  $('#5').on('click', onClickBox)
  $('#6').on('click', onClickBox)
  $('#7').on('click', onClickBox)
  $('#8').on('click', onClickBox)
}
module.exports = {
  addHandlers
}
