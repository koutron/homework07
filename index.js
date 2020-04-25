const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");

inquirer.prompt([
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the URL to your project?",
        name: "projectUrl"
    },
    {
        type: "input",
        message: "What is your project's name?",
        name: "title"
    },
    {
        type: "input",
        message: "Please write a short description of your project:",
        name: "description"
    },
    {
        type: "list",
        message: "What kind of license should your project have?",
        choices: ["MIT", "Apache", "GPL", "Public Domain (Unlicense)"],
        name: "license"
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "install"
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "useage"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contribution"
    }
]).then(res => {
    //Adding the title
    let title = `# Title \n ${res.title} \n \n`;
    //Due to the asynchronous behavior of the writeFile and appendFile methods, sections were rendering out of the order in 
    //which they were coded in.  To solve this, I used the writeFileSync and appendFileSync methods which preserve the order
    //in which the functions are fired. 
    fs.writeFileSync("readme.md", title, err => {
        if(err) throw err;  
    });

    //Adding Description
    addSection("Description", res.description);

    //Adding Table of Contents
    let toc = `## Table of Contents
    \n * [Description](#description)
    \n * [Installation](#installation)
    \n * [Usage](#usage)
    \n * [License](#license)
    \n * [Contributing](#contributing)
    \n * [Tests](#tests)
    \n * [Questions](#questions)
    \n `;

    fs.appendFileSync("readme.md", toc, err => {
        if(err) throw err;
    });

    //Adding other relevant sections
    addSection("Installation", res.install);
    addSection("Usage", res.useage);
    addSection("License", res.license);
    addSection("Contributing", res.contribution);
    addSection("Tests", res.tests);
    
    const queryUrl = `https://api.github.com/users/${res.username}`;
    axios.get(queryUrl).then(({data}) => {
        let questionsSection = `## Questions
        \n GitHub Username: ${res.username}
        \n Email: ${res.email}
        \n Project URL: ${res.projectUrl}
        \n ![GitHub followers](https://img.shields.io/github/followers/${res.username}?style=social)
        \n ![alt text](${data.avatar_url} "Profile Pic")
        `;
        
        fs.appendFileSync("readme.md", questionsSection, err => {
            if(err) throw err;
        });
    });

});

function addSection(header, info){
    let infoStr = `## ${header} \n ${info} \n \n`;
    fs.appendFileSync("readme.md", infoStr, err => {
        if(err) throw err;
    })
}