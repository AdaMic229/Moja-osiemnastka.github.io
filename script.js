// Funkcja do ukrycia filmu i pokazania strony głównej po kliknięciu przycisku Skip
function skipIntro() {
    // Ukrywamy kontener wideo
    document.getElementById("video-container").style.display = "none";
    // Pokazujemy główną treść strony
    document.getElementById("main-content").style.display = "block";
}
