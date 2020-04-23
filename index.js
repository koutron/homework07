const inquirer = require("inquirer");
const fs = require("fs");


// -- They give us an ARRAY called 'questions' What could we do with this (?) -- //
const questions = [
    "What is the title?", 
];

// -- They give us a writeToFile() FUNCTION, Looks like we may need to read/write to a file. What BUILT-IN node module will help us out with this (?) -- // 
function writeToFile(fileName, data) {
}

// -- This is a fairly common programming construct. They are just giving us a FUNCTION to INITIALIZE or SETUP our project parameter. It's also where we usually kick off our project flow -- //
function init() {

}

// -- We DEFINED our INITALIZATION FUNCTION above, here we are just kicking off (running) our program. -- // 
init();

inquirer.prompt([
    // {
    //     type: "input",
    //     message: "What is your GitHub username?",
    //     name: "username"
    // },
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
    // {
    //     type: "input",
    //     message: "Please write a short description of your project:",
    //     name: "description"
    // },
    // {
    //     type: "list",
    //     message: "What kind of license should your project have?",
    //     choices: ["MIT", "Apache", "GPL", "Public Domain (Unlicense)"],
    //     name: "email"
    // },
    // {
    //     type: "input",
    //     message: "What command should be run to install dependencies?",
    //     name: "dependencies"
    // },
    // {
    //     type: "input",
    //     message: "What command should be run to run tests?",
    //     name: "tests"
    // },
    // {
    //     type: "input",
    //     message: "What does the user need to know about using the repo?",
    //     name: "repoUse"
    // },
    // {
    //     type: "input",
    //     message: "What does the user need to know about contributing to the repo?",
    //     name: "repoContribution"
    // }
]).then(res => {


});
