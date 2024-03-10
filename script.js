const welcome = document.getElementById('welcome');
const login = document.getElementById('login');
const register = document.getElementById('register');
const next = document.getElementById('next');
const inputs = document.getElementsByClassName('inp');
const buttons = document.getElementsByClassName('but');

buttons[0].addEventListener('click', (event) => {
    event.preventDefault();
    welcome.style.display = 'none';
    buttons[0].style.display = 'none';
    buttons[1].style.display = 'none';
    register.style.display = 'flex';
    inputs[0].style.display = 'flex';
    inputs[1].style.display = 'flex';
    next.style.display = 'block';
})

buttons[1].addEventListener('click', (event) => {
    event.preventDefault();
    welcome.style.display = 'none';
    buttons[0].style.display = 'none';
    buttons[1].style.display = 'none';
    login.style.display = 'flex';
    inputs[0].style.display = 'flex';
    inputs[1].style.display = 'flex';
    next.style.display = 'block';
})
