'use strict'
const store = require('./../store')
const signUpSuccess = function (response) {
  // console.log(response)
  $('#message').text('Successfully signed up!')
}
const signUpFailure = function () {
  $('#failure-message').text('Sign up failed')
  // console.log(error)
}
//
//

// Sign -In
const signInSuccess = function (response) {
  console.log(response)
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#change-password').show()
  $('#sign-out').show()
  $('#message').text('Successfully signed in!')
  $('#start-game').show()
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
  console.log(response)
  $('#message').text('Password Changed!')
}
const changePasswordFailure = function () {
  $('#failure-message').text('Failed to change password')
  // console.log(error)
}

const signOutSuccess = function (response) {
  console.log(response)
  $('#message').text("You're signed out!")
  $('#sign-up').show()
  $('#sign-in').show()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('.container').hide()
}
const signOutFailure = function () {
  $('#message').text('sign Out Faild')
  // console.log(error)
}
const startGame = function (response) {
  $('.container').show()
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
  startGame
}
