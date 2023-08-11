// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your application?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Give a description of the application',
        name: 'description ',
    },
    {
        type: 'input',
        message: 'How do you install this application?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How would someone use this application?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Give details on how someone can contribute to this application',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Select a license for this product. Choose None if you dont have one.',
        name: 'license',
    },
    {
        type: 'input',
        message: 'Enter any questions you might have for this README.',
        name: 'questions',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, response) {
    inquirer
    .prompt(questions)
    .then((response) =>
    fs.writeFile('README.md', generateMarkdown(response), (err) =>
    err ? console.log(err) : console.log('success'))
    )
    
}

writeToFile();


// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
