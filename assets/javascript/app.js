// // questions that will be displayed throughout the game

var question0 = ["Kramer has a devious friend that lives down the hallway that loathes Jerry.  What is that friend's name?"];

var answers0 = ["Lomez", "Newman", "Jay Remenschnieder", "David Puddy"];

var question1 = ["Who is the NY Mets player that allegedly spit a loogie on Kramer and Newman?"];

var answers1 = ["Gary Carter", "Darryl Strawberry", "Dwight Gooden", "Keith Hernandez"];

// Tally for right and wrong answers
var correct = 0;
var incorrect = 0;

var startGame = alert("As Kramer would say, GIDDYUP!");


// // functions for each question

// // function correctAnswer() {


// // }




// for (i = 0; i < questions.length; i++)  {
//     quest();
//     answer();
//     console.log(quest);
// }

// function quest() {
//     $("#question").html(question[i]);
// }


// function answer() {
//     $("#option0").html(answers0[0]);
//     $("#option1").html(answers0[1]);
//     $("#option2").html(answers0[2]);
//     $("#option3").html(answers0[3]);
    
// }
// function correctAnswer1() {
//     if(i == 4) {
//         alert("Keith Hernandez is right!  Look at that stache!");
//     } else {
//         alert("uh oh, wrong answer");
//     }
// }

$(document).ready (function() {

    
    function game() {
        startGame;
        quest0();
        quest1();
        // quest2();
        // quest3();
        // quest4();
        // quest5();
        // quest6();
        // quest7();
        // quest8();
        // quest9();
        // correct = 0;
        // incorrect = 0;
    }




    function quest0(){
        $("#question").html(question0);
        $("#option0").html(answers0[0]);
        $("#option1").html(answers0[1]);
        $("#option2").html(answers0[2]);
        $("#option3").html(answers0[3]);
        $("#question-header").html("Question 1: Let's see if you can guess the answer!");
        $("#option1").on('click',function() {
            alert("Hello...Newman");
            correct++;
        });
        $("#option0", "#option1", "#option2").on('click',function() {
            alert("That's a shame.");
            incorrect++;
        });
      
    }

    function quest1(){
        $("#question").html(question1);
        $("#option0").html(answers1[0]);
        $("#option1").html(answers1[1]);
        $("#option2").html(answers1[2]);
        $("#option3").html(answers1[3]);
        $("#question-header").html("Question 2: This is like an easy grounder.  Don't let it go through your legs.");
        $("#option3").on('click',function() {
            // if ($(answers1) === [3]);
            alert("Keith Hernandez is right!  Look at that stache!");
            correct++;
        });
   
        $("#option0", "#option1", "#option2").click(function() {
            alert("That's a shame.");
            incorrect++;
        });   
       
    }

        // if(i === 3) {
        //     alert("Keith Hernandez is right!  Look at that stache!");
        //     correct++;
        // } else {
        //     alert("uh oh, wrong answer");
        //     incorrect++;
        // }



        // function quest2(){
        //     $("#question").html(question2);
        //     $("#option0").html(answers2[0]);
        //     $("#option1").html(answers2[1]);
        //     $("#option2").html(answers2[2]);
        //     $("#option3").html(answers2[3]);
        //     console.log(question);
        // }

        // function quest3(){
        //     $("#question").html(question3);
        //     $("#option0").html(answers3[0]);
        //     $("#option1").html(answers3[1]);
        //     $("#option2").html(answers3[2]);
        //     $("#option3").html(answers3[3]);
        //     console.log(question);
        // }

        // function quest4(){
        //     $("#question").html(question4);
        //     $("#option0").html(answers4[0]);
        //     $("#option1").html(answers4[1]);
        //     $("#option2").html(answers4[2]);
        //     $("#option3").html(answers4[3]);
        //     console.log(question);
        // }

        // function quest5(){
        //     $("#question").html(question5);
        //     $("#option0").html(answers5[0]);
        //     $("#option1").html(answers5[1]);
        //     $("#option2").html(answers5[2]);
        //     $("#option3").html(answers5[3]);
        //     console.log(question);
        // }

        // function quest6(){
        //     $("#question").html(question6);
        //     $("#option0").html(answers6[0]);
        //     $("#option1").html(answers6[1]);
        //     $("#option2").html(answers6[2]);
        //     $("#option3").html(answers6[3]);
        //     console.log(question);
        // }

        // function quest7(){
        //     $("#question").html(question7);
        //     $("#option0").html(answers7[0]);
        //     $("#option1").html(answers7[1]);
        //     $("#option2").html(answers7[2]);
        //     $("#option3").html(answers7[3]);
        //     console.log(question);
        // }

        // function quest8(){
        //     $("#question").html(question8);
        //     $("#option0").html(answers8[0]);
        //     $("#option1").html(answers8[1]);
        //     $("#option2").html(answers8[2]);
        //     $("#option3").html(answers8[3]);
        //     console.log(question);
        // }

        // function quest9(){
        //     $("#question").html(question9);
        //     $("#option0").html(answers9[0]);
        //     $("#option1").html(answers9[1]);
        //     $("#option2").html(answers9[2]);
        //     $("#option3").html(answers9[3]);
       //     console.log(question);

       game();
});









