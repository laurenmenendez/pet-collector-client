'use strict'

const config = require('.././config')
const store = require('.././store')

// send create post request
const create = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/pets',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// send update patch request
const update = function (formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/pets',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  create,
  update
}
