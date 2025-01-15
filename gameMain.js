// Player Class
class Player {
  newGame = new Game();

  constructor(userName, choiceValue) {
    this.userName = userName;
    this.choiceValue = choiceValue;
    this.newGame.setUserName(userName);
    this.newGame.setChoiceValue(choiceValue);
  }

  buttonClick = (buttonValue) => {
    console.log(buttonValue);
    // Send the choice value to the Game logic class
    newGame(buttonValue);
  };
}

class ComputerPlayer extends Player {
  constructor() {
    super(userName, choiceValue);
  }
}

class HumanPlayer extends Player {
  constructor(userName, choiceValue) {
    super(userName, choiceValue);
    this.newGame = new Game();
    this.button = document.addEventListener()
    this.button.document.getElementById('rockButton', buttonClick())
      
  }

  newUserName() {
    return this.userName;
  }

  retrieveName() {
    // Get from elements
    const formInput = document.getElementById("myForm");

    // Get input values
    const userName = formInput.elements["userName"].value;
    console.log("User name: " + userName);
    this.userName = userName; // Set the userName property
  }

  buttonClick() {
    console.log('Button is clicked');
    // Send the choice value to the Game logic class
    //this.newGame.setChoiceValue();
  }
}

class Game {
  constructor(userName, choiceValue) {
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
