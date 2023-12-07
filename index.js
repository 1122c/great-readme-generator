// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");
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
    message: "What does your appliction do?",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide instructions on using your application.",
  },
  // add other questions: installation, contribution, tests, email, github

  {
    type: "list",
    name: "license",
    message: "please choose a license associated with your application.",
    choices: ["MIT", "Mozilla", "ISC"],
  },
  {
    type: "input",
    name: "installation",
    message:
      "Please provide installation instructions on using your application.",
  },
  {
    type: "input",
    name: "contribution",
    message: "Please list any contributors on using your application.",
  },
  {
    type: "input",
    name: "tests",
    message: "Please provide any test instructions on using your application.",
  },
  {
    type: "input",
    name: "github",
    message: "what is your github user name?",
  },
  {
    type: "input",
    name: "email",
    message: "what is your email address?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    console.log(data);
    fs.writeFileSync("readmetest.md", generateMarkdown(data));
  });
}

function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data, (err) =>
    err ? console.log(err) : console.log("Successfully created README!")
  );
}

// Function call to initialize app
init();
