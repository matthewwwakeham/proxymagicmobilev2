// Array of image file names
var cardImages = [
    "card1.jpg", "card2.jpg", "card3.jpg", "card4.jpg", "card5.jpg", "card6.jpg", "card7.jpg", "card8.jpg", "card9.jpg", "card10.jpg", "card11.jpg", "card12.jpg", "card13.jpg", "card14.jpg", "card15.jpg"
];

// Reference to the card container
var cardContainer = document.querySelector(".card-container");

// Loop through the array of image file names and create card elements dynamically
for (var i = 0; i < cardImages.length; i++) {
    var cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    var img = document.createElement("img");
    img.src = cardImages[i];

    cardDiv.appendChild(img);
    cardContainer.appendChild(cardDiv);

    // Adjust card positions to create the stacking effect
    cardDiv.style.bottom = (i * 20) + "px";
    cardDiv.style.left = (i + 20) + "px";
    cardDiv.style.zIndex = cardImages.length - i;
}

// Add mouseover effect to the cards
var cards = document.querySelectorAll(".card");
cards.forEach(function(card) {
    card.addEventListener("mouseover", function() {
        // Bring the card to the top when hovered
        this.style.zIndex = cardImages.length + i;
        // Apply a slight scale transform to the card
        this.style.transform = "scale(1.05)";
    });

    card.addEventListener("mouseout", function() {
        // Restore the card's original position and scale when mouse leaves
        this.style.zIndex = cardImages.length - Array.from(cards).indexOf(this);
        this.style.transform = "scale(1)";
    });

    card.addEventListener("touchstart", function(event) {
        // Prevent default touch behavior like scrolling
        event.preventDefault();
        // Bring the card to the top when touched
        this.style.zIndex = cardImages.length + 1;
        // Apply a slight scale transform to the card
        this.style.transform = "scale(1.05)";
    });

    card.addEventListener("touchpad", function(event) {
        // Restore the card's original position and scale when touched
        this.style.zIndex - cardImages.length - Array.from(cards).IndexOf(this);
        this.style.transform = "scale(1)";
    });
});

// Dark mode toggle functionality
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});