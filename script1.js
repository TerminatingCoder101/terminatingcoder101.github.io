
// const header = document.querySelector(".header");
// const toggle = document.querySelector('#toggle');
// const sunIcon = document.querySelector('.light .toggle .bxs-sun');
// const moonIcon = document.querySelector('.light.toggle .bx-moon');

var button = document.getElementById('readmorebtn')
var para = document.getElementById('readtext')
var skillBtn = document.getElementById('btn1')
var skillpara = document.getElementById('skillpara')
var skillintro = document.getElementById('skillIntro')
var newBtn = document.getElementById('newBtn')
var robotBtn = document.getElementById('RobotBtn')
var second = document.getElementById('Second')
var robotics = document.getElementById('robotics')


robotBtn.addEventListener('click', robotics, false);
button.addEventListener('click',hideshow, false);
skillBtn.addEventListener('click', skillFunction, false);
//newBtn.addEventListener('click', newBtnFunc, false );


function skillFunction(){
    skillBtn.style.visibility = 'hidden';
    skillintro.hidden = true;
    skillpara.hidden = false;
    setTimeout(newBtnFunc, 5000);
    //newBtn.style.display = "block";
}

function newBtnFunc(){
    skillintro.hidden = false;
    skillBtn.style.visibility = 'visible';
    skillpara.hidden = true;
   // newBtn.style.display = "none";
    // document.getElementById("services-container").classList.remove('services-box2');
    // document.getElementById("services-container").classList.add('services-box');
}


function robotics(){
    alert("Called!");
    robotBtn.style.display = "none";
    second.hidden = false;
    // setTimeout(robotics2,5000);
}

function robotics2(){
    second.hidden = true;
}

function hideshow() {
    para.style.display = 'block'; 
    this.style.display = 'none'
}

var submit = document.getElementById('submitButton')
submit.addEventListener('click', sendMail);


function sendMail(){
    var params = {
        name: document.getElementById('name').value,
        email : document.getElementById('email').value,
        subject : document.getElementById('subject').value,
        number : document.getElementById('number').value
    };
}

const serviceId = service_8wyfdvo;
const templateId = template_mv2xxwt;

emailjs.sendMail(serviceId,templateId,params).then((res) => {
        document.getElementById('name').value = "",
        document.getElementById('email').value = "",
        document.getElementById('subject').value = "",
        document.getElementById('number').value = "";
        console.log(res);
        alert("Your message was sent successfully!");

    });
    
// toggle.addEventListener('click', () => {
//     document.header.theme.className.toggle('dark');
//     alert("Whatsup!");

//    sunIcon.className = sunIcon.className == "bx bxs-sun" ? "bx bxs-sun" : "bx bxs-sun";
  //  moonIcon.className = moonIcon.className == "bx bxs-moon" ? "bx bxs-moon" : "bx bxs-moon";
//})



// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');
//         if(top>=offset && top < offset + height) {
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//             });
//         };
//     });
// };

// ScrollReveal({
//     reset: true,
//     distance: '80px',
//     duration: 2000,
//     delay: 200
// });

// ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
// ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'top'});
