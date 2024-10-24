const mario = document.getElementById('mario');
const obstacle = document.getElementById('obstacle');

function jump() {
    if (!mario.classList.contains('jump')) {
        mario.classList.add('jump');
        
        setTimeout(function () {
            mario.classList.remove('jump');
        }, 500);
    }
}

document.addEventListener('keydown', function (event) {
    if (event.code === 'Space') {
        jump();
    }
});

let isGameOver = setInterval(function () {
    let marioBottom = parseInt(window.getComputedStyle(mario).getPropertyValue('bottom'));
    let obstacleRight = parseInt(window.getComputedStyle(obstacle).getPropertyValue('right'));

    if (obstacleRight > 700 && obstacleRight < 750 && marioBottom <= 50) {
        alert('Game Over!');
        location.reload();
    }
}, 10);
