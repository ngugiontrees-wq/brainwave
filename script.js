function welcomeUser() {
    alert("Welcome to BRAINWAVE! 🧠");
}


// ===============================
// LEARN SECTION
// ===============================

const lessons = {

    technology: {
        title: "💻 TECHNOLOGY",
        content: `
            <h3>Understanding Technology</h3>
            <p>Technology involves using scientific knowledge to create tools and systems that solve problems.</p>
            <h4>What is Programming?</h4>
            <p>Programming is the process of writing instructions that tell computers what to do.</p>
            <h4>What is Artificial Intelligence?</h4>
            <p>Artificial Intelligence (AI) allows computers to perform tasks that normally require human intelligence.</p>
            <h4>Did you know?</h4>
            <p>The first computer mouse was made of wood!</p>
        `
    },

    science: {
        title: "🔬 SCIENCE",
        content: `
            <h3>Exploring Science</h3>
            <p>Science is the study of the natural world through observation and experiments.</p>
            <h4>The Human Body</h4>
            <p>The human heart pumps blood throughout the body.</p>
            <h4>Space</h4>
            <p>Our solar system has eight recognised planets.</p>
            <h4>Did you know?</h4>
            <p>Light from the Sun takes approximately 8 minutes and 20 seconds to reach Earth.</p>
        `
    },

    geography: {
        title: "🌍 GEOGRAPHY",
        content: `
            <h3>Discover Our World</h3>
            <p>Geography is the study of Earth's landscapes, countries, environments and people.</p>
            <h4>Continents</h4>
            <p>There are seven continents on Earth.</p>
            <h4>Oceans</h4>
            <p>There are five recognised oceans.</p>
            <h4>Did you know?</h4>
            <p>Africa is the second-largest continent by land area.</p>
        `
    },

    history: {
        title: "🏛️ HISTORY",
        content: `
            <h3>Journey Through History</h3>
            <p>History is the study of past events and human civilisation.</p>
            <h4>Ancient Egypt</h4>
            <p>Ancient Egyptians built enormous pyramids as royal tombs.</p>
            <h4>Ancient Rome</h4>
            <p>Ancient Rome developed roads, buildings and systems of government that influenced later societies.</p>
            <h4>Did you know?</h4>
            <p>The Great Pyramid of Giza is the only surviving wonder of the original Seven Wonders of the Ancient World.</p>
        `
    },

    general: {
        title: "🧠 GENERAL KNOWLEDGE",
        content: `
            <h3>Expand Your Knowledge</h3>
            <p>General knowledge helps us understand different subjects and the world around us.</p>
            <h4>Languages</h4>
            <p>Swahili is widely spoken across East Africa.</p>
            <h4>Animals</h4>
            <p>Octopuses have three hearts.</p>
            <h4>Did you know?</h4>
            <p>Honey can remain edible for an extremely long time when properly stored.</p>
        `
    }

};


