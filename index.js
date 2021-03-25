const inquirer = require('inquirer');
const fs = require('fs');
const layout = require('./layout');
const markDown = require('./layout');

const promptUser = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'Please enter the name of your project.',
            validate: projecTitleInput => {
                if (projecTitleInput) {
                    return true;
                } else {
                    console.log('Enter the name of your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description of your project.',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Enter a description of your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please enter the installation instructions for your project.',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Enter installation instructions for your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'use',
            message: 'Please enter your usage instructions.',
            validate: useInput => {
                if (useInput) {
                    return true;
                } else {
                    console.log('Enter the usage for your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub username',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Enter your GitHub udername');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Enter your email address');
                    return false;
                }
            }  
        }, 
        {
            type: 'rawlist',
            name: 'license',
            message: 'Please select your license',
            choices: ['MIT License', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'The Unlicense']
        }
    ])
    .then(readmeInfo => {
        return readmeInfo;
    })
};

promptUser()
.then(readmeInfo => {
    console.log(readmeInfo);
    const layout = markDown(readmeInfo)
    fs.writeFile('./README.md', layout, err => {
        if (err) throw new Error(err);
        console.log('Created');
    })
})

module.exports = promptUser;
