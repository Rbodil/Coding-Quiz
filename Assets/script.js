var javascriptBtn = document.getElementById("javascript-button");
var cssBtn = document.getElementById("css-button")
var htmlBtn = document.getElementById("html-button")
var domBtn = document.getElementById("dom-button")
var apiBtn = document.getElementById("api-button")
var takeQuizBtn = document.getElementById("select-subjects");

var test = document.getElementById('content-window');
var questionEl = document.getElementById('question-header');
var correctAns = 0;
var wrongAns = 0;


// allows user to select more than one subject

var subjectsObj = {
    javascriptBtn:false,
    cssBtn:false,
    htmlBtn:false,
    domBtn:false,
    apiBtn:false
};
// pushes questions in different subjects into a new array used for the quiz
javascriptBtn.addEventListener('click', ()=>{
    subjectsObj.javascriptBtn = !subjectsObj.javascriptBtn
    javascriptBtn.classList.add('button-clicked');
});
cssBtn.addEventListener('click', ()=>{
    subjectsObj.cssBtn = !subjectsObj.cssBtn
    cssBtn.classList.add('button-clicked');  
});
htmlBtn.addEventListener('click', ()=>{
    subjectsObj.htmlBtn = !subjectsObj.htmlBtn
    htmlBtn.classList.add('button-clicked');
    
});
domBtn.addEventListener('click', ()=>{
    subjectsObj.domBtn = !subjectsObj.domBtn
    domBtn.classList.add('button-clicked');
    console.log(subjectsObj);
});
apiBtn.addEventListener('click', ()=>{
    subjectsObj.apiBtn = !subjectsObj.apiBtn
    apiBtn.classList.add('button-clicked');
    console.log(subjectsObj);
});

var answerAbtn = document.getElementById('answerA');
var answerBbtn = document.getElementById('answerB');
var answerCbtn = document.getElementById('answerC');
var answerDbtn = document.getElementById('answerD');
var submitParent = document.getElementById('submitParent');
var submitAnsBtn = document.getElementById('submit-answer');
var testSelected = [];
var timeLeft = [];







function selectSubject(){

    testSelected = [];

    if(subjectsObj.javascriptBtn===true){
        testSelected = (testSelected).concat(javaQuestions);
        console.log(testSelected);
    }
    if(subjectsObj.cssBtn===true){
        testSelected = (testSelected).concat(cssQuestions);
        console.log(testSelected);
    }
    if(subjectsObj.htmlBtn===true){
        testSelected = (testSelected).concat(htmlQuestions);
        console.log(testSelected);
    }
    if(subjectsObj.domBtn===true){
        testSelected = (testSelected).concat(domQuestions);
        console.log(testSelected);
    }
    if(subjectsObj.apiBtn===true){
        testSelected = (testSelected).concat(apiQuestions);
        console.log(testSelected);
    }
    if(Object.values(subjectsObj).every((i)=>!i)){
        window.alert("You need to select at least one test subject");
    };
    
};
function startTest(){
    
    alert('You have 1 minute per question. There are ' + testSelected.length + " questions in your quiz. Good luck!!");
    timerStart();
    askQuestion();
    

    localStorage.setItem("Number Correct", JSON.stringify(correctAns));
    localStorage.setItem("Number Incorrect", JSON.stringify(wrongAns));
    localStorage.setItem("time bonus", JSON.stringify(timeLeft));
};
function timerStart(){
    let startingMin = testSelected.length;
    let time = startingMin *60; 
    var timerEl = document.getElementById('timer');

    const timeOut = setInterval(updateTime, 1000);

    function updateTime(){
        const minutes = Math.floor(time/60);
        let seconds = time % 60;

        timerEl.innerHTML = minutes + ":" + seconds;
        time--;

    }

    if(time===0){
        clearInterval(timeOut);
        endTest();
    }

};
    
var questionIndex = 0;

