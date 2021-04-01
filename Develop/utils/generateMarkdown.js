// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "apache-2.0") {
    return `[![apache-2.0](https://img.shields.io/badge/license-apache--2.0-green)]`
  }
  else if (license === 'BSD 3-Clause "New" or "Revised"'){
    return `[![BSD 3-Clause "New" or "Revised"](https://img.shields.io/badge/license-BSD%203--Clause%20%22New%22%20or%20%22Revised%22-green)]`
  }
  else if (license === 'GNU General Public License v3.0'){
    return `[![GNU General Public License v3.0](https://img.shields.io/badge/license-GNU%20General%20Public%20License%20v3.0-green)]`
  }
  else if (license === 'MIT'){
    return `[![MIT](https://img.shields.io/badge/license-MIT-green)]`
  }
  else {
    return ""
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "apache-2.0") {
    return `(https://www.apache.org/licenses/LICENSE-2.0)`
  }
  else if (license === 'BSD 3-Clause "New" or "Revised"'){
    return `(https://choosealicense.com/licenses/bsd-3-clause/)`
  }
  else if (license === 'GNU General Public License v3.0'){
    return `(https://www.gnu.org/licenses/gpl-3.0.en.html)`
  }
  else if (license === 'MIT'){
    return `(https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)`
  }
  else {
    return ""
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License`
  }
  else {
    return ""
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

## Description

  ${data.description}

## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Links](#links)
  * [License](#license)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)
  
  
## Installation

  ${data.installation}

## Usage

  ${data.usage}

 ## Links
 
  * Application URL: (https://${data.username}.github.io/${data.repository}/)
  * Github Repository URL: (https://github.com/${data.username}/${data.repository})

${renderLicenseSection(data.license)}

  ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

## Contributions

  ${data.contributing}

## Tests

  ${data.tests}

## Questions

  [${data.username} Github](https://github.com/${data.username})

  Feel free to reach me at ${data.email} with any question regarding this project!
  `;
}

module.exports = generateMarkdown;
