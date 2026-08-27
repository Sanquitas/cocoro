document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('heart-container');
    const message = "I love you"; // La frase que pidió el usuario
    
    const points = [];

    // Usamos solo 2 escalas (15 y 16) para que el mensaje sea más legible
    for (let scale = 15; scale < 17; scale++) {
        // for i in range(120)
        for (let i = 0; i < 120; i++) {
            // angle = i * (math.pi * 2) / 120
            let angle = i * (Math.PI * 2) / 120;
            
            // Fórmulas matemáticas del corazón del código Python
            let x = 16 * Math.pow(Math.sin(angle), 3) * scale;
            let y = (13 * Math.cos(angle) - 5 * Math.cos(2 * angle) - 2 * Math.cos(3 * angle) - Math.cos(4 * angle)) * scale;
            
            // Invertimos el eje Y porque en matemáticas Y sube, pero en la web (CSS) Y baja
            y = -y;
            
            points.push({x, y});
        }
    }

    // Ordenar los puntos de izquierda a derecha (por su valor en X)
    points.sort((a, b) => a.x - b.x);

    const spans = [];
    
    // Crear y posicionar los textos
    points.forEach((point) => {
        let span = document.createElement('span');
        span.textContent = message;
        span.classList.add('letter');
        // Posicionamiento absoluto
        span.style.left = point.x + 'px';
        span.style.top = point.y + 'px';
        
        container.appendChild(span);
        spans.push(span);
    });

    // Animar las letras para que aparezcan de izquierda a derecha secuencialmente
    spans.forEach((span, index) => {
        setTimeout(() => {
            span.classList.add('visible');
        }, index * 15); // 15 milisegundos (el doble de lento)
    });
});
