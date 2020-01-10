'use strict'
const store = require('./../store')
const signUpSuccess = function (response) {
  // console.log(response)
  $('#sign-up')[0].reset()
  $('#message').text('Successfully signed up!')
  $('#failure-message').hide()
}
const signUpFailure = function () {
  $('#failure-message').text('Sign up failed')
  // console.log(error)
}

// Sign -In
const signInSuccess = function (response) {
  console.log(response)
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#change-password').show()
  $('#sign-out').show()
  $('#message').text('Successfully signed in!')
  $('#start-game').show()
  $('.logged-out').hide()
  $('#reset').hide()
  $('#failure-message').hide()
  store.user = response.user
}
const signInFailure = function () {
  $('#failure-message').text('The username and/or password you specified are not correct')
  // console.log(error)
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
  // console.log(error)
}

const signOutSuccess = function (response) {
  $('#sign-in')[0].reset()
  $('#message').text("You're signed out!")
  $('#sign-up').show()
  $('#sign-in').show()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('.logged-out').show()
  $('.container').hide()
  $('#reset').hide()
}
const signOutFailure = function () {
  $('#message').text('sign Out Faild')
  // console.log(error)
}
const startGameSuccess = function (response) {
  $('.container').show()
  $('#start-game').hide()
  $('#message').hide()
  $('#change-password').hide()
  $('#reset').show()
  $('#failure-message').hide()
}

const clickBoxSuccess = function (response) {
  $('#0').html('X')
  $('#1').html('X')
  $('#2').html('X')
  $('#3').html('X')
  $('#4').html('X')
  $('#5').html('X')
  $('#6').html('X')
  $('#7').html('X')
  $('#8').html('X')
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
  clickBoxSuccess
}
