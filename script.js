function showLetter() {
    const letter = document.getElementById("letter");

    if (letter.style.display === "block") {
        letter.style.display = "none";
    } else {
        letter.style.display = "block";
        letter.scrollIntoView({
            behavior: "smooth"
        });
    }
}

// Floating hearts effect
setInterval(() => {
    const heart = document.createElement("div");

    heart.innerHTML = "💜";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.opacity = "0.8";
    heart.style.pointerEvents = "none";
    heart.style.transition = "transform 6s linear, opacity 6s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.transform = "translateY(-120vh)";
        heart.style.opacity = "0";
    }, 100);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}, 500);