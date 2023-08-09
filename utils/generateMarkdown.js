// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## (Description Here)

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing Tests](#contributing-tests)
  - [Questions](#questions)

  ### Installation
  insert their answer here

  ### Usage
  insert their answer here

  ### License
  insert their answer here

  ### Contributing Tests
  insert their answer here

  ### Questions
  insert their answer here

`;
}

module.exports = generateMarkdown;
