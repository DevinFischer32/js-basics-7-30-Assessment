// Password Validator
const readline = require("readline");                                     // This is called a boiler plate and is exampled on 7/26 after lunch assingment

const reader = readline.createInterface({                                 //Pre written code that allows for questions and entering inmformation into command line
  input: process.stdin,
  output: process.stdout,
});

console.log('Hello welcome to my password validator')                     // welcome statement 
reader.question('Please enter your password ',function (password){        // ask question then runs function
    if(password.length>=10) {                                             // checks length
     console.log('Password meets constriants')
    }else{ 
    console.log('Password does not meet constriants')
    }
})

