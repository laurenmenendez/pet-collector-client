const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../.././lib/get-form-fields')

// sign-up event handler
const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onError)
}

// sign-in event handler
const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onError)
}

module.exports = {
  onSignUp,
  onSignIn
}
