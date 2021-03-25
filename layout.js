const data = require('./index');

function markDown(readmeInfo) {
    const {projectTitle, description, install, use, github, email, license} = readmeInfo;

    return `# ${projectTitle}

## Description
${description}

## Table of Contents**
- [Install](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contact](#Contact)

## <a name = "Installation"></a> Installation
${install}

## <a name = "Usage"></a> Usage
${use}

## <a name = "License"></a> License
${license}

## <a name = "Contact"></a>Contact
- [${github}](https://www.github.com/${github})
- [${email}](mailto:${email})`;
};

module.exports = markDown;