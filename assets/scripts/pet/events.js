const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../.././lib/get-form-fields')

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
  api.update(formData)
    .then(ui.onCreateSuccess)
    .catch(ui.onError)
}

module.exports = {
  onCreate,
  onUpdate
}
