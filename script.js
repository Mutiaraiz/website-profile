let i = 0;
const totalWaktu = 1500; 
const nama = document.querySelector('.name').textContent;
const waktuPerKarakter = totalWaktu / nama.length; 

function typingAnimation() {
    if (i < nama.length) {
        document.querySelector('.name').innerHTML += nama.charAt(i);
        i++;
        setTimeout(typingAnimation, waktuPerKarakter);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.name').innerHTML = '';
    typingAnimation();
});

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

window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.story, .exp, .education, .skills');
    elements.forEach((element) => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position - windowHeight <= 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});
