document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('heart-container');
    const message = "I love you";
    
    const points = [];

    for (let scale = 15; scale < 17; scale++) {
        for (let i = 0; i < 120; i++) {
            let angle = i * (Math.PI * 2) / 120;
            
            let x = 16 * Math.pow(Math.sin(angle), 3) * scale;
            let y = (13 * Math.cos(angle) - 5 * Math.cos(2 * angle) - 2 * Math.cos(3 * angle) - Math.cos(4 * angle)) * scale;
            
            y = -y;
            
            points.push({x, y});
        }
    }

    points.sort((a, b) => a.x - b.x);

    const spans = [];
    
    points.forEach((point) => {
        let span = document.createElement('span');
        span.textContent = message;
        span.classList.add('letter');
        span.style.left = point.x + 'px';
        span.style.top = point.y + 'px';
        
        container.appendChild(span);
        spans.push(span);
    });

    spans.forEach((span, index) => {
        setTimeout(() => {
            span.classList.add('visible');
        }, index * 15);
    });
});
