//your code here
// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Function to handle tile click events
function handleTileClick() {
  // Handle tile selection logic
}

// Function to handle reset button click event
function handleResetButtonClick() {
  // Reset the game state
}

// Function to handle verify button click event
function handleVerifyButtonClick() {
  // Verify the selected tiles and display the result
}

// Get the tile images and shuffle their order
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg'];
const shuffledImages = shuffleArray(images);

// Add event listeners to the tile images
const tiles = document.querySelectorAll('.image-container img');
tiles.forEach(tile => {
  tile.addEventListener('click', handleTileClick);
});

// Add event listeners to the reset and verify buttons
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', handleResetButtonClick);

const verifyButton = document.getElementById('verify');
verifyButton.addEventListener('click', handleVerifyButtonClick);
