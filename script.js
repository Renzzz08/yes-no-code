// script.js

// Array of texts to cycle through when "No" is clicked
const noButtonTexts = [
    "You sure?",
    "Really sure?",
    "Absolutely sure?",
    "Think again!",
    "Are you certain?",
    "Positive?",
    "Double sure?",
    "Last chance!",
    "Reconsidering?",
    "Still no? 😢"
];

let noClickCount = 0;

// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none';
            displayCatHeart();
        });
    } else if (option === 'no') {
        // Cycle through the texts array
        noClickCount++;
        const textIndex = Math.min(noClickCount, noButtonTexts.length - 1);
        document.getElementById('no-button').innerText = noButtonTexts[textIndex];

        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2;
        yesButton.style.fontSize = newSize + 'px';

        // Move "No" button to a random location on screen
        moveButtonToRandomPosition();
    } else {
        alert('Invalid option!');
    }
}

// Function to move the "No" button to a random position
function moveButtonToRandomPosition() {
    var noButton = document.getElementById('no-button');

    // Get button dimensions
    var btnWidth = noButton.offsetWidth;
    var btnHeight = noButton.offsetHeight;

    // Calculate safe boundaries so button stays within viewport
    var maxX = window.innerWidth - btnWidth - 20;
    var maxY = window.innerHeight - btnHeight - 20;

    // Generate random X and Y within safe boundaries
    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);

    // Apply fixed positioning so it can move freely across the page
    noButton.style.position = 'fixed';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
    noButton.style.margin = '0'; // Remove any margin that could offset it
}
