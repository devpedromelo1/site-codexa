// CURSOR GLOW

const cursorGlow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {

  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top = e.clientY + 'px';

});

// NAVBAR SCROLL

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {

  if(window.scrollY > 50){

    navbar.classList.add('navbar-scroll');

  } else {

    navbar.classList.remove('navbar-scroll');

  }

});

// MAGNETIC BUTTONS

const magnets = document.querySelectorAll('.magnetic');

magnets.forEach(btn => {

  btn.addEventListener('mousemove', function(e){

    const position = btn.getBoundingClientRect();

    const x = e.clientX - position.left - position.width / 2;
    const y = e.clientY - position.top - position.height / 2;

    btn.style.transform = `translate(${x * 0.15}px, ${y * 0.25}px)`;

  });

  btn.addEventListener('mouseout', function(){

    btn.style.transform = 'translate(0px,0px)';

  });

});