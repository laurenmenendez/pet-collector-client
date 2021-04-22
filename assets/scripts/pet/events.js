const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../.././lib/get-form-fields')
const store = require('.././store')

// create pet event handler
const onCreate = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.create(formData)
    .then(ui.onCreateSuccess)
    .catch(ui.onError)
}

const onUpdate = function (event) {
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

const onShow = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.show(formData)
    .then(ui.onShowSuccess)
    .catch(ui.onError)
}

const onIndex = function (event) {
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onError)
}

const onDelete = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  store.user.pet = formData.pet
  const name = store.user.pet.name
  api.deletePet(name)
    .then(ui.onDeleteSuccess)
    .catch(ui.onError)
}

module.exports = {
  onCreate,
  onUpdate,
  onShow,
  onIndex,
  onDelete
}
