function batmantransition() {
    let bat = document.querySelector('.batman_acceuil-1');
    console.log('yes');
    let O = bat.attributes.opacity

    return anime({
        targets: '.batman_acceuil-1',
        opacity: [O,1-O],
        duration: 300,
        easing: 'linear',
        autoplay: false,
    }).play;
}

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