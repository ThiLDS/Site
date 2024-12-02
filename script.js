document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript carregado corretamente.");
    
    const slider = document.querySelector(".partners-slider");
    if (!slider) {
        console.error("O elemento .partners-slider não foi encontrado.");
        return;
    }

    const speed = 1; // Velocidade do deslizamento
    let offset = 0;

    function startLoop() {
        const clones = [...slider.children].map((box) => box.cloneNode(true));
        clones.forEach((clone) => slider.appendChild(clone));

        setInterval(() => {
            offset -= speed;
            slider.style.transform = `translateX(${offset}px)`;

            if (Math.abs(offset) >= slider.scrollWidth / 2) {
                offset = 0;
            }
        }, 16); // Aproximadamente 60fps
    }

    startLoop();
});

