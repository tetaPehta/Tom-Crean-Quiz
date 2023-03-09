const restartBtn = document.getElementById('restart');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const submitBtn = document.getElementById('submit');
const trueBtn = document.getElementById('True');
const falseBtn = document.getElementById('False');
const userScore = document.getElementById('user-score');
const questionText = document.getElementById('question-text');

/* questions and possible anwsers for the quiz, with true or false statment.*/

let currentQuestion = 0;
var score = 0;

let questions = [
    {
        question: "NAME THE CONTINENT THAT TOM CREAN TRAVELED TO?",
        anwsers: [
            {option:"Australia",anwser:false},
            {option:"North Pole",anwser:false},
            {option:"Africa",anwser:false},
            {option:"South Pole",anwser:true}
        ]
    },
    {
        question: "WHAT IS COVERING TOM CREANS HEAD IN THE FAMUS PICTURE IN BOARD SHUP ENDURANCE?",
        anwsers: [
            {option:"A sock from his travels",anwser:false},
            {option:"A captains hat",anwser:false},
            {option:"Asleave of a jumper",anwser:true},
            {option:"A cap of his crewman",anwser:false}
        ]
    },
    {
        question: "WHAT IS THE NAME OF ICONIC PUB IN ANNASCAUL, CO.KERRY?",
        anwsers: [
            {option:"Tom Crean Pub",anwser:false},
            {option:"The Penguin Pub",anwser:false},
            {option: "South Pole Inn",anwser:true},
            {option:"The Iceberg Inn",anwser:false}
        ]
    },
    {
        question:"WHAT ARE THE NAMES OF 3 PUPIES TOM CREAN IS HOLDING IN THE STATUE OF HIS MEMORIAL PARK?",
        anwsers: [
            {option:"Toby, Nelson, Nell",anwser:true},
            {option:"Jack, Jhon, Green",anwser:false},
            {option:"Tom, Sean, Bobby",anwser:false},
            {option:"James, Ruby, Terra",anwser:false}
        ]
    },
    {
        question:"WITCH PART OF HIS BODY DID TOM CREAN SHOW THE LOCAL KIDS TO SCARE THEM AWAY?",
        anwsers: [
            {option:"His broken leg",anwser:false},
            {option:"His black toes",anwser:true},
            {option:"His wobbly tooth",anwser:false},
            {option:"His crooked finger",anwser:false}
        ]
    },
    {
        question:"TOM FOUND A FURRY ANIMAL ONBOARD THE SHIP TERRA NOVA IN 1910. wHAT IS THE TITLE OF THE BOOK NAMED AFTER IT?",
        anwsers: [
            {option:"Tom Crean's Dog",anwser:false},
            {option:"Tom Crean's Fox",anwser:false},
            {option:"Tom Crean's Rabbit",anwser:true},
            {option:"Tom Crean's Wolf",anwser:false}

        ]
    },
    {
        question:"TOM CREANS RELATIVES OPENED A BREWERY IN KENMARE, IRELAND. WHAT IS THE NAME OF THE ALE THEY MAKE?",
        anwsers: [
            {option:"Expedition Ale",anwser:true},
            {option:"South Pole Ale",anwser:false},
            {option:"The Frozen Ale",anwser:false},
            {option:"Tom Crean's Ale",anwser:false}
        ]
    }
]

/* Onclick events for buttons. Action will call respective functions for particular button when clicked*/

restartBtn.addEventListener('click',restart);
prevBtn.addEventListener('click',prev);
nextBtn.addEventListener('click',next);
restartBtn.addEventListener('click',submit);