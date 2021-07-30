/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/
let gitDefinition = 'git tracks changes in code, allows for many people to access the same code, allows for management of code.'
//CODE HERE
//////////////////PROBLEM 2////////////////////
/*
Create a variable called 'gitHubDefinition'.  
It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
let gitHubDefinition = 'Cloud based service that allows developers to store and manage their code, as well as see different versions of their code'

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE
let init = {
    description: 'Initialize a local repository right here in this folder',
    code: 'git init',
}

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE
let clone ={
    description: 'Clone a repository into a new directory',
    code: 'git clone',
}
//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE
let status ={
    description:'Show the working tree status',
    code: 'git status',
}
//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE
let add ={
    description:'Add file contents to the index',
    code:'git add',
}
//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE
let commit ={
    description:'Record changes to the repository',
    code: 'git commit',
}

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE

let push = {
    description:'Update remote refs along with associated objects',
    code:'git push',
}

console.log(gitDefinition)
console.log(gitHubDefinition)
console.log(init)
console.log(clone)
console.log(status)
console.log(add)
console.log(commit)
console.log(push)