// generate CSS style sheet
const generateCSS = function () {
  return `
  .navbar {
    background-color: rgb(248, 83, 83);
    color: white;
    justify-content: space-around;
    margin-bottom: 20px;
  }

  .navbar-title {
      padding: 0;
      margin: 25px;
  }
  
  .card {
      margin: 1%;
      border-color: white;
  }
  
  .card-body {
      background-color: rgb(247, 243, 243);
  }
  
  .row {
      justify-content: center;
  }
  
  .list-group-item {
      padding-left: 5%;
      padding-right: 0;
  }
  `;
};

// export generateCSS function
module.exports = generateCSS;
