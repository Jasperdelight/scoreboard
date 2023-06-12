let homeTeam = 0
let awayTeam = 0
let homeSavedScore = []

// SAVE LOAD FUNCTION? 

// function drawHomeScore() {
//   let homeTeamElem = document.getElementById('homeTeamElement')
//   homeTeamElem.innerText = homeTeam.toString()
// }

// function saveHomeScore() {
//   localStorage.setItem('homeTeam', homeTeamScore)
//   let homeTeamScore = localStorage.getItem(homeTeam)
//   console.log(homeTeamScore)
// }
// function loadHomeScore() {
//   let homeTeamScore = localStorage.getItem(homeTeam)

// Home Team
function drawHomeTeam() {
  homeTeamElement.innerText = homeTeam
}

function homeTeamOne() {
  homeTeam++
  let homeTeamScore = document.getElementById('homeTeam');

  // Save Score??
  // localStorage.setItem('homeTeam', homeTeam);
  // let homeSavedScore = localStorage.getItem('homeTeam')
  // console.log(homeSavedScore);

  drawHomeTeam();

}

function homeTeamThree() {
  homeTeam += 3
  let homeTeamScore = document.getElementById('homeTeam');
  drawHomeTeam();
}


// Away Team

function awayTeamOne() {
  awayTeam++
  let awayTeamScore = document.getElementById('awayTeam')
  console.log(awayTeam)
  awayTeamElement.innerText = awayTeam
}

function awayTeamThree() {
  awayTeam += 3
  let awayTeamScore = document.getElementById('awayTeam')
  awayTeamElement.innerText = awayTeam
}

function clearScore() {
  homeTeam = 0;
  awayTeam = 0;
  homeTeamElement.innerText = 0;
  awayTeamElement.innerText = 0;
  localStorage.clear();
}
