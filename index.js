// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generate = require('./utils/generateMarkdown');

// const generateMarkdown = require('./utils/generateMarkdown');

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
        name: 'description',
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
        type: 'list',
        message: 'Choose a license, or select None',
        name: 'license',
        choices: [
            'None', 'Apache 2.0', 'MIT', 'GPL v3', 'BSD 2-Clause', 'BSD 3-Clause' 
        ],
        default: 'None',
    },
    {
        type: 'input',
        message: 'Enter your GitHub username',
        name: 'GitHub',
    },
    {
        type: 'input',
        message: 'Enter your E-Mail address',
        name: 'Email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, response) {
    inquirer
        .prompt(questions).then((data) => {
            fs.writeFile('README.md', generate.generateMarkdown(data), (err) =>
                err ? console.log(err) : console.log('success'))
        });

};

writeToFile();


// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
