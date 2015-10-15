var userAnswer = prompt("Do you want to play a game?");
  if (userAnswer === "yes") {
    alert("I hope you like cats!");
  } else {
    alert("Well then check that box below and beat it!");
  };

var catGames = prompt("You're name is Dr. Watson. You are a Russian Blue asshole cat. Your favorite games are: keeping your owners up at night with your howling, and chasing your tail. Which game will you choose tonight(howling or chasing)?" );
  if(catGames === "howling") {
    prompt("Your dad wakes up and sets you outside of the front door, where you will wait until morning. Thanks for playing.");
  }else{
    var sleepOrSnack = prompt("You spend your entire night running around your parents' bedroom and howling to let them know you're still alive and wanting attention. Once you're finished there, do you decide to finally get some sleep or run downstairs to grab a midnight snack(sleep or snack)?");
    if (sleepOrSnack === "sleep") {
      alert("OK good, you go downstairs and curl up on the couch and let your owners get some sleep too for a change.");
    } else {
      var confrontOrSleep = prompt("Great! You go downstairs to feed your fat kitty face, but OH NO! Your owners forgot to fill your food bowl before they went to bed! Should you go back upstairs and confront them, or get some sleep and just eat in the morning? (confront or sleep)");
      if (confrontOrSleep === "sleep") {
         alert("OK good, you go downstairs and curl up on the couch and let your owners get some sleep too for a change.");
      } else {
        alert("Your dad wakes up and sets you outside of the front door, where you will wait until morning. Thanks for playing.");
      }
    }
  };
