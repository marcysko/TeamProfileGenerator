const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./lib/htmlRenderer");
const path = require("path");
const emp = []
const HTMLOUTPUT_DIR = path.resolve(__dirname, "htmloutput");
const outputPath = path.join(HTMLOUTPUT_DIR, "testoutput.html");

// I am prompted to enter the team manager’s name, employee ID, email address, and office number
function manager() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter the team manager’s name.",
            name: "name"
        },
        {
            type: "input",
            message: "Enter manager's employee ID.",
            name: "id"
        },
        {
            type: "input",
            message: "Enter manager's email address.",
            name: "email"
        },
        {
            type: "input",
            message: "Enter manager's office number.",
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
// I am presented with a menu with the option to add an engineer or an intern or to finish building my team

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
// I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

function engineer() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter the engineer's name.",
            name: "name"
        },
        {
            type: "input",
            message: "Enter the engineer's id number.",
            name: "id"
        },    

        {
            type: "input",
            message: "Enter the engineer's email address.",
            name: "email"

        },
        {
            type: "input",
            message: "Enter the engineer's GitHub username.",
            name: "github"
        }

    ])

        // engineer added to employee array
        .then(function (response) {
            emp.push(new Engineer(response.name, response.id, response.email, response.github))
            buildTeam();
        });
}   

        // I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

        function intern() {
            inquirer.prompt([
                {
                    type: "input",
                    message: "Enter the intern's name.",
                    name: "name"
                },
                {
                    type: "input",
                    message: "Enter the intern's id number.",
                    name: "id"
                },   

                {
                    type: "input",
                    message: "Enter the intern's email address.",
                    name: "email"
        
                },
                {
                    type: "input",
                    message: "Enter the intern's school.",
                    name: "school"
        
                }
            ])

            // intern added to employee array

            .then(function (response) {
                emp.push(new Intern(response.name, response.id, response.email, response.school))
                buildTeam();
            });
    }   
    manager();




        


