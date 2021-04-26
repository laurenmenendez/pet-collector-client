const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../.././lib/get-form-fields')
const store = require('.././store')

// create pet event handler
const onCreate = function (event) {
  $('#data').html('')
  $('#update').html('')
  $('#delete').html('')
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
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  const id = $(form).data('id')
  console.log(form)
  console.log(id)
  api.update(formData, id)
    .then(ui.onUpdateSuccess)
    .catch(ui.onError)
}

// const onShow = function (event) {
//   event.preventDefault()
//   const form = event.target
//   const formData = getFormFields(form)
//   api.show(formData)
//     .then(ui.onShowSuccess)
//     .catch(ui.onError)
// }

const onIndex = function (event) {
  $('#data').html('')
  $('#update').html('')
  $('#delete').html('')
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onError)
}

const onDelete = function (event) {
  $('#data').html('')
  $('#update').html('')
  $('#delete').html('')
  event.preventDefault()
  const btn = event.target
  const id = $(btn).data('id')
  const user = store.user
  user.petName = $(btn).data('name')
  api.deletePet(id)
    .then(ui.onDeleteSuccess)
    .catch(ui.onError)
}

module.exports = {
  onCreate,
  onUpdate,
  // onShow,
  onIndex,
  onDelete
}
