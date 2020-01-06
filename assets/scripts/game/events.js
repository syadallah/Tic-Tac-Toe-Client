'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormsFields = require('./../../../lib/get-form-fields')

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
  const form = event.target
  const data = getFormsFields(form)
  api.onStartGame(data)
    .then(ui.startGame)
    .catch(ui.signInFailure)
}
const addHandlers = function () {
  $('#sign-in').on('submit', onSignIn)
  $('#sign-up').on('submit', onSignUp)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#start-game').on('submit', onStartGame)
}
module.exports = {
  addHandlers
}
