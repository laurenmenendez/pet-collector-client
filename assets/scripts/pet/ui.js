'use strict'

const store = require('.././store')

const onCreateSuccess = function (response) {
  // save returned pet object on store.user
  store.user.pet = response.pet
  // create variable for html
  const pet = store.user.pet
  // add pet info to html
  $('#messages').html(
    `<p>Pet created!</p>
    <p>Pet name: ${pet.name}</p>
    <p>Pet type: ${pet.type}</p>
    <p>Pet age: ${pet.age}</p>`
  )
}

module.exports = {
  onCreateSuccess
}
