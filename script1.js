document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelectorAll('.card');

    //Mensajes para las cartas
    const messages = [
        "Nunca habia tenido tanto en mis manos como cuando sostengo las tuyas... ",
        "Solo quiero abrazarte en esos días en que la vida pese mucho para ti. 🫶🏼",
        "También llenarte la vida de flores para que incluso en los días grises tengas algo para reir. 🌻💐",
        "Me haces completamente felíz y no va a haber otra persona que me encante más que tú y con la cual me quisiera estar. ❤️‍🩹",
        "Y finalmente... ¿Quieres ser mi San Valentin? 💌"
    ];

    const questionText = "";
    const questionElement = document.getElementById("question");
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const responseMessage = document.getElementById("responseMessage");

    //Asignar eventos a cada carta
    card.forEach((card, index) => {
        card.addEventListener('click', () => {
            //Si la carta ya esta abierta, no hacer nada
            if (card.classList.contains('flip')) return;

            //Cargar el mensaje en la parte trasera antes de voltear ;a carta
            const back = card.querySelector('.back');
            back.textContent = messages[index];

            //Voltear la carta
            card.classList.add('flip');
        });
    });

    //Crear la lluvia de corazones
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = '💖';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 2 + 2}s`; // Duracion aleatoria entre 2 y 4 segundos
        document.querySelector('.heart-rain').appendChild(heart);

        //Eliminar el corazon despues de que termine la animacion
        setTimeout(() => {
            heart.remove();
        }, 4000);
    }

    function startHeartRain() {
        createHeart();
        setTimeout(() => requestAnimationFrame(startHeartRain),3000);
    }

    //Generar corazones a intervalos aleatorios
    setInterval(createHeart, 300);

    let index = 0;
    function typeQuestion() {
        if (index < questionText.length) {
            questionElement.textContent =+ questionText.charAt(index);
            index++;
            setTimeout(typeQuestion, 100);       
        } else {
            questionElement.classList.add("blink");
        }
    }

    setTimeout(typeQuestion, 500);

    yesBtn.addEventListener("click", () => {
        responseMessage.textContent = "Sabía que dirías que sí! ❤️✨";
        responseMessage.style.display = "block";
        noBtn.style.display = "none";
        yesBtn.style.transform = "scale(1.5)";
        yesBtn.style.transition = "transform 0.2s ease";

        setTimeout(() => {
            alert("¡Te amo con todo mi corazón mi Vane preciosa! ❤️");
        }, 1500);
    });

    noBtn.addEventListener("mouseenter", () => {
        const maxX = window.innerWidth - noBtn.clientWidth;
        const maxY = window.innerHeight - noBtn.clientHeight;

        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;

        noBtn.style.position = "absolute";
        noBtn.style.transition = "left 0.3s ease. top 0.3 ease";
        noBtn.style.left = `${newX}px`;
        noBtn.style.top = `${newY}px`;

        noBtn.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;

    })
});