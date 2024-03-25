import '@fortawesome/fontawesome-free/css/all.css';

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


// Create a function to generate and append the cube
function generateCube() {
    // Create container div
    const stageCubeCont = document.createElement('div');
    stageCubeCont.className = 'stage-cube-cont';
  
    // Create cube spinner div
    const cubeSpinner = document.createElement('div');
    cubeSpinner.className = 'cube-spinner';
  
    // Define icon names
    const iconNames = ['faAngular', 'faReact', 'faHtml5', 'faCss3', 'faGit', 'faJsSquare'];
    // Define colors
    const colors = ['#DD0031', '#5ED4F4', '#F06519', '#28A4D9', '#EFD81D', '#ff7262'];
  
    // Loop through iconNames array to create faces
    for (let i = 0; i < iconNames.length; i++) {
      // Create face div
      const face = document.createElement('div');
      face.className = 'face' + i;
  
      // Create FontAwesome icon element
      const icon = document.createElement('i');
      icon.className = 'fas ' + iconNames[i];
      icon.style.color = colors[i]; // Set color
  
      // Append icon to face div
      face.appendChild(icon);
  
      // Append face to cube spinner div
      cubeSpinner.appendChild(face);
    }
  
    // Append cube spinner to stage cube container
    stageCubeCont.appendChild(cubeSpinner);
  
    // Append stage cube container to the body
    document.body.appendChild(stageCubeCont);
  }
  
  // Call the function to generate and append the cube
  generateCube();


  const myIcon = document.createElement('i');
myIcon.classList.add('fas', 'fa-home'); // Add classes to specify the icon ('fas' for regular style, 'fa-home' for the home icon)
document.body.appendChild(myIcon); // Append the icon to the body or any other desired element

