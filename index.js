const fs = require('fs');
const inquirer = require('inquirer');
const ManagerInfo = require("./lib/Manager");
const EngineerInfo = require("./lib/Engineer");
const InternInfo = require("./lib/Intern");
const render = require("./lib/htmlRenderer");
const path = require("path");
const employ = []
const HTMLOUTPUT_DIR = path.resolve(__dirname, "htmloutput");
const pathOutput = path.join(HTMLOUTPUT_DIR, "testoutput.html");

// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
function manager() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter the team manager’s name.",
            name: "name"
        },
        {
            type: "input",
            message: "Enter Employee ID.",
            name: "id"
        },
        {
            type: "input",
            message: "Enter email address.",
            name: "email"
        },
        {
            type: "input",
            message: "Enter office number.",
            name: "office"
        }
    ])
    // add manager to an employee array
    .then(function (response) {
        console.log(response)
        emp.push(new Manager(response.name, response.id, response.email, response.office))
        buildTeam();
    });
}
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

function buildTeam() {
    inquirer.prompt([
        {
            type: "checkbox",
            message: "Would you like to add someone to your team?",
            name: "team",
            choices: ["Engineer", "Intern", "I'm finished building my team"] 
        }
    ])
    // add team members
    .then(function (response) {
        if (response.team === "Engineer") {
            console.log("build engineer")
            // prompt the engineer question block
            engineer();
        } else if (response.team === "Intern") {
            console.log("build intern")
            // prompt the intern question block
            intern();
        } else {
            // exit function, call render function and write team to html.
            console.log("finished, writing team")
            fs.writeFile(outputPath, render(emp), function (err) {
                if (err) {
                    return
                } else
                console.log("team written successfully")
            })
        }
    })
    .catch(function (err) {
        console.log(err);
    })
}
// Questions for manager about Engineer
