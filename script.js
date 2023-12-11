document.addEventListener("DOMContentLoaded", function() {
    const question = document.querySelector(".question");
    const gif = document.querySelector(".gif");
    const yesBtn = document.querySelector(".yes-btn");
    const noBtn = document.querySelector(".no-btn");

    const questions = [
        "Hey Lúthien Crayón: ¿Sabes por qué hoy es un día especial?",
        "Y... ¿Sabes por qué tú eres especial para mí?",
        "Y... ¿Puedo saber que sabes que te amo más de lo que puedes imaginar y que deseo pasar más cumpleaños contigo?"
    ];

    const answers = [
        ["Sí, lo sé", "No, no lo sé"],
        ["Sí, lo sé", "No, no lo sé"],
        ["Sí, puedes saberlo", "No, fak u"]
    ];

    let currentQuestionIndex = 0;

    function displayNextQuestion() {
        if (currentQuestionIndex < questions.length) {
            question.innerHTML = questions[currentQuestionIndex];
            gif.src = "https://media.giphy.com/media/2zoLgckxd9FxDgx6gD/giphy.gif";
        } else {
            // All questions answered, display final message
            question.innerHTML = "Genial, entonces pasa un muy feliz cumpleaños 18, mi amor, mi corazón, mi vida, mi melocotón, mi Lúthien, mi Lúthien Crayón.";
            gif.src = "https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif";
        }
    }

    displayNextQuestion();

    yesBtn.addEventListener("click", () => {
        if (currentQuestionIndex < questions.length) {
            currentQuestionIndex++;
            displayNextQuestion();
        }
    });

    noBtn.addEventListener("mouseover", resetNoButtonPosition);

    function resetNoButtonPosition() {
        const noBtnRect = noBtn.getBoundingClientRect();
        const maxX = window.innerWidth - noBtnRect.width;
        const maxY = window.innerHeight - noBtnRect.height;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
    }
});
