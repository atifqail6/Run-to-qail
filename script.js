document.addEventListener("DOMContentLoaded", () => {
    const player = document.getElementById("player");
    const obstacle = document.getElementById("obstacle");

    let isJumping = false;

    // لوبغاړی ټوپ وهي
    window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowUp" && !isJumping) {
            jump();
        }
    });

    function jump() {
        isJumping = true;
        player.classList.add("jump");
        setTimeout(() => {
            player.classList.remove("jump");
            isJumping = false;
        }, 500);
    }

    // ټکر پېژندنه
    setInterval(() => {
        let playerBottom = parseInt(window.getComputedStyle(player).getPropertyValue("bottom"));
        let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

        if (obstacleLeft < 110 && obstacleLeft > 50 && playerBottom < 100) {
            alert("لوبه پای ته ورسیده!");
            window.location.reload();
        }
    }, 10);
});
