ScrollReveal({ reset: false })

const slideLeft = {
    delay: 500,
    distance: '20%',
    origin: 'left'
};

const slideRight = {
    delay: 500,
    distance: '20%',
    origin: 'right'
}

const slideTop = {
    delay: 500,
    distance: '20%',
    origin: 'top',
}

const slideBottom = {
    delay: 500,
    distance: '20%',
    origin: 'bottom'
}

const slideFade = {
    delay: 500
}

ScrollReveal().reveal('#reveal-left', slideLeft);
ScrollReveal().reveal('#reveal-right', slideRight);
ScrollReveal().reveal('#reveal-bottom', slideBottom);
ScrollReveal().reveal('#reveal-top', slideTop);
ScrollReveal().reveal('#reveal-fade', slideFade);
