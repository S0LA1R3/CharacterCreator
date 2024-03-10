const button = document.getElementById('A');
const span = document.getElementById('a');

button.addEventListener('click', () => {
    span.innerHTML += 'a';
})
