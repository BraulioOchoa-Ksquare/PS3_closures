const donkeyGame = (amountOfTries) => {
  let tail = 5;
  let tries = 0;
  
    return function(guess){
      for(let i = 0; i < guess.length; ++i){
        if(tries === amountOfTries){
          return "You ran out of tries :c";
        }else{
          if(guess[i] === tail){
            tries = ++tries;
            return "Congratulations! You hit the mark!’"
          }else if(guess[i] < tail){
            tries = ++tries;
            console.log("The tail is above");
          } else if(guess[i] > tail){
            tries = ++tries;
            console.log("The tail is below");
          }
        }
      }
      return;
    }
}

console.log(donkeyGame(4)([3,7,4,6,5]));

