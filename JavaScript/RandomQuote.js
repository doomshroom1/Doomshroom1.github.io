const quotes = [
    "I am The Hype - Vagita",
    "Cheese - Top Gear",
    "This in DEFINITLY NOT a filler quote - Not Me",
    "Eat Trash, Die Fast.  - Racoon",
    "Never Fear, I AM HERE!  - All Might",
    "What a world you live in. -Me",
    "Life is not measured by the number of breaths you take, but by the moments that take your breath away. - Anonymous"
];

// Function to update quote
function updateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
}

// Update quote every 5 seconds
setInterval(updateQuote, 5000);