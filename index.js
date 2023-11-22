// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown")
const inquirer = require("inquirer")
const fs = require("fs")
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Please enter the title of your application.",
  },
  {
    type: "input",
    name: "description",
    message: "WTF does your appliction do?",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide instructions on using your application.",
  },
  // add other questions
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt (questions).then(function(data){
        console.log(data)
        fs.writeFileSync("readmetest.md", generateMarkdown(data))
    })
}

// Function call to initialize app
init();
