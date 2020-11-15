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

      return addUser(user)
    }else{
      return alert('Please confirm to make sure your password matches!')
    }
  }else{
    return alert('This email is already bee used!')
  }
}