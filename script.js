// script.js

const noButtonTexts = [
    "You sure?",
    "Really sure?",
    "Absolutely sure?",
    "Sure ba?",
    "Pinaka sure najud na?",
    "Positive?",
    "Double sure?",
    "Last chance!",
    "Sure na sure na jud?",
    "Sure a??? 😢"
];

const questionTexts = [
    "Will you be my Valentine? 🩷",
    "Are you absolutely sure? 🥺",
    "But... but... 😿",
    "Please reconsider! 💝",
    "I'll be really sad! 😭",
    "Pretty please? 🙏",
    "I made you cookies! 🍪",
    "I'll cry forever... 😢",
    "Last chance, I promise! 💕",
    "Okay fine... just kidding, please say yes! 🥹"
];

let noClickCount = 0;

function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none';
            displayCatHeart();
        });
    } else if (option === 'no') {
        const textIndex = Math.min(noClickCount, noButtonTexts.length - 1);

        // Change No button text
        document.getElementById('no-button').innerText = noButtonTexts[textIndex];

        // Change question text
        document.getElementById('question').innerText = questionTexts[Math.min(noClickCount + 1, questionTexts.length - 1)];

        // Grow the Yes button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 1.4; // grow by 1.4x each click (less aggressive than 2x)
        yesButton.style.fontSize = newSize + 'px';

        // Move No button to a random location
        moveButtonToRandomPosition();

        noClickCount++;
    } else {
        alert('Invalid option!');
    }
}

function moveButtonToRandomPosition() {
    var noButton = document.getElementById('no-button');

    var btnWidth = noButton.offsetWidth;
    var btnHeight = noButton.offsetHeight;

    var maxX = window.innerWidth - btnWidth - 20;
    var maxY = window.innerHeight - btnHeight - 20;

    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);

    noButton.style.position = 'fixed';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
    noButton.style.margin = '0';
}

function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = '';
        if (callback) callback();
    }, 2000);
}

function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'cat.gif';
    catImage.alt = 'Cat';
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

function displayCatHeart() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'Cat Heart';
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        document.getElementById('options').style.display = 'none';
    };
}

displayCat();
