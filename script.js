function filterGames(genre) {
    const cards = document.querySelectorAll('.game-card');
    cards.forEach(card => {
        if (genre === 'all' || card.dataset.genre === genre) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Open the game modal and load the game
function openGame(gameId) {
    const modal = document.getElementById("gameModal");
    const iframe = document.getElementById("gameIframe");

    if (gameId === 'block-blast') {
        iframe.src = "https://cloud.onlinegames.io/games/2024/unity3/block-blast/index-og.html";
    } else if (gameId === 'snake-football') {
        iframe.src = "https://www.onlinegames.io/games/2023/construct/200/snake-football/index.html";
    } else if (gameId === 'police-chase-drifter') {
        iframe.src = "https://www.onlinegames.io/games/2021/3/police-chase-drifter/index.html";
    } else if (gameId === 'real-flight-simulator') {
        iframe.src = "https://www.onlinegames.io/games/2023/unity/real-flight-simulator/index.html";
    } else if (gameId === 'geometry-escape') {
        iframe.src = "https://cloud.onlinegames.io/games/2024/construct/299/geometry-escape/index-og.html";
    }

    modal.style.display = "flex"; // Show the modal
}

// Close the modal
function closeModal() {
    const modal = document.getElementById("gameModal");
    const iframe = document.getElementById("gameIframe");

    iframe.src = ""; // Stop the game
    modal.style.display = "none"; // Hide the modal
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
    const modal = document.getElementById("gameModal");
    if (event.target === modal) {
        closeModal();
    }
}
