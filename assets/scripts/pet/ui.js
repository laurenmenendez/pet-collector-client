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
  $('#create').trigger('reset')
}

const onUpdateSuccess = function (response) {
  // save returned pet object on store.user
  store.user.pet = response.pet
  // create variable for html
  const pet = store.user.pet
  // add pet info to html
  $('#messages').html(
    `<p>Pet updated!</p>
    <p>Pet name: ${pet.name}</p>
    <p>Pet type: ${pet.type}</p>
    <p>Pet age: ${pet.age}</p>`
  )
  $('#update').trigger('reset')
}

const onShowSuccess = function (response) {
  // save returned pet object on store.user
  store.user.pet = response.pet
  // create variable for html
  const pet = store.user.pet
  // add pet info to html
  $('#messages').html(
    `<p>Pet name: ${pet.name}</p>
    <p>Pet type: ${pet.type}</p>
    <p>Pet age: ${pet.age}</p>`
  )
  $('#show').trigger('reset')
}

module.exports = {
  onCreateSuccess,
  onUpdateSuccess,
  onShowSuccess
}
