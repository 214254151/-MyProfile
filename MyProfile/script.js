//------------ toggle on navigation
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

//------------ Scroll  section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links/classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

//------------ Ssticky navBar-----
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

//------------remove toggle toggle icon on navigation when clicked on
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

//-- scroll reveal------------------ -->
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });



  















};

// function sendMAil(){
//     var params = {
//         from_name : document.getElementById("fullName").value,
//         phoneNumber : document.getElementById("phoneNumber").value,
//         emailSubject: document.getElementById("emailSubject").value,
//         message : document.getElementById("message").value,
//     }
//     emailjs.send("service_h6ci2gr", "template_a9vmwra", params).then(function(res)){
//         alert("Message sent!" + res.status);
//     }
// }
