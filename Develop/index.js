// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
      // GitHub Username
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username.',
        // We need to validate that user entered at least one word
        // https://stackoverflow.com/questions/57321266/how-to-test-inquirer-validation
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must enter a GitHub username.");
            }
            return true;
        }
    },
    // GitHub Repository
    {
        type: 'input',
        name: 'repository',
        message: 'Enter the name of your repository on GitHub.',
        // We need to validate that user entered at least one word
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must enter the name of your GitHub repository.");
            }
            return true;
        } 
    },

    //Email
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email.',
        // We need to validate that user entered at least one word
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must enter your email.");
            }
            return true;
        } 
    },
    
      // Title of Project
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project.',
        // We need to validate that user entered at least one word
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must enter the title of your project.");
            }
            return true;
        }
    },
       // Project Description
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project.',
        // We need to validate that user entered at least one word
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must enter a description for your project.");
            }
            return true;
        }
    },
    // Project Installation
    {
        type: 'input',
        name: 'installation',
        message: 'Explain how user would install (if necessary) for Installation Section.',
        // Validation not required if question is optional
    },
    // Usage of project
    {
        type: 'input',
        name: 'usage',
        message: 'Enter your project instructions and examples of it in use for Usage Section (if necessary).',
        // Validation not required if question is optional
    },
    // Select license
    {
        type: 'list',
        name: 'license',
        message: 'Choose your license for your project.',
        
        choices: ['apache-2.0', 'BSD 3-Clause "New" or "Revised"' ,'GNU General Public License v3.0', 'MIT']
        
    },
    // Contributing to project
    {
        type: 'input',
        name: 'contributing',
        message: 'Explain how users can contribute to your project (if necessary).',
        // Validation not required if question is optional
    },
    // Test for project
    {
        type: 'input',
        name: 'tests',
        message: 'Provide tests for project, and explain how to test (if necessary).',
        // Validation not required if question is optional
    },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log("Creating file.");
        
    });
}

// TODO: Create a function to initialize app
function init() {inquirer
    .prompt(questions)
    .then(answers => {
        console.log(answers);
        writeToFile("README.md", generateMarkdown(answers));
    });}

// Function call to initialize app
init();
