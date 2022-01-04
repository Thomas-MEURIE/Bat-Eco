function batmantransition() {
    var batman = document.querySelector('.batman_superpose');
    console.log('yes');

    let transition = anime.timeline({
        loop: false,
        delay: 0
    });

    batman.add({
        targets: batman_superpose,
        opacity: [1,0],
        duration: 300,
        easing: 'linear',
    });
}