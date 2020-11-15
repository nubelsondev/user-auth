'use strict'

//! Forms
const signInForm = document.getElementById('signInForm')

const email = document.getElementById('email')
const password = document.getElementById('password')

signInForm.addEventListener('submit', (e) => {
  e.preventDefault()

  signIn(
    email.value,
    password.value
  )
})