function openLesson(subject) {

    const lesson = lessons[subject];

    const content = document.getElementById("lesson-content");

    content.innerHTML = `
        <div class="lesson-box">
            <h2>${lesson.title}</h2>
            ${lesson.content}
            <button onclick="closeLesson()">Close Lesson</button>
        </div>
    `;

    content.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


function closeLesson() {

    document.getElementById("lesson-content").innerHTML = "";

}


// ===============================
// DISCOVER SECTION
// ===============================

const facts = [

    "An octopus has three hearts! 🐙",

    "A day on Venus is longer than its year! 🪐",

    "Honey can last for thousands of years when properly stored! 🍯",

    "Sharks existed before trees! 🦈",

    "The Eiffel Tower can become slightly taller during hot weather! 🗼",

    "A group of flamingos is called a flamboyance! 🦩",

    "The Moon moves away from Earth by approximately 3.8 centimetres every year! 🌙",

    "There are more possible ways to arrange a deck of cards than there are atoms on Earth! 🃏",

    "Jellyfish have existed for hundreds of millions of years! 🌊",

    "Saturn is less dense than water! 🪐"

];


function generateFact() {

    const randomIndex = Math.floor(Math.random() * facts.length);

    document.getElementById("fact").textContent = facts[randomIndex];

}


// ===============================
// QUIZ QUESTION BANK
// ===============================

const questionBank = {

    general: [
        {
            question: "Which is the largest continent?",
            answers: ["Africa", "Asia", "Europe", "Australia"],
            correct: "Asia"
        },
        {
            question: "What is the capital of Kenya?",
            answers: ["Mombasa", "Nairobi", "Kisumu", "Nakuru"],
            correct: "Nairobi"
        },
        {
            question: "How many days are in a leap year?",
            answers: ["364", "365", "366", "367"],
            correct: "366"
        },
        {
            question: "Which animal is known as the King of the Jungle?",
            answers: ["Tiger", "Lion", "Elephant", "Leopard"],
            correct: "Lion"
        },
        {
            question: "Which country is famous for the Eiffel Tower?",
            answers: ["Italy", "France", "Germany", "Spain"],
            correct: "France"
        },
        {
            question: "How many colours are in a rainbow?",
            answers: ["Five", "Six", "Seven", "Eight"],
            correct: "Seven"
        }
    ],

    technology: [
        {
            question: "What does CPU stand for?",
            answers: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Control Processing User"],
            correct: "Central Processing Unit"
        },
        {
            question: "Which language structures web pages?",
            answers: ["Python", "HTML", "SQL", "Java"],
            correct: "HTML"
        },
        {
            question: "What does RAM stand for?",
            answers: ["Random Access Memory", "Read Access Machine", "Rapid Action Memory", "Run Application Manager"],
            correct: "Random Access Memory"
        },
        {
            question: "Which company developed Windows?",
            answers: ["Apple", "Google", "Microsoft", "Samsung"],
            correct: "Microsoft"
        },
        {
            question: "What does URL stand for?",
            answers: ["Uniform Resource Locator", "Universal Record Link", "United Resource Location", "Uniform Reading Language"],
            correct: "Uniform Resource Locator"
        },
        {
            question: "Which device is used to connect to Wi-Fi?",
            answers: ["Router", "Printer", "Scanner", "Projector"],
            correct: "Router"
        }
    ],

    brain: [
        {
            question: "What comes next: 2, 4, 6, 8, ...?",
            answers: ["9", "10", "12", "14"],
            correct: "10"
        },
        {
            question: "What has hands but cannot clap?",
            answers: ["A robot", "A clock", "A statue", "A tree"],
            correct: "A clock"
        },
        {
            question: "What is half of 100 plus 10?",
            answers: ["55", "60", "50", "45"],
            correct: "60"
        },
        {
            question: "If you have 3 apples and take away 2, how many do you have?",
            answers: ["1", "2", "3", "5"],
            correct: "2"
        },
        {
            question: "Which number is missing: 5, 10, 15, __, 25?",
            answers: ["18", "20", "22", "30"],
            correct: "20"
        },
        {
            question: "What gets wetter as it dries?",
            answers: ["A sponge", "A towel", "The sun", "A fan"],
            correct: "A towel"
        }
    ],

    entertainment: [
        {
            question: "Which superhero is also known as the Dark Knight?",
            answers: ["Superman", "Batman", "Iron Man", "Thor"],
            correct: "Batman"
        },
        {
            question: "Which game features Creepers?",
            answers: ["Roblox", "Minecraft", "Fortnite", "Among Us"],
            correct: "Minecraft"
        },
        {
            question: "What is the name of Mickey Mouse's dog?",
            answers: ["Pluto", "Goofy", "Scooby", "Brian"],
            correct: "Pluto"
        },
        {
            question: "Which movie features the character Elsa?",
            answers: ["Moana", "Frozen", "Tangled", "Shrek"],
            correct: "Frozen"
        },
        {
            question: "Which instrument has black and white keys?",
            answers: ["Guitar", "Drums", "Piano", "Violin"],
            correct: "Piano"
        },
        {
            question: "Which platform is famous for short-form videos?",
            answers: ["TikTok", "Wikipedia", "Google Maps", "Gmail"],
            correct: "TikTok"
        }
    ],

    science: [
        {
            question: "Which planet is known as the Red Planet?",
            answers: ["Earth", "Mars", "Jupiter", "Venus"],
            correct: "Mars"
        },
        {
            question: "What gas do humans need to breathe?",
            answers: ["Carbon dioxide", "Oxygen", "Nitrogen", "Helium"],
            correct: "Oxygen"
        },
        {
            question: "What is the centre of an atom called?",
            answers: ["Electron", "Nucleus", "Proton", "Cell"],
            correct: "Nucleus"
        },
        {
            question: "Which organ pumps blood around the body?",
            answers: ["Lungs", "Brain", "Heart", "Liver"],
            correct: "Heart"
        },
        {
            question: "What is the closest star to Earth?",
            answers: ["Sirius", "The Sun", "Polaris", "Vega"],
            correct: "The Sun"
        },
        {
            question: "At what temperature does water freeze in Celsius?",
            answers: ["0°C", "10°C", "50°C", "100°C"],
            correct: "0°C"
        }
    ]

};


// ===============================
// QUIZ ENGINE
// ===============================

let questions = [];
let currentQuestion = 0;
let score = 0;
let answered = false;


function startQuiz() {

    const category = document.getElementById("category").value;

    questions = [...questionBank[category]];

    questions.sort(() => Math.random() - 0.5);

    currentQuestion = 0;
    score = 0;
    answered = false;

    document.getElementById("nextButton").style.display = "inline-block";

    loadQuestion();

}


function loadQuestion() {

    const q = questions[currentQuestion];

    answered = false;

    document.getElementById("progress").textContent =
        "QUESTION " + (currentQuestion + 1) + " OF " + questions.length;

    document.getElementById("question").textContent = q.question;

    const answersDiv = document.getElementById("answers");

    answersDiv.innerHTML = "";

    document.getElementById("result").textContent = "";

    q.answers.forEach(answer => {

        const button = document.createElement("button");

        button.textContent = answer;

        button.onclick = () => checkAnswer(answer);

        answersDiv.appendChild(button);

    });

    document.getElementById("score").textContent = "Score: " + score;

    document.getElementById("nextButton").textContent = "Next Question";

    document.getElementById("nextButton").onclick = nextQuestion;

}


function checkAnswer(answer) {

    if (answered) return;

    answered = true;

    const correct = questions[currentQuestion].correct;

    const result = document.getElementById("result");

    if (answer === correct) {

        score++;

        result.textContent = "🎉 Correct!";

    } else {

        result.textContent = "❌ Incorrect! The correct answer is " + correct;

    }

    document.getElementById("score").textContent = "Score: " + score;

    document.querySelectorAll("#answers button").forEach(button => {

        button.disabled = true;

        if (button.textContent === correct) {

            button.classList.add("correct");

        } else if (button.textContent === answer) {

            button.classList.add("wrong");

        }

    });

}


function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        loadQuestion();

    } else {

        showFinalScore();

    }

}


function showFinalScore() {

    document.getElementById("progress").textContent = "Quiz finished!";

    document.getElementById("question").textContent = "QUIZ COMPLETED! 🎉";

    document.getElementById("answers").innerHTML = "";

    document.getElementById("result").textContent =
        "You scored " + score + " out of " + questions.length + "!";

    document.getElementById("nextButton").textContent = "Play Again";

    document.getElementById("nextButton").onclick = startQuiz;

}