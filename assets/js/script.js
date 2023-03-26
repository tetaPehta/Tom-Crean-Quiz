

/* questions and possible anwseres for multi choice quiz.*/

const quizData = [
 {
    
    question: "NAME THE CONTINENT THAT TOM CREAN TRAVELED TO?", 
    choiceA:"Australia",
    choiceB:"North Pole",
    choiceC:"Africa",
    choiceD:"South Pole",
    correct:"D"
        
 }, 
 {
    
    question: "WHAT NIS THE NAME OF THE ICONIC PUB IN ANNASCAUL, CO.KERRY?", 
    choiceA:"Tom Crean Pub",
    choiceB:"South Pole Inn",
    choiceC:"The penguin Pub",
    choiceD:"The Iceberg Inn",
    correct:"B"
     
 }, 
 {
    
    question: "WHAT IS ON TOM CREANS HEAD IN THE FAMOUS PICTURE ON BOARD OF SHIP ENDURANCE?", 
    choiceA:"Sock from his travels",
    choiceB:"His captains hat",
    choiceC:"Sleve of his jumper",
    choiceD:"Cap of a crewman",
    correct:"C"
 
 }, 
 {
    
    question: "WHAT ARE THE NAMES OF 3 PUPIES TOM CREAN IS HOLDING IN THE STATUES OF HIS MEMORIAL PARK?", 
    choiceA:"Toby, Nelson, Nell",
    choiceB:"Tom, Sean, Bobby",
    choiceC:"Jack, Jhon, Green",
    choiceD:"James, Ruby, Terra",
    correct:"A"
 
 }, 
 {
    
    question: "WHAT PART OF HIS BODY DID TOM CREAN SHOW TO THE LOCAL KIDS TO SCARE THEM AWAY?", 
    choiceA:"His black toes",
    choiceB:"His wobbly tooth",
    choiceC:"His broken leg",
    choiceD:"His crooked finger",
    correct:"A"
 
 }, 
 {
    imgSrc: "../images/southpole.jpeg",
    question: "TOM FOUND A FURRY ANIMAL ONBOARD THE SHIP TERRA NOVA IN 1910. WHAT IS THE TITLE OF THE BOOK?", 
    choiceA:"Tom Crean's Dog",
    choiceB:"Tom Crean's Rabbit",
    choiceC:"Tom Crean's Fox",
    choiceD:"Tom Crean's Wolf",
    correct:"B"
 
 }, 
 {
    
    question: "TOM CREANS FAMILY OPENED A BREWARY IN KENMARE, IRELAND. NAME THE ALE THEY MAKE?", 
    choiceA:"Expedition Ale",
    choiceB:"South Pole Ale",
    choiceC:"The Frozen Ale",
    choiceD:"Tom Crean's Ale",
    correct:"A"
 
 },
   
];
const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".anwser");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

let currentQuiz = 0;
let score = 0;

const deselectAnwsers = () => {
   answerElements.forEach((anwser) => (anwser.checked = false));
};

const getSelected = () => {
   let anwser;
   answerElements.forEach((answerElement) => {
      if (answerElement.checked) anwser = answerElement.id;
   });
   return anwser;
};

const loadQuiz = () => {
   deselectAnwsers();
   const currentQuizData = quizData[currentQuiz];
   questionElement.innerText = currentQuizData.question;
   a_text.innerText = currentQuizData.a;
   b_text.innerText = currentQuizData.b;
   c_text.innerText = currentQuizData.c;
   d_text.innerText = currentQuizData.d;
}

loadQuiz;












