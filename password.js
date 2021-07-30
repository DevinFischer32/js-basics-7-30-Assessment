// Password Validator

// welcome the user                           // I don't know how to get it to where they would enter the information in on the Command line
  function welcome(name){
    this.name = name
    if(name.length > 1){
        console.log('Welcome,' + name)
    }
}
// checks password length
function validator (password) {
    this.password = password 
    for (let i=0; i< 1; i++){
         if(password.length >= 10){
        console.log('Password requirements meant')
    } else {
        console.log('Password requirements not meant')
    }
    }
}
welcome( " Devin")


validator('Qweewq123!')