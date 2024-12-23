const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const emailLink = document.querySelector('#copyEmailIcon')
const emailLinkBottom = document.querySelector('#copyEmailIconBottom')
const email = 'stepienw96@gmail.com';
const contactLink = document.querySelector('#navbar__links--contact');
const contactPanel = document.querySelector('.contact__panel');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

emailLink.addEventListener('click', function () {

    navigator.clipboard.writeText(email)
    .then(() => {
        alert('Email copied to clipboard');
    })
    .catch(err => {
        console.error('Failed to copy emial: ', err)
    });
});

emailLinkBottom.addEventListener('click', function () {

    navigator.clipboard.writeText(email)
    .then(() => {
        alert('Email copied to clipboard');
    })
    .catch(err => {
        console.error('Failed to copy emial: ', err)
    });
});

contactLink.addEventListener('click', (e) => {
    e.preventDefault(); 
    contactPanel.classList.add('active');
});

document.addEventListener('click', (e) => {
    const isClickInside = contactPanel.contains(e.target) || contactLink.contains(e.target);
    if (!isClickInside) {
        contactPanel.classList.remove('active');
    }
});