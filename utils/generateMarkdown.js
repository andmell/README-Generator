// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const LicenseQuestion = [
  {
    type: 'list',
    message: 'Choose a license, or select None',
    title: 'license',
    choices: [
      'None', 'Apache 2.0', 'MIT', 'GPL v3', 'BSD 2-Clause', 'BSD 3-Clause', 
    ],
    default: 'None',
  }
]

function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache 2.0':
      return 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
    case 'MIT':
      return 'https://img.shields.io/badge/License-MIT-yellow.svg';
    case 'GPL v3':
      return 'https://img.shields.io/badge/License-GPLv3-blue.svg';
    case 'BSD 2-Clause':
      return 'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg';
    case 'BSD 3-Clause':
      return 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg';
    case 'None':
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  switch (license) {
    case 'Apache 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'GPL v3':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'BSD 2-Clause':
      return 'https://opensource.org/licenses/BSD-2-Clause';
    case 'BSD 3-Clause':
      return 'https://opensource.org/licenses/BSD-3-Clause';
    case 'None':
      return '';
  }
}


function renderLicenseSection(license) {
  if (license == 'None') {
    return ``;
  } else {
    return `This application is using the ${license} license.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.license !== 'None' ? `[![License](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})` : ``}
  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  ${data.license !== "None" ? `- [License](#license)`: ''}
  - [Contributing Tests](#contributing-tests)
  - [Questions](#questions)

  ### Installation
  ${data.installation}

  ### Usage
  ${data.usage}
  ${data.license !== "None" ? `### License`: ''}
  ${renderLicenseSection(data.license)}
  ### Contributing Tests
  ${data.contributing}
  ### Questions
  If you have any questions, feel free to reach me on [GitHub](https://www.github.com/${data.GitHub}) <br>
  Alternatively, you could also email me at ${data.Email}.

`;
};

module.exports = { generateMarkdown };

