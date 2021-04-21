'use strict'

const authEvents = require('./auth/events')
const petEvents = require('./pet/events')

$(() => {
  // initial page view
  $('#change-password').hide()
  $('#change-password-button').hide()
  $('#sign-out-button').hide()
  $('#create').hide()
  $('#update').hide()
  $('#show').hide()
  $('#main').hide()
  // auth events
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-button').on('click', authEvents.onChangePasswordButton)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
})
