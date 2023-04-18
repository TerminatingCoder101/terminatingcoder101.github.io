
// const header = document.querySelector(".header");
// const toggle = document.querySelector('#toggle');
// const sunIcon = document.querySelector('.light .toggle .bxs-sun');
// const moonIcon = document.querySelector('.light.toggle .bx-moon');


var button = document.getElementById('readmorebtn')
var para = document.getElementById('readtext')
var skillBtn = document.getElementById('btn1')
var skillBtn2 = document.getElementById('btn2')
var skillBtn3 = document.getElementById('btn3')
var skillpara = document.getElementById('skillpara')
var skillpara1 = document.getElementById('skillpara1')
var skillpara2 = document.getElementById('skillpara2')
var skillintro = document.getElementById('skillIntro')
var skillintro1 = document.getElementById('skillIntro1')
var skillintro2 = document.getElementById('skillIntro2')
var newBtn = document.getElementById('newBtn')
var robotBtn = document.getElementById('RobotBtn')
var second = document.getElementById('Second')
var robotics = document.getElementById('robotics')


robotBtn.addEventListener('click', robotics, false);
button.addEventListener('click',hideshow, false);
skillBtn.addEventListener('click', skillFunction);
skillBtn2.addEventListener('click', skillFunction1);
skillBtn3.addEventListener('click', skillFunction2);


function skillFunction(){
    skillBtn.style.visibility = 'hidden';
    skillintro.hidden = true;
    skillpara.hidden = false;
    setTimeout(newBtnFunc, 8000);
}

function skillFunction1(){
    skillBtn2.style.visibility = 'hidden';
    skillintro1.hidden = true;
    skillpara1.hidden = false;
    setTimeout(newBtnFunc1, 6000);
}

function skillFunction2(){
    skillBtn3.style.visibility = 'hidden';
    skillintro2.hidden = true;
    skillpara2.hidden = false;
    setTimeout(newBtnFunc2, 6000);
}

function newBtnFunc(){
    skillintro.hidden = false;
    skillBtn.style.visibility = 'visible';
    skillpara.hidden = true;
}

function newBtnFunc1(){
    skillintro1.hidden = false;
    skillBtn2.style.visibility = 'visible';
    skillpara1.hidden = true;
}

function newBtnFunc2(){
    skillintro2.hidden = false;
    skillBtn3.style.visibility = 'visible';
    skillpara2.hidden = true;
}


function robotics(){
    alert("Called!");
    robotBtn.style.display = "none";
    second.hidden = false;
    // setTimeout(robotics2,6000);
}

function robotics2(){
    second.hidden = true;
}

function hideshow() {
    para.style.display = 'block'; 
    this.style.display = 'none'
}



const typed = new Typed('.multiple-text', {
    strings: ['Sophomore in High School', 'Programmer', 'Musician', 'Mathematician', 'Engineer', 'AI Enthusiast', 'BlockChain Enthusiast'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});