'use strict'

const authEvents = require('./auth/events')
const petEvents = require('./pet/events')

$(() => {
  // auth events
    $('#sign-up-form').on('submit', authEvents.onSignUp)
    $('#sign-in-form').on('submit', authEvents.onSignIn)
    $('#change-password-button').on('click', authEvents.onChangePasswordButton)
    $('#change-password').on('submit', authEvents.onChangePassword)
    $('#sign-out-button').on('click', authEvents.onSignOut)
})
