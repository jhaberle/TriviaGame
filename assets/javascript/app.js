var triviaQuestions = [{
	question: "Jerry is despised by his devious neighbor that lives down the hall.  Who is that neighbor?",
	answerList: ["Kramer", "Newman", "Puddy", "Wilhelm"],
	answer: 1
},{
	question: "Which NY Mets player 'allegedly' spit a loogie on Newman and Kramer?",
	answerList: ["Keith Hernandez", "Dwight Gooden", "Roger Dorn", "Ricky Vaughn"],
	answer: 0
},{
	question: "How many seasons did Seinfeld last?",
	answerList: ["Five", "Twelve", "Four", "Nine"],
	answer: 3
},{
	question: "Who is Elaine's boyfriend who likes to wear facepaint?",
	answerList: ["David Puddy", "Jay Reminschnieder", "Joel Rifkin", "Ned Izhakoff"],
	answer: 0
},{
	question: "At the Miss America pageant, Jerry ruins his girlfriend's talent portion of the show.  What did he do? ",
	answerList: ["Broker her Trumpet", "Broke her foot", "Destroyed her Magic trick", "Killed her doves"],
	answer: 3
},{
	question: "In the final episode, the Jerry, George, Elaine and Kramer are accused of what crime?",
	answerList: ["Guilty Bystanders", "Burglary", "Arson", "Speeding"],
	answer: 0
},{
	question: "What is the name of Kramer's attorney?",
	answerList: ["Johnny Cochran", "Jackie Chiles", "Barry Profit", "Lomez"],
	answer: 1
},{
	question: "George gets a job with a Major League Baseball Team.  Which team is it?",
	answerList: ["NY Mets", "Philadelphia Phillies", "NY Yankees", "LA Dodgers"],
	answer: 2
},{
	question: "George is traded away from the Yankees for concessions?  What company was he traded to?",
	answerList: ["Snapple", "Tyson Chicken", "Budweiser", "Nathan's Hot Dogs"],
	answer: 1
}];

var gifArray = ['question1', 'question2', 'question3', 'question4', 'question5', 'question6', 'question7', 'question8', 'question9', 'question10', 'question11', 'question12', 'question13','question14','question15'];
var currentQuestion; var correctAnswer; var incorrectAnswer; var unanswered; var seconds; var time; var answered; var userSelect;
var messages = {
	correct: "Giddyup!",
	incorrect: "Step your game up!",
	endTime: "Out of time!",
	finished: "Let's check your score!"
}

$('#startBtn').on('click', function(){
	$(this).hide();
	newGame();
});

$('#startOverBtn').on('click', function(){
	$(this).hide();
	newGame();
});

function newGame(){
	$('#finalMessage').empty();
	$('#correctAnswers').empty();
	$('#incorrectAnswers').empty();
	$('#unanswered').empty();
	currentQuestion = 0;
	correctAnswer = 0;
	incorrectAnswer = 0;
	unanswered = 0;
	newQuestion();
}

function newQuestion(){
	$('#message').empty();
	$('#correctedAnswer').empty();
	$('#gif').empty();
	answered = true;
	
	//sets up new questions & answerList
	$('#currentQuestion').html('Question #'+(currentQuestion+1));
	$('.question').html('<h2>' + triviaQuestions[currentQuestion].question + '</h2>');
	for(var i = 0; i < 4; i++){
		var choices = $('<div>');
		choices.text(triviaQuestions[currentQuestion].answerList[i]);
		choices.attr({'data-index': i });
		choices.addClass('thisChoice');
		$('.answerList').append(choices);
	}
	countdown();
	//clicking an answer will pause the time and setup answerPage
	$('.thisChoice').on('click',function(){
		userSelect = $(this).data('index');
		clearInterval(time);
		answerPage();
	});
}

function countdown(){
	seconds = 15;
	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	answered = true;
	//sets timer to go down
	time = setInterval(showCountdown, 1000);
}

function showCountdown(){
	seconds--;
	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	if(seconds < 1){
		clearInterval(time);
		answered = false;
		answerPage();
	}
}

function answerPage(){
	$('#currentQuestion').empty();
	$('.thisChoice').empty(); //Clears question page
	$('.question').empty();

	var rightAnswerText = triviaQuestions[currentQuestion].answerList[triviaQuestions[currentQuestion].answer];
	var rightAnswerIndex = triviaQuestions[currentQuestion].answer;
	
	//checks to see correct, incorrect, or unanswered
	if((userSelect == rightAnswerIndex) && (answered == true)){
		correctAnswer++;
		$('#message').html(messages.correct);
	} else if((userSelect != rightAnswerIndex) && (answered == true)){
		incorrectAnswer++;
		$('#message').html(messages.incorrect);
		$('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
	} else{
		unanswered++;
		$('#message').html(messages.endTime);
		$('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
		answered = true;
	}
	
	if(currentQuestion == (triviaQuestions.length-1)){
		setTimeout(scoreboard, 5000)
	} else{
		currentQuestion++;
		setTimeout(newQuestion, 5000);
	}	
}

function scoreboard(){
	$('#timeLeft').empty();
	$('#message').empty();
	$('#correctedAnswer').empty();
	$('#gif').empty();

	$('#finalMessage').html(messages.finished);
	$('#correctAnswers').html("Correct Answers: " + correctAnswer);
	$('#incorrectAnswers').html("Incorrect Answers: " + incorrectAnswer);
	$('#unanswered').html("Unanswered: " + unanswered);
	$('#startOverBtn').addClass('reset');
	$('#startOverBtn').show();
	$('#startOverBtn').html('Start Over?');
}