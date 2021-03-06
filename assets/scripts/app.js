'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const gameEvents = require('./game/events')
$(() => {
  $('#change-password').hide()
  $('#sign-out').hide()
  $('.container').hide()
  $('#start-game').hide()
  $('.logged-in').hide()
  $('#reset').hide()
  // your JS code goes here
  gameEvents.addHandlers()
})
