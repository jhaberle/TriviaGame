

// Tally for right and wrong answers
var correct = 0;
var incorrect = 0;

// // questions that will be displayed throughout the game
var question0 = ["Kramer has a devious friend that lives down the hallway that loathes Jerry.  What is that friend's name?"];

var answers0 = ["Lomez", "Newman", "Jay Remenschnieder", "David Puddy"];

var question1 = ["Who is the NY Mets player that allegedly spit a loogie on Kramer and Newman?"];

var answers1 = ["Gary Carter", "Darryl Strawberry", "Dwight Gooden", "Keith Hernandez"];




// // functions for each question

// // function correctAnswer() {


// // }




// for (i = 0; i < 10; i++) (a = 0; a < 10; a++) {
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
// function wrongAnswer1() {
//     if(i != 4) {
//         alert("uh oh, wrong answer");
//     } else {
//         alert("Keith Hernandez is right!  Look at that stache!");
//     }
// }


function quest0(){
    $("#question").html(question0);
    $("#option0").html(answers0[0]);
    $("#option1").html(answers0[1]);
    $("#option2").html(answers0[2]);
    $("#option3").html(answers0[3]);
    $("#question-header").html("Let's see if you can guess the answer!");
   
}

function quest1(){
    $("#question").html(question1);
    $("#option0").html(answers1[0]);
    $("#option1").html(answers1[1]);
    $("#option2").html(answers1[2]);
    $("#option3").html(answers1[3]);
    $("#question-header").html("Let's see if you can guess the answer!");
    $("#option3").click(function() {
        if ($(answers1) === [3]);
        alert("Keith Hernandez is right!  Look at that stache!");
        correct++;
    } 
   
    $("#option0", "#option1", "#option2").click(function() {
        alert("That's a shame.");
        incorrect++;
    }
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