function askQuestion(){
    
    //asks first question
    
    questionEl.textContent = testSelected[questionIndex].question;
    answerAbtn.textContent = testSelected[questionIndex].options[0];
    answerBbtn.textContent = testSelected[questionIndex].options[1];
    answerCbtn.textContent = testSelected[questionIndex].options[2];
    answerDbtn.textContent = testSelected[questionIndex].options[3];
    
    //if else allows for questions to be answered on click without bugs
    
    answerAbtn.addEventListener('click', ()=>{
        if(answerAbtn.textContent==testSelected[questionIndex].answer){
            console.log('correct');
            questionIndex++;
            correctAns++

            askQuestion();
        }
        else if(answerAbtn.textContent!==testSelected[questionIndex].answer){
            console.log("incorrect");
            questionIndex++;
            wrongAns++
            askQuestion();
            
        }
    })
    answerBbtn.addEventListener('click', ()=>{
        if(answerBbtn.textContent==testSelected[questionIndex].answer){
            console.log('correct');
            questionIndex++;
            correctAns++

            askQuestion();
        }
        else if(answerBbtn.textContent!==testSelected[questionIndex].answer){
            console.log("incorrect");
            questionIndex++;
            wrongAns++
            askQuestion();
            
        }
        
    })
    answerCbtn.addEventListener('click', ()=>{
        if(answerCbtn.textContent==testSelected[questionIndex].answer){
            console.log('correct');
            questionIndex++;
            correctAns++

            askQuestion();
        }
        else if(answerCbtn.textContent!==testSelected[questionIndex].answer){
            console.log("incorrect");
            questionIndex++;
            wrongAns++
            askQuestion();

        }
    
    })
    answerDbtn.addEventListener('click', ()=>{
        if(answerDbtn.textContent==testSelected[questionIndex].answer){
            console.log('correct');
            questionIndex++;
            correctAns++

            askQuestion();
        }
        else if(answerDbtn.textContent!==testSelected[questionIndex].answer){
            console.log("incorrect");
            questionIndex++;
            wrongAns++
            askQuestion();
        }
        
    })               
    
    // when the end of test is reached, user submits quiz with dynamically generated button, button triggers functions

    if(questionEl==undefined||testSelected[questionIndex].answer==undefined){
        let submitQuizBtn = document.createElement('button');
        submitQuizBtn.className = 'submit-answer';
        submitQuizBtn.innerHTML = "<button>Submit Quiz</button>";

        submitParent.appendChild(submitQuizBtn);

        submitQuizBtn.addEventListener('click',endTest);
        submitQuizBtn.addEventListener('click',saveTimer);

        timeLeft.push(timerEl);
        console.log(correctAns);
        console.log(wrongAns);
    }
                  
    

    
};
function saveTimer(){

    localStorage.getItem(JSON.parse(timerEl));

    //hopefully returns the time left in the test
    
};

function endTest(){
    
    //hopefully collects user data

    function getUserScore(){
        localStorage.getItem(JSON.parse(correctAns));
        localStorage.getItem(JSON.parse(wrongAns));

        userScore = correctAns - wrongAns +timeLeft;
    }
    

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
        console.log(userInfo)
    return userInfo;
    
};

function showScores(){

    //hopefully dynamically generates highscore list from previous tests

    var orderLi = document.createElement('ol')

    for(i=0; i<highScores.length; i++){
        var listEl = document.createElement('li')
        listEl.textContent = higscores[i].getUin + ": " + highscores[i].userScore;
        orderLi.appendChild(listEl);
    }
    body.appendChild(orderLi);
    
    finalScore.textContent = localStorage.getItem("your score", JSON.stringify(timeLeft));

    submitInitials.addEventListener("click", (e)=>{
        e.preventDefault();
        var userStats = {
            userinitials: uswrinput.value.trim(),
            score: localStorage.getItem('yourscore',JSON.stringify(timeLeft))
        };
        highScores.push(userStats)
    });


    localStorage.setItem('highScores',JSON.stringify(highScores));
    userScore.textContent = JSON.parse(localStorage.getItem(userinfo)).userInitials


}

takeQuizBtn.addEventListener('click',selectSubject);
takeQuizBtn.addEventListener('click',startTest);
 





//question arrays


let javaQuestions = [
    {
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
        question: 'What is the difference between getElementById and getElementbyClassName?',
        answer: "getElementById uses id names, while getElementByClassName uses class attributes",
        options:[
            "getElementById uses id names, while getElementByClassName uses class attributes",
            "getElementByClassName doesn't exist",
            "getElementById only works in local variables",
            "There is no difference"
        ]
    },
    {
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
        question: "What is the correct tag to use when making an area for the user to type a message?",
        answer: "textarea",
        options:[
            "article",
            "section",
            "input",
            "textarea"
        ]
    }
]
let apiQuestions = [
    {
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



