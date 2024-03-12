const welcome = document.getElementById('welcome');
const login = document.getElementById('login');
const register = document.getElementById('register');
const next = document.getElementById('next');
const inputs = document.getElementsByClassName('inp');
const buttons = document.getElementsByClassName('but');

let logi = document.getElementById('user');
let password = document.getElementById('password');

class User {
    constructor(login, password) {
        this.login = login;
        this.password = password;
    }
}

let users = []

buttons[0].addEventListener('click', (event) => {
    event.preventDefault();
    welcome.style.display = 'none';
    buttons[0].style.display = 'none';
    buttons[1].style.display = 'none';
    register.style.display = 'flex';
    inputs[0].style.display = 'flex';
    inputs[1].style.display = 'flex';
    next.style.display = 'block';

    setTimeout(() => {
        register.classList.add('show');
        inputs[0].classList.add('show');
        inputs[1].classList.add('show');
        next.classList.add('show');
    }, 50);
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

    setTimeout(() => {
        login.classList.add('show');
        inputs[0].classList.add('show');
        inputs[1].classList.add('show');
        next.classList.add('show');
    }, 50);
})

next.addEventListener('click', (event) => {
    event.preventDefault();

    if(login.style.display == 'flex') {

        users.forEach(function(user) {

            if(logi.value === user.login && password.value === user.password) {
                window.location.href = 'html/characterCreator.html';
            }

        })

    } else {
        users.push(new User(logi.value, password.value));

        welcome.style.display = 'block';
        buttons[0].style.display = 'block';
        buttons[1].style.display = 'block';
        register.style.display = 'none';
        inputs[0].style.display = 'none';
        inputs[1].style.display = 'none';
        next.style.display = 'none';

        setTimeout(() => {
            welcome.classList.add('show');
            buttons[0].classList.add('show');
            buttons[1].classList.add('show');
        }, 50);

    }

    logi.value = '';
    password.value = '';
})
