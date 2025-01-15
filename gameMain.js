// Class Game Logic
class Game {
  constructor(userName = "", choiceValue = "") {
    this.userName = userName;
    this.choiceValue = choiceValue;
  }

  setUserName(userName) {
    this.userName = userName;
  }

  setChoiceValue(choiceValue) {
    this.choiceValue = choiceValue;
  }
}

// Player Class
class Player {
  constructor(userName) {
    this.userName = userName;
    this.newGame = new Game();
    this.newGame.setUserName(userName);
  }

  chooseRoPaSC(choice) {
    console.log("Button is clicked  value: ",choice);
    //console.log(event.target.value) // Log the value of the button clicked
    // Send the choice value to the Game logic class
    //this.newGame.setChoiceValue(event.target.value)
  }
}

// Class Computer Player
class ComputerPlayer extends Player {
  constructor(userName = "Computer") {
    super(userName);
    const newPlayer = new Player(); // Instantiate a new Player class object
    this.newPlayer = newPlayer
    this.randomChoice();
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
    this.newPlayer.chooseRoPaSC(choice); // Invoke this. to force to recognize the Player object
    
  }
}

// Class Human Player
class HumanPlayer extends Player {
  constructor(userName = "Human") {
    super(userName);
    const newPlayer = new Player(); // Instantiate a new Player class object

    const buttons = document.querySelectorAll(".buttonChoice"); // Select all the buttons of this class
    buttons.forEach((button) => {
      button.addEventListener("click", (eventValue) => {
        // eventValue catch the id of the button clicked
        const choice = eventValue.target.value; // Retrieve the value of the button (event) clicked
        //console.log("You clicked: ", buttonValue);
        newPlayer.chooseRoPaSC(choice); // Call the chooseRoPaSC in the Parent Class
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