// -------------------------------------------------------------------------------------------
// // questions that will be displayed throughout the game


// var questions = [
//     {
//         question: "Kramer has a devious friend that lives down the hallway that loathes Jerry.  What is that friend's name?",
//         answers: ["Lomez", "Newman", "Jay Remenschnieder", "David Puddy"],
//         correctAnswer: 1
//     },{
//         question: "Who is the NY Mets player that allegedly spit a loogie on Kramer and Newman?",
//         answers: ["Gary Carter", "Darryl Strawberry", "Dwight Gooden", "Keith Hernandez"],
//         correctAnswer: 3
//     }
// ]


// // Tally for right and wrong answers
// var correct = 0;
// var incorrect = 0;
// var currentQuestion = "";



// // start button to kick off the game
// $('#startOverBtn').on('click', function(){
// 	$(this).hide();
// 	newGame();
// });

// function newGame() {
//     var startGame = alert("As Kramer would say, GIDDYUP!");
//     $('#question').html('Question ' + questions.length);
//     $('.questions').html('<h2>' + questions[currentQuestion].question + '<h2>')
//     correct = 0;
//     incorrect = 0;
//     nextQuestion();
//     for (var i= 0; i < 4; i++) {
//         var choices = $('div');
//         choices.text(questions[currentQuestion].answers[i]);
// 		choices.attr({'data-index': i });
// 		choices.addClass('thisChoice');
// 		$('.answerList').append(choices);
//     }



// // // functions for each question

// // // function correctAnswer() {


// // // }




// // for (i = 0; i < questions.length; i++)  {
// //     quest();
// //     answer();
// //     console.log(quest);
// // }

// // function quest() {
// //     $("#question").html(question[i]);
// // }


// // function answer() {
// //     $("#option0").html(answers0[0]);
// //     $("#option1").html(answers0[1]);
// //     $("#option2").html(answers0[2]);
// //     $("#option3").html(answers0[3]);
    
// // }
// // function correctAnswer1() {
// //     if(i == 4) {
// //         alert("Keith Hernandez is right!  Look at that stache!");
// //     } else {
// //         alert("uh oh, wrong answer");
// //     }
// // }

// $(document).ready (function() {

    
//     function game() {
//         startGame;
//         quest0();
//         quest1();
//         // quest2();
//         // quest3();
//         // quest4();
//         // quest5();
//         // quest6();
//         // quest7();
//         // quest8();
//         // quest9();
//         // correct = 0;
//         // incorrect = 0;
//     }




