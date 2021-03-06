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
const update = function (formData, id) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/pets/' + id,
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const index = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/pets',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const deletePet = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/pets/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  create,
  update,
  // show,
  index,
  deletePet
}
