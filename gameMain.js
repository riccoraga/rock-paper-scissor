// Class Game Logic
class Game {
  constructor() {
    this.gameEngine;
    this.inGameGraphic;
    this.points = 0
  }

  gameEngine(humanChoice, computerChoice) {
    let winner = "";
    

    // Cases for the choices
    if (humanChoice === computerChoice) {
      console.log("Draw, do it again");
      winner = "Draw";
    } else if (humanChoice === "rock") {
      winner = computerChoice === "paper" ? "Computer" : "Human";
    } else if (humanChoice === "paper") {
      winner = computerChoice === "scissors" ? "Computer" : "Human";
    } else if (humanChoice === "scissors") {
      winner = computerChoice === "paper" ? "Human" : "Computer";
    }

    if (winner === "Human") {
      this.points += 3;
    } else if (winner === "Computer" && this.points > 0) {
      this.points -= 1;
    } 
    console.log("Winner is: ", winner);
    this.inGameGraphic(humanChoice, computerChoice, winner);
  }

  inGameGraphic(humanChoice, computerChoice, winner) {
    const humanChoiceText = document.getElementById("humanChoice");
    const computerChoiceText = document.getElementById("computerChoice");
    const winnerText = document.getElementById("winner");
    const pointsText = document.getElementById('points')
    humanChoiceText.innerHTML = humanChoice;
    computerChoiceText.innerHTML = computerChoice;
    pointsText.innerHTML = `${this.points}`

    if (winner === "Human") {
      winner = '<h1 style="color: green;">Human</h1>';
    } else if (winner === "Computer") {
      winner = '<h1 style="color: red;">Computer</h1>';
    } else {
      winner = '<h1 style="color: yellow;">Draw</h1>';
    }

    console.log(winner);
    winnerText.innerHTML = winner;
  }
}

// Player Class
class Player {
  constructor(userName) {
    this.userName = userName;
    const game = new Game();
    this.game = game;
  }

  chooseRoPaSC(humanChoice, computerChoice) {
    console.log("Button is clicked for human value: ", humanChoice);
    console.log("Button is clicked for Computer value: ", computerChoice);
    this.game.gameEngine(humanChoice, computerChoice);
  }
}

// Class Computer Player
class ComputerPlayer extends Player {
  constructor(userName = "Computer") {
    super(userName);
    const newPlayer = new Player(); // Instantiate a new Player class object
    this.newPlayer = newPlayer;
    this.randomChoice; // Instantiate a new function for random choice
  }

  randomChoice = () => {
    let choice;
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    if (randomNumber === 1) {
      choice = "rock";
    } else if (randomNumber === 2) {
      choice = "paper";
    } else if (randomNumber === 3) {
      choice = "scissors";
    }
    console.log("Random number ", randomNumber);
    console.log("Choice:  ", choice);
    //this.newPlayer.chooseRoPaSC(choice); // Invoke this. to force to recognize the Player object
    return choice;
  };
}

// Class Human Player
class HumanPlayer extends Player {
  constructor(userName = "Human") {
    super(userName);
    const newPlayer = new Player(); // Instantiate a new Player class object
    const newComputerPlayer = new ComputerPlayer();
    const buttons = document.querySelectorAll(".buttonChoice"); // Select all the buttons of this class
    buttons.forEach((button) => {
      button.addEventListener("click", (eventValue) => {
        // eventValue catch the id of the button clicked
        const choice = eventValue.target.value; // Retrieve the value of the button (event) clicked
        //console.log("You clicked: ", buttonValue);
        newPlayer.chooseRoPaSC(choice, newComputerPlayer.randomChoice()); // Call the chooseRoPaSC in the Parent Class
      });
    });

    // this.buttonRock = document.getElementById("rockButton")
    // this.buttonRock.addEventListener("click", this.chooseRoPaSC())
    // //console.log("Class HumanPlayer created")
  }

  // ///////////////////////////////////////////// To be finish on the Future with user name and more data from user
  // newUserName() {
  //   return this.userName;
  // }

  // retrieveName() {
  //   // Get from elements
  //   const formInput = document.getElementById("myForm");

  //   // Get input values
  //   const userName = formInput.elements["userName"].value;
  //   console.log("User name: " + userName);
  //   this.userName = userName; // Set the userName property
  // }
}

// Those object initiate the instances of the Classes to be used in the JS
const humanPlayer = new HumanPlayer();
const computerPlayer = new ComputerPlayer();
const game = new Game();
