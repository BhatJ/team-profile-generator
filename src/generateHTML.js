// Generate the team's profile page
generateHTML = (teamData) => {
  teamCards = [];

  for (let i = 0; i < teamData.length; i++) {
    teamCards.push(generateCard(teamData[i]));
  }

  // Create a single string with the generated card array
  const teamCardsString = teamCards.join("");

  // return to generated page
  const htmlPage = generateTeamPage(teamCardsString);
  return htmlPage;
};

const generateCard = function (teamMember) {

  const role = teamMember.getRole();
  let icon;
  let uniqueData;
  let uniqueValue;

  switch (role) {
    case 'Manager':
      icon = '🍵';
      uniqueData = 'Office number';
      uniqueValue = teamMember.officeNumber;
      break;
    case 'Engineer':
      icon = '💻';
      uniqueData = 'GitHub';
      uniqueValue = teamMember.github;
      break;
    case 'Intern':
      icon = '🧑‍🎓';
      uniqueData = 'School';
      uniqueValue = teamMember.school;
      break;
  }

  return `
  <div class="card mb-3 col-md-3 col-sm-12">
    <div class="card-header text-white bg-primary">
      <h2>${teamMember.name}</h2>
      <h2>${icon} ${role}</h2>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${teamMember.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${teamMember.email}">${teamMember.email}</a></li>
        <li class="list-group-item">${uniqueData}: ${uniqueValue}</li>
      </ul>
    </div>
  </div>
  `;

}

// generate html page
const generateTeamPage = function (teamCardsString) {
  return `
  <!doctype html>
  <html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">

    <title>My Team</title>
  </head>
  <body>
    <nav class="navbar">
        <h1 class="navbar-title">My Team</h1>
    </nav>
    
    <div class="container">
        <div class="row">
            ${teamCardsString}
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
    </body>
  </html>
  `;
};

// export to index
module.exports = generateHTML;
