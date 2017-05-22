
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var win = 0;
var lose = 0;
var left = 12;



document.onkeyup = function(event) {
	var randLetter = letters[Math.floor(Math.random() * letters.length)];
		console.log(randLetter)
		
    var userGuess = event.key;

    if(userGuess === randLetter) {
        win++;
    }else {
        left--;
    }

    if(left === 0){
        lose++
    }

    console.log(win)
    console.log(lose)
    console.log(left)

    document.getElementById("wins").innerHtml = win;
    document.getElementById("losses").innerHtml = lose;
    document.getElementById("guessesLeft").innerHtml = left;
}