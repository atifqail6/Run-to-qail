document.addEventListener("DOMContentLoaded", function () {
    const player = document.getElementById("player");
    const coin = document.getElementById("coin");

    document.addEventListener("touchstart", function (e) {
        const touchX = e.touches[0].clientX;
        const touchY = e.touches[0].clientY;

        player.style.left = touchX - player.offsetWidth / 2 + "px";
        player.style.top = touchY - player.offsetHeight / 2 + "px";

        checkCollision();
    });

    function checkCollision() {
        const playerRect = player.getBoundingClientRect();
        const coinRect = coin.getBoundingClientRect();

        if (
            playerRect.left < coinRect.right &&
            playerRect.right > coinRect.left &&
            playerRect.top < coinRect.bottom &&
            playerRect.bottom > coinRect.top
        ) {
            alert("Coin collected!");
            moveCoin();
        }
    }

    function moveCoin() {
        const randomX = Math.floor(Math.random() * (window.innerWidth - 30));
        const randomY = Math.floor(Math.random() * (window.innerHeight - 30));

        coin.style.left = randomX + "px";
        coin.style.top = randomY + "px";
    }
});
