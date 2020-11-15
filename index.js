'use strict'

//! Forms
const signUpForm = document.getElementById('signUpForm')

const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')

signUpForm.addEventListener('submit', (e) => {
  e.preventDefault()

  signUp(
    firstName.value,
    lastName.value,
    email.value,
    password.value,
    confirmPassword.value
  )
})
