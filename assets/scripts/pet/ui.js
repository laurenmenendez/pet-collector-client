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
    <p>Name: ${pet.name}</p>
    <p>Type: ${pet.type}</p>
    <p>Age: ${pet.age}</p>`
  )
  $('#create-form').trigger('reset')
  setTimeout(() => {
    $('#messages').text('')
  }, 5000)
  $('#change-password').hide()
}

const onUpdateSuccess = function (response) {
  // save returned pet object on store.user
  store.user.pet = response.pet
  // create variable for html
  const pet = store.user.pet
  // add pet info to html
  $('#messages').html(
    `<p>Pet updated!</p>
    <p>Name: ${pet.name}</p>
    <p>Type: ${pet.type}</p>
    <p>Age: ${pet.age}</p>`
  )
  $('.update-form').trigger('reset')
  setTimeout(() => {
    $('#messages').text('')
  }, 5000)
}

const onIndexSuccess = function (response) {
  const pets = response.pets
  console.log(pets)
  if (pets.length === 0) {
    $('#messages').text('You don\'t have any pets yet! Create a pet above.')
  } else {
    $('#data').html('')
    pets.forEach(pet => {
      $('#data').append(
        `<div class="content-packet">
        <p>Name: ${pet.name}</p>
        <p>Type: ${pet.type}</p>
        <p>Age: ${pet.age}</p>
        </div>`)
      $('#update-button').append(
        `<div class="update-btn-div">
        <button class="btn btn-pet" data-id="${pet._id}" data-name="${pet.name}">Update pet</button>
        </div>`
      )
      $('#delete').append(
        `<div class="delete-div">
        <button class="btn btn-pet" data-id="${pet._id}" data-name="${pet.name}">Delete pet</button>
        </div>`
      )
    })
    $('#change-password').hide()
  }
}

const onDeleteSuccess = function () {
  $('#messages').html(`<p>${store.user.petName} has been removed. We're sorry to see them go!</p>`)
  setTimeout(() => {
    $('#messages').text('')
  }, 5000)
}

// error
const onError = function (err) {
  console.error(err)
  $('#messages').text('Something went wrong, please try again.')
}

module.exports = {
  onCreateSuccess,
  onUpdateSuccess,
  onIndexSuccess,
  onDeleteSuccess,
  onError
}
