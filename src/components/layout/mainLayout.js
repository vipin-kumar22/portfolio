export function cursor(cursorDot, cursorTrail,box, setcursorP) {
    // Update cursor position
    const updateCursor = (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        setcursorP({mouseX, mouseY});

        // Main dot follows immediately
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;

        // Trail follows with a slight delay
        requestAnimationFrame(() => {
            cursorTrail.style.left = `${mouseX}px`;
            cursorTrail.style.top = `${mouseY}px`;
        });

        // Create particles
        if (Math.random() > 0.4) {
            createParticle(mouseX, mouseY);
        }
    };

    // Create a particle
    const createParticle = (x, y) => {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;

        // Randomize size and color slightly
        const size = Math.random() * 2 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        const hue = Math.floor(Math.random() * 40) + 190;
        particle.style.backgroundColor = `hsl(${hue}, 80%, 60%)`;

        document.body.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 1000);
    };

    // Event listener
    box.addEventListener('mousemove', updateCursor);
    box.addEventListener('touchmove',updateCursor)
}
