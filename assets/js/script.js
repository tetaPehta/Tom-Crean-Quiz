/* select all elements */
const start = document.getElementById('start');
const quiz = document.getElementById('quiz');
const question = document.getElementById('question');
const questionimg = document.getElementById('question-img');
const choiceA = document.getElementById('A');
const choiceB = document.getElementById('B');
const choiceC= document.getElementById('C');
const choiceD = document.getElementById('D');
const progress = document.getElementById('progress');
const scorediv = document.getElementById('score-container');

/* questions and possible anwseres for multi choice quiz.*/

let questions = [
 {
    imgSrc: "images/southpole.jpeg",
    question: "NAME THE CONTINENT THAT TOM CREAN TRAVELED TO?", 
    choiceA:"Australia",
    choiceB:"North Pole",
    choiceC:"Africa",
    choiceD:"South Pole",
    correct:"D"
        
 }, {
    imgSrc: "images/south-pole-pub.jpeg",
    question: "WHAT NIS THE NAME OF THE ICONIC PUB IN ANNASCAUL, CO.KERRY?", 
    choiceA:"Tom Crean Pub",
    choiceB:"South Pole Inn",
    choiceC:"The penguin Pub",
    choiceD:"The Iceberg Inn",
    correct:"B"
     
 }, {
    imgSrc: "images/tom-crean-sock1.jpeg",
    question: "WHAT IS ON TOM CREANS HEAD IN THE FAMOUS PICTURE ON BOARD OF SHIP ENDURANCE?", 
    choiceA:"Sock from his travels",
    choiceB:"His captains hat",
    choiceC:"Sleve of his jumper",
    choiceD:"Cap of a crewman",
    correct:"C"
 
 }, {
    imgSrc: "images/tom-crean-statue.jpeg",
    question: "WHAT ARE THE NAMES OF 3 PUPIES TOM CREAN IS HOLDING IN THE STATUES OF HIS MEMORIAL PARK?", 
    choiceA:"Toby, Nelson, Nell",
    choiceB:"Tom, Sean, Bobby",
    choiceC:"Jack, Jhon, Green",
    choiceD:"James, Ruby, Terra",
    correct:"A"
 
 }, {
    imgSrc: "images/old-tom-crean.jpeg",
    question: "WHAT PART OF HIS BODY DID TOM CREAN SHOW TO THE LOCAL KIDS TO SCARE THEM AWAY?", 
    choiceA:"His black toes",
    choiceB:"His wobbly tooth",
    choiceC:"His broken leg",
    choiceD:"His crooked finger",
    correct:"A"
 
 }, {
    imgSrc: "images/southpole.jpeg",
    question: "TOM FOUND A FURRY ANIMAL ONBOARD THE SHIP TERRA NOVA IN 1910. WHAT IS THE TITLE OF THE BOOK?", 
    choiceA:"Tom Crean's Dog",
    choiceB:"Tom Crean's Rabbit",
    choiceC:"Tom Crean's Fox",
    choiceD:"Tom Crean's Wolf",
    correct:"B"
 
 }, {
    imgSrc: "images/southpole.jpeg",
    question: "TOM CREANS FAMILY OPENED A BREWARY IN KENMARE, IRELAND. NAME THE ALE THEY MAKE?", 
    choiceA:"Expedition Ale",
    choiceB:"South Pole Ale",
    choiceC:"The Frozen Ale",
    choiceD:"Tom Crean's Ale",
    correct:"A"
 
 },
   
]

/* Onclick events for buttons. Action will call respective functions for particular button when clicked*/

restartBtn.addEventListener('click',restart);
prevBtn.addEventListener('click',prev);
nextBtn.addEventListener('click',next);
restartBtn.addEventListener('click',submit);