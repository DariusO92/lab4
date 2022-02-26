console.log("Proof of life!");

// var we are going to use mostly in 102
 // let we are going to use if the variable is going to change values
 // const we are going to use if the value will never change
  // changing values is not the same as updating a value

let userName = "Darius"
console.log(userName);

 let myName =  prompt("What is your name?");
 console.log("myName:", myName);


 if (myName == "Darius") {
   document.write("Welcome Wade Wilson chimichangas are ready!")  
 } else {
     document.write("Sorry no access here.")
 }
  document.write(myName);

  if (myName == "Owens") {
      document.write("The Bacon is Here!") 

      } else {
          document.write("Try Something else")
      }
  function guessingGame(){
      let userGuess = prompt("Please guess a number between 1 and 99...");
      let correctAnswer = 85;
      let attempts = 5;

      for (let i = 0; i < attempts; i++)
  {
      while (usersGuess < 1 || userGuess >) {
          userGuess = prompt("Please try again...! A number between 1 and 100");
      }
      if (userGuess == correctAmswer) {
          alert("Winner Winner!");
          break;
      } else if (userGuess > correctAnswer) {
          userGuess = prompt("Sorry, too high!! Please guess lower...");
      } else if (userGuess < correctAnswer) {
          userGuess =prompt("Sorry, too low!! Please try a bit higher...");
      } if (i == 3){
          alert("the correct answer was " + correctAnswer);
      }
  }}