'use strict'

const store = require('.././store')

const onCreateSuccess = function (reponse) {
  $('#messages').text('Pet created!')
}

module.exports = {
  onCreateSuccess
}
