// Include packages needed for this application
const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const generateHTML = require("./src/generateHTML");

// Series of questions to get the managers information
const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter the team manager's name:",
  },
  {
    type: "input",
    name: "id",
    message: "Enter the team manager's employee ID:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter the team manager's email address:",
  },
  {
    type: "input",
    name: "office",
    message: "Enter the team manager's office number:",
  },
];

// A question to ask what type of team member to add
const teamQuestion = [
  {
    type: "list",
    name: "new_member",
    choices: ["Engineer", "Intern", "Finish building the team"],
    message: "Add a team member!",
  },
];

// Series of questions to get engineers information
const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter the engineer's name:",
  },
  {
    type: "input",
    name: "id",
    message: "Enter the engineer's employee ID:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter the engineer's email address:",
  },
  {
    type: "input",
    name: "github",
    message: "Enter the engineer's GitHub username:",
  },
];

// Series of questions to get interns information
const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter the intern's name:",
  },
  {
    type: "input",
    name: "id",
    message: "Enter the intern's employee ID:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter the intern's email address:",
  },
  {
    type: "input",
    name: "school",
    message: "Enter the interns's school:",
  },
];

// Create a empty array to store
const teamArray = []; 

/*
 * This function uses inquirer to ask the questions defined in managerQuestions array.
 * When the questions are answered, builtTeam() is called. This will prompt the user
 * to add a team member or finish building the team.
 */
const addManager = () => {
  return inquirer.prompt (managerQuestions)
    .then(answers => {

      // Create a manager object
      const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
      
      // Add the manager to the team array
      teamArray.push(manager); 

      buildTeam();
    });
};

/*
 * This function uses inquirer to prompt the user with a list to choose whether
 * to add a team member (engineer or intern) or finish building the team.
 */
const buildTeam = () => {
  return inquirer.prompt (teamQuestion)
    .then(answers => {
  
      // If new_member is an engineer or intern, add a new team member.
      // Otherwise, the team has been defined, render the webpage
      if (answers.new_member !== "Finish building the team")
      {
        addTeamMember(answers.new_member);
      } else{
        const html = generateHTML(teamArray);
        console.log(html);
      }
    });
};

/*
 * This function will prompt the user with a series of questions based on the team members role.
 * After the questions are gathered, builtTeam() is called. This will prompt the user to add a
 * team member or finish building the team.
 */
const addTeamMember = (role) => {
  var questions;
  if (role === "Engineer")
    questions = engineerQuestions;
  else
    questions = internQuestions;
  
  return inquirer.prompt (questions)
  .then(answers => {
    
    let teamMember;
    if (role === "Engineer")
    {
      teamMember = new Engineer(answers.name, answers.id, answers.email, answers.github);
    } else
    {
      teamMember = new Intern(answers.name, answers.id, answers.email, answers.school);
    }

    teamArray.push(teamMember); 
    buildTeam();
  });
}

// Start the prompt
addManager();
