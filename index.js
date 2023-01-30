// Include packages needed for this application
const inquirer = require("inquirer");

// Series of questions to get the managers information
const managerQuestions = [
  {
    type: "input",
    name: "manager_name",
    message: "Enter the team manager's name:",
  },
  {
    type: "input",
    name: "manager_id",
    message: "Enter the team manager's employee ID:",
  },
  {
    type: "input",
    name: "manager_email",
    message: "Enter the team manager's email address:",
  },
  {
    type: "input",
    name: "manager_office",
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
    name: "github",
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
      
      teamArray.push(answers); 

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
      
      teamArray.push(answers); 

      // If new_member is an engineer or intern, add a new team member.
      // Otherwise, the team has been defined, render the webpage
      if (answers.new_member !== "Finish building the team")
      {
        addTeamMember(answers.new_member);
      } else{
        console.log(teamArray);
        console.log("Successfuly generated team webpage!");
        // TODO: generate HTML and CSS
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
    
    teamArray.push(answers); 
    buildTeam();
  });
}

// Start the prompt
addManager();
