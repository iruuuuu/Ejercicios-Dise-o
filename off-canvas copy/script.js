function toggleMenu() {
    var sidePanel = document.getElementById('sidePanel');
    sidePanel.classList.toggle('open');
}

// Simulación básica de touch (Swipe)
var mainPanel = document.getElementById('mainPanel');
/* Agregar event listeners al documento o al panel principal para detectar el swipe */
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function handleTouchStart(evt) {
    const firstTouch = evt.touches[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
        if (xDiff > 0) {
            /* left swipe - cerrar */
            document.getElementById('sidePanel').classList.remove('open');
        } else {
            /* right swipe - abrir */
            document.getElementById('sidePanel').classList.add('open');
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
};
