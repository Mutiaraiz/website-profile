document.querySelector('.logo').addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
});

document.querySelector('.logo').addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});

window.onscroll = function() {
    if (window.pageYOffset > 50) {
        document.querySelector('.navbar').style.background = '#333';
    } else {
        document.querySelector('.navbar').style.background = 'transparent';
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const story = document.querySelector('.story');
    const contact = document.querySelector('.contact');

    story.addEventListener('mouseover', function() {
        contact.style.transform = 'translateX(-200px)';
    });

    story.addEventListener('mouseout', function() {
        contact.style.transform = 'translateX(0)';
    });
});
