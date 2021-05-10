const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../.././lib/get-form-fields')
const store = require('.././store')

// create pet event handler
const onCreate = function (event) {
  $('#data').html('')
  $('#update').html('')
  $('#delete').html('')
  $('#update-button').html('')
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.create(formData)
    .then(ui.onCreateSuccess)
    .catch(ui.onError)
}

const onUpdate = function (event) {
  $('#data').html('')
  $('#update').html('')
  $('#delete').html('')
  $('#update-button').html('')
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  const id = $(form).data('id')
  api.update(formData, id)
    .then(ui.onUpdateSuccess)
    .catch(ui.onError)
}

const onIndex = function (event) {
  $('#data').html('')
  $('#update').html('')
  $('#delete').html('')
  $('#update-button').html('')
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onError)
}

const onDelete = function (event) {
  $('#data').html('')
  $('#update').html('')
  $('#delete').html('')
  $('#update-button').html('')
  event.preventDefault()
  const btn = event.target
  const id = $(btn).data('id')
  const user = store.user
  user.petName = $(btn).data('name')
  api.deletePet(id)
    .then(ui.onDeleteSuccess)
    .catch(ui.onError)
}

const onUpdateButton = function (event) {
  const btn = event.target
  const id = $(btn).data('id')
  const name = $(btn).data('name')
  $('#update').append(
    `<div class="update">
    <form class="update-form" data-id="${id}">
      <h3 class="text-tertiary">Update ${name}</h3>
      <input type="text" name="pet[name]" placeholder="New pet name">
      <input type="text" name="pet[type]" placeholder="New pet type">
      <input type="number" name="pet[age]" placeholder="New pet age">
      <button type="submit" class="btn btn-pet">Submit</button>
    </form>
    </div>`)
}

module.exports = {
  onCreate,
  onUpdate,
  onIndex,
  onDelete,
  onUpdateButton
}
