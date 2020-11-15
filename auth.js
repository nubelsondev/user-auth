'use strict'

const signUp = async  (firstName, lastName, email, newPassword, confirmPassword) => {
  const userExists = await getUser(email)

  if(!userExists){
    if(newPassword === confirmPassword){
      const user = {
        id: uuidv4(),
        name: `${firstName} ${lastName}`,
        email,
        password: newPassword
      }

      addUser(user)
      location.href = './login.html'
    }else{
      alert('Please confirm to make sure your password matches!')
    }
  }else{
    alert('This email is already bee used!')
  }
}

const signIn = async (email, password) => {
  const user = await getUser(email)

  if(user){
    if(password === user.password){
      location.href = './home.html'
    }else{
      alert('Please make sure your credentials are correct')
    }
  }else{
    alert('This user is not registered, please create an account')
  }
}