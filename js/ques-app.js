const question = document.getElementById('question')
const submitBtn = document.getElementById('submit-btn');
const quizBox = document.getElementById('quiz-content');
let optionList = document.querySelector('.options');
let result = document.querySelector('.result-value');
let resultContainer = document.querySelector('.result-container');
let quizContainer = document.querySelector('.quiz-container')
let restartGame = document.querySelector('.play-again');
let allOptionsLength = optionList.children.length;
let questionNumber = 0;
let checkAnswer = 0;

function loadQuestion(){
    question.innerText = `${questions[questionNumber]}`

    for(let i = 0; i<allOptionsLength; i++){
        optionList.children[i].innerText = `${options[questionNumber][i]}`
    }
}

function checkOptionClass(){
    for(let i = 0; i<allOptionsLength ; i++ ){
        if(optionList.children[i].classList.contains('correct')){
            optionList.children[i].classList.remove('correct')
        }

        if(optionList.children[i].classList.contains('incorrect')){
            optionList.children[i].classList.remove('incorrect')
        }
    }
}

function checkOptionDisable(){
    for(let i = 0; i<allOptionsLength ; i++ ){
            if(optionList.children[i].classList.contains('disabled')){
                optionList.children[i].classList.remove('disabled')
            }
        }
}

function loadNextQuestion(){

    checkOptionClass();
    checkOptionDisable();

    ++questionNumber;
    if(questionNumber < questions.length){
        loadQuestion()
    } else {
        quizContainer.style.display = 'none'
        resultContainer.style.display = 'flex'
        result.innerText = `${checkAnswer}`
    }

    if(questionNumber == 4){
        submitBtn.innerText = 'Submit'
    }

}

loadQuestion()

let option = document.querySelectorAll('.option');

for (let i = 0; i<option.length; i++){
    option[i].setAttribute('onclick', 'optionSelected(this)');
}

function optionSelected(answer){
    let userAnswer = answer.textContent;
    let correctAnswer = answers[questionNumber];  

    if(userAnswer == correctAnswer){
        answer.classList.add('correct');
        checkAnswer +=100;
    } else {
        answer.classList.add('incorrect');
    }


    for(let i = 0; i<allOptionsLength; i++){
        optionList.children[i].classList.add('disabled');
    }

     console.log(userAnswer);
     console.log(correctAnswer);

     return checkAnswer;
}

function startAgain(){
    checkAnswer = 0;
    questionNumber = 0;

    quizContainer.style.display = 'flex'
    resultContainer.style.display = 'none'

    loadQuestion(questionNumber)
    return checkAnswer;
}



submitBtn.addEventListener('click', loadNextQuestion)
restartGame.addEventListener('click', startAgain)
