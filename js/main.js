document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq() {

  // Get input
  const input = document.querySelector("#input").value;

  // Get computer's move
  const res = await fetch(`/api`)
  const data = await res.json()
  console.log(input, data.computer)

  // Determine the winner
  const rule = {
    'rock': 'paper',
    'paper': 'scissor',
    'scissor': 'rock', 
  }
  if (data.computer === input) {
    document.querySelector("#result").textContent = 'It is a tie!'
  } else if ( data.computer === rule[input] ) {
    document.querySelector("#result").textContent = 'Computer wins!'
  } else {
    document.querySelector("#result").textContent = 'You win!'
  }

}