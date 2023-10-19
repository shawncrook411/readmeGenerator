
const fs = require('fs');
const inquirer = require('inquirer');
var answers = [];

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

function init() {
    inquirer.prompt([
        {   type: 'input',
            message:'What is the title of your Project?',
            name:'title',
        },{
            type: 'input',
            message:'Write a short description of your project: ',
            name:'description',
        },{
            type: 'input',
            message:'What are your installation instructions?',
            name:'install',
        },{
            type: 'input',
            message:'How do you use this project?',
            name:'usage',
        },{
            type: 'rawlist', //  CHANGE TO LIST
            message:'Which license will you be using?',
            choices: [
                {name: 'Apache', value: 'Apache'},
                {name: 'MIT License', value: 'MIT License'},
                {name: 'Boost Software License', value: 'Boost Software License'},
                {name: 'Creative Commons Zero Universal', value: 'Creative Commons Zero Universal'},
                {name: 'Eclipse Public License', value: 'Eclipse Public License'},
                {name: 'Mozilla Public License', value: 'Mozilla Public License'}],
            name:'license',
        },{
            type: 'input',
            message:'How do you contribute to this project?',
            name:'contribute',
        },{
            type: 'input',
            message:'What tests can be ran on the project?',
            name:'tests',
        },{
            type: 'input',
            message:'how can the user ask you questions?',
            name:'questions',
        },{
            type: 'input',
            message:'What is your github profile?',
            name:'github',
        },{
            type: 'input',
            message:'What is your email?',
            name:'email',
        }])    
    .then((response) => {       
        const {title, description, install, usage, license, contribute, tests, questions, github, email} = response      
        switch(license)
        {
            case 'Apache':
                badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
            break            

            case 'MIT License':
                badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
            break

            case 'Boost Software License':
                badge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
            break

            case 'Creative Commons Zero Universal':
                badge = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
            break

            case 'Eclipse Public License':
                badge = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
            break

            case 'Mozilla Public License':
                badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
            break


        }
        data = 
`# ${title}
## Table of Contents:
[Description](#description)\n
[Installation](#installation)\n
[Usage](#usage)\n
[License](#license)\n 
[Contributing](#contributing)\n
[Tests](#tests)\n 
[Questions?](#questions?)\n
## Description
${description} 
## Installation
${install} 
## Usage
${usage}
## License
${badge}\n
This project is licensed under the terms of the ${license} license
## Contributing
${contribute} 
## Tests 
${tests} 
## Questions? 
${questions}
You can reach me at this email address ${email} and I'll answer you shortly
Also you can visit my github profile here: [${github}'s GitHub](https://github.com/${github}) to see more of my work.`

        // TODO: Create a function to write README file
        // function writeToFile(fileName, data) {}
        file = fs.writeFile('xREADME.md', data, 
            (err) => err ? console.error(err) : console.log('Success!'));

    })
}
init();



