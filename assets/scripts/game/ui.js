'use strict'
const store = require('./../store')
const signUpSuccess = function (response) {
  $('#sign-up')[0].reset()
  $('#message').html('Successfully signed up!')
  $('#failure-message').hide()
}
const signUpFailure = function () {
  $('#failure-message').text('Sign up failed')
}

// Sign -In
const signInSuccess = function (response) {
  $('#message').html('Successfully signed in!')
  $('#sign-up, #sign-in, .logged-out, #reset, #failure-message').hide()
  $('#start-game,#sign-out, #change-password').show()
  store.user = response.user
}
const signInFailure = function () {
  $('#failure-message').text('The username and/or password you specified are not correct')
}
//
//

// Change password
const changePasswordSuccess = function (response) {
  $('#change-password')[0].reset()
  $('#message').text('Password Changed!')
  $('#failure-message').hide()
}
const changePasswordFailure = function () {
  $('#failure-message').text('Failed to change password')
}

const signOutSuccess = function (response) {
  $('#sign-in')[0].reset()
  $('#message').text("You're signed out!")
  $('#sign-up, #sign-in, .logged-out').show()
  $('#change-password, .container, #reset, #win-lose, #draw, #sign-out, #start-game').hide()
}
const signOutFailure = function () {
  $('#message').text('sign Out Faild')
}
const startGameSuccess = function (response) {
  $('.container, #reset, #sign-out').show()
  $('#start-game, #message, #change-password, #failure-message, #draw ').hide()
  $('.box').text('')

  store.game = response.game
}

const clickBoxSuccess = function (response) {

}

const clickBoxFailure = function (response) {
  $('#message').text('Click Faild')
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  signInSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  startGameSuccess,
  clickBoxSuccess,
  clickBoxFailure
}
