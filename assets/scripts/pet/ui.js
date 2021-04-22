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
  pets.forEach(pet => {
    $('#messages').append(
      `<p>Name: ${pet.name}</p>
      <p>Type: ${pet.type}</p>
      <p>Age: ${pet.age}</p>
      <form id="update-form">
        <h3 class="text-tertiary">Update pet</h3>
        <input type="text" name="pet[oldName]" placeholder="Current pet name" required>
        <input type="text" name="pet[name]" placeholder="New pet name">
        <input type="text" name="pet[type]" placeholder="New pet type">
        <input type="number" name="pet[age]" placeholder="New pet age">
        <button type="submit" class="btn-pet">Submit</button>
      </form>`
    )
  })
}

const onDeleteSuccess = function () {
  $('#messages').html(`<p>${store.user.pet.name} has been removed. We're sorry to see them go!</p>`)
  $('#delete-form').trigger('reset')
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
