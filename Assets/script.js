var timerEl = document.getElementById('#timer');

var javascriptBtn = document.getElementById("#javascript-button");
var cssBtn = document.getElementById("#css-button")
var htmlBtn = document.getElementById("#html-button")
var domBtn = document.getElementById("#dom-button")
var apiBtn = document.getElementById("#api-button")
var takeQuizBtn = document.getElementById("#select-subjects");

var questionEl = document.getElementById('#question-header');

var answerAbtn = document.getElementById('#answer-A');
var answerBbtn = document.getElementById('#answer-B');
var answerCbtn = document.getElementById('#answer-C');
var answerDbtn = document.getElementById('#answer-D');
var submitAnsBtn = document.getElementById('#submit-answer');

// event.preventDefault();

function buttonTest(event) {
    var targetEl = event.target;

    console.log(targetEl);
};

function submitAnswer(event){
    var answerSelected = event.target;
    
};
function selectSubject(testSelected){
    
    let testSelected = [];

    if(javascriptBtn===true){
        testSelected = testSelected + javaQuestions;
    }
    if(cssBtn===true){
        testSelected = testSelected + cssQuestions;
    }
    if(htmlBtn===true){
        testSelected = testSelected + cssQuestions;
    }
    if(domBtn===true){
        testSelected = testSelected + cssQuestions;
    }
    if(apiBtn===true){
        testSelected = testSelected + cssQuestions;
    };

    return testSelected;


};
function startTest(){

};
function endTest(){

};




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
        answer: ,
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


/*function generateTest(testSelected){
    for(let i=0; i<testSelected.length;i++){
        if()
    }
    


*/



 /*how do I randomize multiple choice answers? how do I have individual arrays for each question?

 button changed after click:

 element.addEventListener('click',(e) =>{
     e.preventDefault();

     element.style = "class='button-clicked'"
 }));

 element onreset look it up

 */






// take quiz function needs to include multiple subjects with randomized answers within respective arrays, require at least one button selection, make buttons visible, and start timer

// start timer function needs to be 15 minutes per array

// select quizes function needs to have at least one input selected before running take quiz function: 
// event.preventDefault(); , if x===true &| y===true &| z===true etc, return (testQuestions)
// testQuestions = testSelected.array; if (x===true) testQuestions = testQuestions + xarray;






// Time remaining in header
// how to submit quiz on last question
// how to keep track of right and wrong answers setElement/getElement
// add arrays w/ 15 values per 
