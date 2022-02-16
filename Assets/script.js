var javascriptBtn = document.getElementById("#javascript-button");
var cssBtn = document.getElementById("#css-button")
var htmlBtn = document.getElementById("#html-button")
var domBtn = document.getElementById("#dom-button")
var apiBtn = document.getElementById("#api-button")
var takeQuizBtn = document.getElementById("#select-subjects");

var test = document.getElementById('#content-window');
var questionEl = document.getElementById('#question-header');

var answerAbtn = document.getElementById('#answer-A');
var answerBbtn = document.getElementById('#answer-B');
var answerCbtn = document.getElementById('#answer-C');
var answerDbtn = document.getElementById('#answer-D');
var submitAnsBtn = document.getElementById('#submit-answer');

var progressEl = document.querySelector('.progress-done');

progressEl.style.width = progressEl.querySelector('data-done');
// progressEl.textContent = testSelected.question.index + " / " + testSelected.question.length;
progressEl.style.opacity = 1;

var selectedAnswer = target.answer;

// function submitAnswer(){
//  for(let i=0; i<testSelected.length;i++){
//      if(testSelected.question>0)
            // var pickQuestion = testSelected.question[i];
            // askQuestion(pickQuestion);
// }
    
// };

// function askQuestion(){
//     while(questionIndex>0 && timerEl>0){
//          questionEl.textContent = testSelected.question[i];
//          answerAbtn.textContent = testSelected.option;
//          answerBbtn.textContent = testSelected.option;
//          answerCbtn.textContent = testSelected.option;
//          answerDbtn.textContent = testSelected.option;
//          }
            // if(selectedAnswer===testSelected.answer){
            //     userScore = userScore +1;
            // }
//
//
        




//     }
// };

function selectSubject(){
    
    let testSelected = [];

    if(javascriptBtn===true){
        testSelected = (testSelected).concat(javaQuestions);
        console.log(testSelected);
    }
    if(cssBtn===true){
        testSelected = (testSelected).concat(cssQuestions);
        console.log(testSelected);
    }
    if(htmlBtn===true){
        testSelected = (testSelected).concat(htmlQuestions);
        console.log(testSelected);
    }
    if(domBtn===true){
        testSelected = (testSelected).concat(domQuestions);
        console.log(testSelected);
    }
    if(apiBtn===true){
        testSelected = (testSelected).concat(apiQuestions);
        console.log(testSelected);
    }
    else{
        window.alert("You need to select at least one test subject");
        selectSubject();
    }
    return testSelected;
    
};
// function startTest(){
//     timerStart();
//     if(testSelected.isEnded)
       
// };
function timerStart(timerEl){
    var timerEl = document.getElementById('#timer');
    timerEl.textContent = timeLeft

    var timeLeft = Math.floor(5* 1000 * 60 * testSelected.length);
    var interval = setInterval(function(){
        document.getElementById('#timer').innerHTML=timeLeft;
        timeLeft--;
        if (timeLeft === 0){
            clearInterval(interval);
            alert("Time's up! Let's see how you did!");
            endTest();
        }
    }, 1000);
}

// function endTest(){

// };


// takeQuizBtn.addEventListener("click", startTest);
takeQuizBtn.addEventListener('click', timerStart);
// submitAnsBtn.addEventListener("click", )







