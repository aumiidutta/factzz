const backgroundImages = {
    food: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    dinosaurs: "assets/dinosaurs.webp",
    nature: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    sports: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
    entertainment: "https://images.unsplash.com/photo-1478720568477-152d9b164e26"
};

const topics = {
    food: [
        "The world's most expensive pizza costs $12,000 and takes 72 hours to make.",
        "Honey never spoils. Archaeologists have found 3000-year-old honey still preserved.",
        "Apples float in water because they are 25% air.",
        "The most expensive spice in the world is saffron.",
        "Chocolate was once used as currency by the Aztecs.",
        "The first chocolate chip cookie was invented by accident.",
        "Bananas are berries, but strawberries aren't.",
        "Carrots were originally purple before being bred orange.",
        "Coffee is the second most traded commodity in the world.",
        "A quarter of the world's hazelnuts are used in Nutella."
    ],
    dinosaurs: [
        "T-Rex had the strongest bite of any land animal ever.",
        "Some dinosaurs were covered in feathers.",
        "Birds are considered modern-day dinosaurs.",
        "The smallest dinosaur was the size of a chicken.",
        "Dinosaurs lived on every continent.",
        "The longest dinosaur was the Supersaurus.",
        "Some dinosaurs were warm-blooded.",
        "The first dinosaur bones were discovered in the 1800s.",
        "Not all dinosaurs were giant creatures.",
        "Dinosaurs lived for over 150 million years."
    ],
    nature: [
        "Octopuses have three hearts.",
        "Sloths can hold their breath for up to 40 minutes underwater.",
        "Bees never sleep.",
        "Giraffes have the same number of vertebrae as humans.",
        "Hummingbirds are the only birds that can fly backwards.",
        "A day on Venus is longer than its year.",
        "Lightning strikes Earth about 100 times per second.",
        "Polar bears are left-handed.",
        "The longest living tree is over 5,000 years old.",
        "Butterflies taste with their feet."
    ],
    sports: [
        "The first Olympics featured only one event.",
        "Golf balls originally were made of leather and feathers.",
        "The longest tennis match lasted over 11 hours.",
        "Basketball was invented by a teacher.",
        "The NFL football is called 'The Duke'.",
        "Cricket bats are made from willow wood.",
        "The first World Cup was won by Uruguay.",
        "Table tennis was originally called Ping-Pong.",
        "The marathon distance was standardized in 1921.",
        "Boxing was the first sport to be broadcast on radio."
    ],
    entertainment: [
        "The first feature-length animated movie was made in 1937.",
        "The Matrix code is actually sushi recipes.",
        "Mickey Mouse's original name was Mortimer Mouse.",
        "The Lion King was inspired by Shakespeare's Hamlet.",
        "Nintendo was founded in 1889 as a playing card company.",
        "The first YouTube video was uploaded in 2005.",
        "The Hollywood sign originally said 'Hollywoodland'.",
        "Charlie Chaplin once lost a Charlie Chaplin look-alike contest.",
        "The Beatles used to be called The Quarrymen.",
        "The first movie ever made was only 2.11 seconds long."
    ]
};

const questions = [
    "Are you a foodie?",
    "So many dinosaurs were there, isn't it confusing?",
    "Are you in awe of nature's creation?",
    "Chhetri fans click on yes!",
    "Don't you think life is boring without entertainment?"
];

let currentQuestion = 0;

function handleAnswer(answer) {
    if (answer === 'yes') {
        displayRandomFacts(Object.keys(topics)[currentQuestion]);
    } else {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            document.querySelector('.question').textContent = questions[currentQuestion];
        } else {
            document.querySelector('#question-container').innerHTML = 
                "<div class='question'>Choose yes for any one!</div>";
        }
    }
}


// Modify the displayRandomFacts function to include background change
function displayRandomFacts(topic) {
    // Add this line to change the background
    document.body.style.backgroundImage = `url('${backgroundImages[topic]}')`;
    
    // Rest of the existing displayRandomFacts function
    const factsContainer = document.querySelector('#facts-container');
    const questionContainer = document.querySelector('#question-container');
    questionContainer.style.display = 'none';

    const facts = topics[topic];
    const shuffledFacts = [...facts].sort(() => Math.random() - 0.5);
    
    factsContainer.innerHTML = `<h2>10 Random Facts About ${topic.charAt(0).toUpperCase() + topic.slice(1)}!</h2>`;
    
    shuffledFacts.forEach((fact, index) => {
        factsContainer.innerHTML += `
            <div class="fact">
                ${index + 1}. ${fact}
            </div>
        `;
    });
}