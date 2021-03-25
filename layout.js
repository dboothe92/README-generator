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

## <a id="Installation"></a> Installation
${install}

## <a id="Usage"></a> Usage
${use}

## <a id="License"></a> License
${license}

## <a id="Contact"></a>Contact
- ${github}
- ${email}`;
};

module.exports = markDown;