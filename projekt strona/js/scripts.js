const eventDate = new Date("2024-11-29T19:00:00");

function updateCountdown() {
    const now = new Date();
    const timeLeft = eventDate - now;

    if (timeLeft <= 0) {
        document.getElementById("timer").innerText = "Impreza już trwa!";
        clearInterval(countdownInterval); // Zatrzymuje odliczanie
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("timer").innerText = `${days} dni ${hours}:${minutes}:${seconds}`;
}

const countdownInterval = setInterval(updateCountdown, 1000);
// Dodaj funkcję do podświetlania miejsca
function highlightSeat(seatId) {
    const seat = document.getElementById(seatId);
    if (seat) {
        seat.style.backgroundColor = "lightgreen"; // Podświetla wybrane miejsce
    }
}

// Przykład: Podświetl miejsce użytkownika
highlightSeat("seat1"); // Podświetli miejsce 1 jako przykład
const contests = [
    { name: "Konkurs 1", description: "Opis konkursu 1", revealDate: new Date("2024-05-10") },
    { name: "Konkurs 2", description: "Opis konkursu 2", revealDate: new Date("2024-05-12") },
    // Dodaj kolejne konkursy
];

function revealContests() {
    const now = new Date();
    const contestList = document.getElementById("contest-list");
    contestList.innerHTML = ""; // Reset listy konkursów

    contests.forEach(contest => {
        if (now >= contest.revealDate) {
            const contestDiv = document.createElement("div");
            contestDiv.innerHTML = `<strong>${contest.name}</strong>: ${contest.description}`;
            contestList.appendChild(contestDiv);
        }
    });
}

setInterval(revealContests, 60000); // Aktualizuje co minutę
