function openmenu() {
    return anime({
        targets: '.menu',
        translateY: 520,
        autoplay: false,
        easing: 'easeInOutSine',
        duration: 300,
    }).play;
}

function closemenu() {
    return anime({
        targets: '.menu',
        translateY: 0,
        autoplay: false,
        easing: 'easeInOutSine',
        duration: 300,
    }).play;
}