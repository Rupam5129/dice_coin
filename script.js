// Dice Roll
document.getElementById('rollButton').addEventListener('click', function() {
    const dice = document.getElementById('dice');
    const randomX = Math.floor(Math.random() * 4) * 90;
    const randomY = Math.floor(Math.random() * 4) * 90;
    
    dice.style.transform = `rotateX(${randomX}deg) rotateY(${randomY}deg)`;
});

// Coin Flip
document.getElementById('flipButton').addEventListener('click', function() {
    const coin = document.getElementById('coin');
    const randomFlip = Math.random() < 0.5 ? 0 : 180;

    coin.style.transform = `rotateY(${randomFlip}deg)`;
});