//     function quest0(){
//         $("#question").html(question0);
//         $("#option0").html(answers0[0]);
//         $("#option1").html(answers0[1]);
//         $("#option2").html(answers0[2]);
//         $("#option3").html(answers0[3]);
//         $("#question-header").html("Question 1: Let's see if you can guess the answer!");
//         $("#option1").on('click',function() {
//             alert("Hello...Newman");
//             correct++;
//         });
//         $("#option0", "#option1", "#option2").on('click',function() {
//             alert("That's a shame.");
//             incorrect++;
//         });
      
//     }

//     function quest1(){
//         $("#question").html(question1);
//         $("#option0").html(answers1[0]);
//         $("#option1").html(answers1[1]);
//         $("#option2").html(answers1[2]);
//         $("#option3").html(answers1[3]);
//         $("#question-header").html("Question 2: This is like an easy grounder.  Don't let it go through your legs.");
//         $("#option3").click(function() {
//             // if ($(answers1) === [3]);
//             alert("Keith Hernandez is right!  Look at that stache!");
//             correct++;
//         });
   
//         $("#option0", "#option1", "#option2").click(function() {
//             alert("That's a shame.");
//             incorrect++;
//         });   
       
//     }

//         // if(i === 3) {
//         //     alert("Keith Hernandez is right!  Look at that stache!");
//         //     correct++;
//         // } else {
//         //     alert("uh oh, wrong answer");
//         //     incorrect++;
//         // }



//         // function quest2(){
//         //     $("#question").html(question2);
//         //     $("#option0").html(answers2[0]);
//         //     $("#option1").html(answers2[1]);
//         //     $("#option2").html(answers2[2]);
//         //     $("#option3").html(answers2[3]);
//         //     console.log(question);
//         // }

//         // function quest3(){
//         //     $("#question").html(question3);
//         //     $("#option0").html(answers3[0]);
//         //     $("#option1").html(answers3[1]);
//         //     $("#option2").html(answers3[2]);
//         //     $("#option3").html(answers3[3]);
//         //     console.log(question);
//         // }

//         // function quest4(){
//         //     $("#question").html(question4);
//         //     $("#option0").html(answers4[0]);
//         //     $("#option1").html(answers4[1]);
//         //     $("#option2").html(answers4[2]);
//         //     $("#option3").html(answers4[3]);
//         //     console.log(question);
//         // }

//         // function quest5(){
//         //     $("#question").html(question5);
//         //     $("#option0").html(answers5[0]);
//         //     $("#option1").html(answers5[1]);
//         //     $("#option2").html(answers5[2]);
//         //     $("#option3").html(answers5[3]);
//         //     console.log(question);
//         // }

//         // function quest6(){
//         //     $("#question").html(question6);
//         //     $("#option0").html(answers6[0]);
//         //     $("#option1").html(answers6[1]);
//         //     $("#option2").html(answers6[2]);
//         //     $("#option3").html(answers6[3]);
//         //     console.log(question);
//         // }

//         // function quest7(){
//         //     $("#question").html(question7);
//         //     $("#option0").html(answers7[0]);
//         //     $("#option1").html(answers7[1]);
//         //     $("#option2").html(answers7[2]);
//         //     $("#option3").html(answers7[3]);
//         //     console.log(question);
//         // }

//         // function quest8(){
//         //     $("#question").html(question8);
//         //     $("#option0").html(answers8[0]);
//         //     $("#option1").html(answers8[1]);
//         //     $("#option2").html(answers8[2]);
//         //     $("#option3").html(answers8[3]);
//         //     console.log(question);
//         // }

//         // function quest9(){
//         //     $("#question").html(question9);
//         //     $("#option0").html(answers9[0]);
//         //     $("#option1").html(answers9[1]);
//         //     $("#option2").html(answers9[2]);
//         //     $("#option3").html(answers9[3]);
//        //     console.log(question);

//        game();
// });

