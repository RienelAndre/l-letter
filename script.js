document.getElementById('heartBtn').addEventListener('click', function() {
    setTimeout(function() {
        document.getElementById('response').innerHTML = "<div style='text-align: center;'>Will you be my Valentine? <br><button id='yesBtn'>Yes</button> <button id='noBtn'>No</button></div>";
        document.getElementById('yesBtn').addEventListener('click', function() {
            document.getElementById('envelopeClosed').style.display = 'none';
            document.getElementById('envelopeOpen').style.display = 'block';
            document.getElementById('letter').style.display = 'block';
            document.getElementById('letter').innerHTML = "Happy Valentines My Love!";
            document.getElementById('heartBtn').style.display = 'none'; // Hide the heart button

            // Call function to add heart animation
            addHeartAnimation();
        });
        document.getElementById('noBtn').addEventListener('click', function() {
            document.getElementById('yesBtn').style.fontSize = parseInt(getComputedStyle(document.getElementById('yesBtn')).fontSize) + 5 + 'px';
        });
    }, 1000);
});

function addHeartAnimation() {
    // Create and add hearts to the document
    const letterPosition = document.getElementById('letter').getBoundingClientRect().top; // Get position of the letter
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        document.body.appendChild(heart);
        // Randomize heart's horizontal position
        heart.style.left = Math.random() * window.innerWidth + 'px';
        // Calculate heart's final position relative to the letter
        const finalPosition = letterPosition - Math.random() * 100; // Adjust 100px as needed
        // Set heart's final position
        heart.style.bottom = finalPosition + 'px';
        // Remove heart from the document after animation ends
        heart.addEventListener('animationend', function() {
            heart.remove();
        });
    }
}
