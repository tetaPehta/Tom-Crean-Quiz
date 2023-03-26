

/* questions and possible anwseres for multi choice quiz.*/

const quizData = [
 {
    
    question: "NAME THE CONTINENT THAT TOM CREAN TRAVELED TO?", 
    choicea:"Australia",
    choiceb:"North Pole",
    choicec:"Africa",
    choiced:"South Pole",
    correct:"d"
        
 }, 
 {
    
    question: "WHAT NIS THE NAME OF THE ICONIC PUB IN ANNASCAUL, CO.KERRY?", 
    choicea:"Tom Crean Pub",
    choiceb:"South Pole Inn",
    choicec:"The penguin Pub",
    choiced:"The Iceberg Inn",
    correct:"b"
     
 }, 
 {
    
    question: "WHAT IS ON TOM CREANS HEAD IN THE FAMOUS PICTURE ON BOARD OF SHIP ENDURANCE?", 
    choicea:"Sock from his travels",
    choiceb:"His captains hat",
    choicec:"Sleve of his jumper",
    choiced:"Cap of a crewman",
    correct:"c"
 
 }, 
 {
    
    question: "WHAT ARE THE NAMES OF 3 PUPIES TOM CREAN IS HOLDING IN THE STATUES OF HIS MEMORIAL PARK?", 
    choicea:"Toby, Nelson, Nell",
    choiceb:"Tom, Sean, Bobby",
    choiceb:"Jack, Jhon, Green",
    choiced:"James, Ruby, Terra",
    correct:"a"
 
 }, 
 {
    
    question: "WHAT PART OF HIS BODY DID TOM CREAN SHOW TO THE LOCAL KIDS TO SCARE THEM AWAY?", 
    choicea:"His black toes",
    choiceb:"His wobbly tooth",
    choicec:"His broken leg",
    choiced:"His crooked finger",
    correct:"a"
 
 }, 
 {
    
    question: "TOM FOUND A FURRY ANIMAL ONBOARD THE SHIP TERRA NOVA IN 1910. WHAT IS THE TITLE OF THE BOOK?", 
    choicea:"Tom Crean's Dog",
    choiceb:"Tom Crean's Rabbit",
    choiced:"Tom Crean's Fox",
    choiced:"Tom Crean's Wolf",
    correct:"b"
 
 }, 
 {
    
    question: "TOM CREANS FAMILY OPENED A BREWARY IN KENMARE, IRELAND. NAME THE ALE THEY MAKE?", 
    choicea:"Expedition Ale",
    choiceb:"South Pole Ale",
    choicec:"The Frozen Ale",
    choiced:"Tom Crean's Ale",
    correct:"a"
 
 },
   
];
const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll("anwser");
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
};

loadQuiz ();

submitButton.addEventListner("click", () => {
   const anwser = getSelected();
   if (anwser) {
    if (anwser === quizData[currentQuiz].correct) score ++;
    currentQuiz++;
    if (currentQuiz < quizData.length)  loadQuiz();
    else {
      quiz.innerHTML = `
         <h2>You anwsered ${score}/${quizData.lenth} questions correctly</h2>
         <button onclick = "history.go(0)" >Play Again</button>
      `;
    }

   }
});













