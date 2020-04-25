const inquirer = require("inquirer");
const fs = require("fs");

// const queryUrl = `https://api.github.com/users/${response.username}`;

// -- This is a fairly common programming construct. They are just giving us a FUNCTION to INITIALIZE or SETUP our project parameter. It's also where we usually kick off our project flow -- //
function init() {

}

// -- We DEFINED our INITALIZATION FUNCTION above, here we are just kicking off (running) our program. -- // 
init();

inquirer.prompt([
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    // {
    //     type: "input",
    //     message: "What is your email?",
    //     name: "email"
    // },
    // {
    //     type: "input",
    //     message: "What is the URL to your project?",
    //     name: "projectUrl"
    // },
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
    //Adding badge information
    const badge = `![GitHub followers](https://img.shields.io/github/followers/${res.username}?style=social) \n`;
    fs.writeFileSync("readme.md", badge, err => {
        if(err) throw err;
    });

    //Adding the title
    let title = `# Title \n ${res.title} \n \n`;
    fs.appendFileSync("readme.md", title, err => {
        if(err) throw err;  
    });

    //Adding Description
    addSection("Description", res.description);

    //Adding Table of Contents
    let toc = `## Table of Contents
    
    `

    //Adding other relevant sections
    addSection("Installation", res.install);
    addSection("Usage", res.useage);
    addSection("License", res.license);
    addSection("Contributing", res.contribution);
    addSection("Tests", res.tests);
    
    

});





function addSection(header, info){
    let infoStr = `## ${header} \n ${info} \n \n`;
    fs.appendFileSync("readme.md", infoStr, err => {
        if(err) throw err;
    })
}