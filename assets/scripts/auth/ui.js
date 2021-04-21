'use strict'

const store = require('.././store')

//confirm sign up succeeded
const onSignUpSuccess = function () {
  $('#messages').text('Thanks for signing up!')
  $('#sign-up-form').trigger('reset')
  $('.sign-up').hide()
}

module.exports = {
  onSignUpSuccess
}