let javaQuestions = [
    {
        numb: 1,
        question: 'How do you keep the page from automatically running a function?' ,
        answer: 'event.preventDefault();',
        options:[
            "event.addEventListener();",
            "event.preventDefault();",
            "event.getElementById();",
            "var event = preventRefresh();"
        ]
    },
    {
        numb: 2,
        question: 'What is the difference between getElementById and getElementbyClassName?',
        answer: "getElementById connects a javascript behavior using its id, while getElementByClassName connects a javascript behavior using its class",
        options:[
            "getElementById connects a javascript behavior using its id, while getElementByClassName connects a javascript behavior using its class",
            "getElementByClassName doesn't exist",
            "getElementById only works in local variables",
            "There is no difference"
        ]
    },
    {
        numb: 3,
        question: "What is recursion?",
        answer: "When a function calls itself in an endless loop",
        options:[
            "When you use a variable name more than once",
            "A nickname for for-loops and while-loops",
            "When a function calls itself in an endless loop",
            "Recursion isn't a term in Javascript"
        ]
    },
    {
        numb: 4,
        question: "What is an array?",
        answer: "A special variable, which can hold more than one value",
        options:[
            "The fish that killed Steve Irwin",
            "A nickname for multiple related functions",
            "An excellent thing to google",
            "A special variable, which can hold more than one value"
        ]
    },
    {
        numb: 5,
        question: "Which option will not give you an infinite loop?",
        answer: "Make sure the variable you're looping is not recursive",
        options:[
            "Make sure the variable you're looping is not recursive",
            "Repeat function calls in every new function",
            "Don't check your code",
            "Use a while loop instead of a for loop "
        ]
    }
]
let cssQuestions = [
    {
        numb: 1,
        question: "What is an example of a pseudo-class?",
        answer: ".button :hover",
        options:[
            ".button-hover",
            ".button//hover ",
            ".button{hover}",
            ".button :hover"
        ]
    },
    {
        numb: 2,
        question: "What's not a correct way to write a color?",
        answer: "/*(color)*/",
        options:[
            "#fffff",
            "/*(fffff)*/",
            "#024e76",
            "rgb(0,0,0)"
        ]
    },
    {
        numb: 3,
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheets",
        options:[
            "Cascading Style Sheets",
            "Candy Sweet and Salty",
            "Come and See Sandy",
            "Cancel Shannon Sharp"
        ]
    }

]
let htmlQuestions = [
    {
        numb: 1,
        question: "How can you populate the standard HTML structure by typing a single character?",
        answer: "!",
        options:[
            "#",
            "H",
            "!",
            "5"
        ]
    },
    {
        numb: 2,
        question: "What does the <meta> tag stand for?",
        answer: "Unseen data that tells the search engine what the website is",
        options:[
            "Unseen data that tells the search engine what the website is",
            "How Zuckerberg is tracking your data illegaly",
            "Outlines how the HTML structure has to look to work properly",
            "Meta tags are not real"
        ]
    },
    {
        numb: 3,
        question: "What is the correct tag to use when making an area for the user to type a message?",
        answer: "<textarea>",
        options:[
            "<article>",
            "<section>",
            "<input>",
            "<textarea>"
        ]
    }
]
let apiQuestions = [
    {
        numb: 1,
        question: "How do you tell the browser what data to track?",
        answer: "storage.setItem",
        options:[
            "localDocument.setItem",
            "localStorage.getItem",
            "localStorage.setItem",
            "localDocument.getItem"
        ]
    },
    {
        numb: 2,
        question: "What is a helpful tool to fixing broken javascript code?",
        answer: "debugger",
        options:[
            "console",
            "debugger",
            "inspect",
            "give up"
        ]
    },
    {
        numb: 3,
        question: "How do you tell the browser to return the value of a tracked item?",
        answer: "localStorage.getItem",
        options:[
            "localDocument.setItem",
            "localStorage.getItem",
            "localStorage.setItem",
            "localDocument.getItem"            
        ]
    },
    {
        numb: 4,
        question: "What is the difference between console.log vs console.dir",
        answer: "console.dir recognizes the object just as an object and outputs its properties",
        options:[
            "console.dir isn't real",
            "console.log and console.dir are the same thing",
            "console.dir recognizes the object just as an object and outputs its properties",
            "console.log recognizes the object just as an object and outputs its properties"
        ]
    }
]
let domQuestions = [
    {
        numb: 1,
        question: "What does DOM stand for?",
        answer: "Dynamic Object Management",
        options:[
            "Don't Open Me",
            "Dynamic Object Management",
            "Digging Out My Eyes",
            "Document Outsource Management"
        ]
    },
    {
        numb: 2,
        question: "What can you manipulate with DOM?",
        answer: "Both HTML and CSS",
        options:[
            "HTML elements",
            "CSS classes",
            "Neither of these",
            "Both HTML and CSS"
        ]
    },
    {
        numb: 3,
        question: "What is an event listener",
        answer: "A trigger that calls a function when an event occurs",
        options:[
            "A sports caster",
            "A camera",
            "None of these",
            "A trigger that calls a function when an event occurs"
        ]
    }
]



/*function endTest(testSelected){

    

    HIGHSCORE FUNCTION

    function getUserInfo(){
    var getUin = window.prompt("Type your initials");
    while (getUin === "" || getUin === null){
        getUin = prompt("Please type your initials")
    }
    console.log("User initials are " + getUin);
    return getUin;
    };


    var userInfo = {
        initials: getUserInfo(),
        score: getUserScore()
    };



    


    

*/



 /*how do I randomize multiple choice answers? how do I have individual arrays for each question?

 button changed after click:

 element.addEventListener('click',(e) =>{
     e.preventDefault();

     element.style = "class='button-clicked'"
 }));

 element onreset look it up

 RANDOM FOR LOOP

 for(let i=0; i<testSelected.length;i++){
        if(EventTarget.matches===true){

        }

 */

        // FOR LOOP FOR SET/GET ITEM

//     var orderLi = document.createElement('ol')

//     for(i=0; i<highScores.length; i++){
//         var listEl = document.createElement('li')
//         listEl.textContent = higscores[i].userInitials + ": " + highscores[i].score;
//         orderLi.appendChild(listEl);
//     }
//     body.appendChild(orderLi);
    
//     finalScore.textContent = localStorage.getItem("your score", JSON.stringify(timeLeft))

//     submitInitials.addEventListener(click,function(event){
//         event.preventDefault();
//         var userStats = {
//             userinitials: uswrinput.value.trim(),
//             score: localStorage.getItem('yourscore',JSON.stringify(timeLeft))
//         };
//         highScores.push(userStats)
//     }
//     localStorage.setItem('highScores',JSON.stringify(highScores));
//     userScore.textContent = JSON.parse(localStorage.getItem(userinfo)).userInitials





// take quiz function needs to include multiple subjects with randomized answers within respective arrays, require at least one button selection, make buttons visible, and start timer

// start timer function needs to be 15 minutes per array

 
// event.preventDefault();






// Time remaining in footer
// how to submit quiz on last question
// how to keep track of right and wrong answers setElement/getElement

