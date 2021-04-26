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
}

const onUpdateSuccess = function (response) {
  console.log('success')
  console.log(response)
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
  $('#update-form').trigger('reset')
}

const onShowSuccess = function (response) {
  // save returned pet object on store.user
  store.user.pet = response.pet
  // create variable for html
  const pet = store.user.pet
  // add pet info to html
  $('#messages').html(
    `<p>Name: ${pet.name}</p>
    <p>Type: ${pet.type}</p>
    <p>Age: ${pet.age}</p>`
  )
  $('#show-form').trigger('reset')
}

const onIndexSuccess = function (response) {
  console.log(response)
  const pets = response.pets
  $('#data').html('')
  pets.forEach(pet => {
    $('#data').append(
      `<div class="content-packet">
      <p>Name: ${pet.name}</p>
      <p>Type: ${pet.type}</p>
      <p>Age: ${pet.age}</p>
      </div>`)
    $('#update').append(
      `<div class="update">
      <form class="update-form" data-id="${pet._id}">
        <h3 class="text-tertiary">Update pet</h3>
        <input type="text" name="pet[name]" placeholder="New pet name">
        <input type="text" name="pet[type]" placeholder="New pet type">
        <input type="number" name="pet[age]" placeholder="New pet age">
        <button type="submit" class="btn btn-pet">Submit</button>
      </form>
      </div>`)
    $('#delete').append(
      `<div class="delete-div">
      <button class="btn btn-pet" data-id="${pet._id}" data-name="${pet.name}">Delete pet</button>
      </div>`
    )
  })
}

const onDeleteSuccess = function () {
  $('#messages').html(`<p>${store.user.petName} has been removed. We're sorry to see them go!</p>`)
}

// error
const onError = function (err) {
  console.error(err)
  $('#messages').text('Something went wrong, please try again.')
}

module.exports = {
  onCreateSuccess,
  onUpdateSuccess,
  onShowSuccess,
  onIndexSuccess,
  onDeleteSuccess,
  onError
}
