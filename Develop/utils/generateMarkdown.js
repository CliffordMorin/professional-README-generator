// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "apache-2.0") {
    return `![apache-2.0](https://img.shields.io/badge/license-apache--2.0-green)`
  }
  else if (license === 'BSD 3-Clause "New" or "Revised"'){
    return `![BSD 3-Clause "New" or "Revised"](https://img.shields.io/badge/license-BSD%203--Clause%20%22New%22%20or%20%22Revised%22-green)`
  }
  else if (license === 'GNU General Public License v3.0'){
    return `![GNU General Public License v3.0](https://img.shields.io/badge/license-GNU%20General%20Public%20License%20v3.0-green)`
  }
  else if (license === 'MIT'){
    return `![MIT](https://img.shields.io/badge/license-MIT-green)`
  }
  else {
    return ""
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description

  ${data.description}

## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
${renderLicenseBadge(data.license)}

  `;
}

module.exports = generateMarkdown;
