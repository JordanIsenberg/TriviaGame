function myFirstFunction() {
    var x = document.getElementById("starting-section");
    var y = document.getElementById("in-game-section");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
}

function mySecondFunction() {
	// Timer runs out - hide middle section and display end results
	var inGame = document.getElementById("in-game-section");
	var endGame = document.getElementById("end-game-section");
	if (inGame.style.display === "none") {
        inGame.style.display = "block";
    } else {
        inGame.style.display = "none";
    }

    if (endGame.style.display === "none") {
        endGame.style.display = "block";
    } else {
        endGame.style.display = "none";
    }

    function updateCorrectAnswers () {
    	var correctAnswers = getElementById("correct-answers");
    	// Loop through answers to tally value numbers

    	// Update the number of correct responses
    }

    function updateWrongAnswers () {
    	var wrongAnswers = getElementById("wrong-answers");
    	// Loop through answers to tally value numbers

    	// Update the number of wrong answers
    }
}

