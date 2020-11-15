'use strict'

let users = []

const getUsers = () => {
  const usersJSON = localStorage.getItem('users')

  try{
    return usersJSON ? JSON.parse(usersJSON) : []
  } catch(e){
    return []
  }
}

const getUser = (email) => {
  const users = getUsers()

  const userExists = users.find(user => user.email === email)

  if(userExists){
    return userExists
  }else{
    return null
  }
}

const addUser = (user) => {
  users.push(user)
  localStorage.setItem('users', JSON.stringify(users))
}
