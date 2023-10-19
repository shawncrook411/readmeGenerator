// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [];

//title
//description
//table of contents //links
//installation
//usage
//license
//contributing
//tests
//questions
//github profile / link
//email

inquirer.prompt([
    {
        type: 'input',
        message:'What is the title of your Project?',
        name:'title',
    },
    {
        type: 'input',
        message:'Write a short description of your project: ',
        name:'description',
    },
    {
        type: 'input',
        message:'What are your installation instructions?',
        name:'install',
    },
    {
        type: 'input',
        message:'How do you use this project?',
        name:'usage',
    },
    {
        type: 'input', //  CHANGE TO LIST
        message:'Which license will you be using?',
        name:'license',
    },
    {
        type: 'input',
        message:'How do you contribute to this project?',
        name:'contribute',
    },
    {
        type: 'input',
        message:'What tests can be ran on the project?',
        name:'',
    },
    {
        type: 'input',
        message:'Questions?',
        name:'questions',
    },
    {
        type: 'input',
        message:'What is your github profile?',
        name:'github',
    },
    {
        type: 'input',
        message:'What is your email?',
        name:'email',
    },
])
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
