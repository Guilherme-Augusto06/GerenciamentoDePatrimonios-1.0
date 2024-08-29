const darkMode = document.querySelector('.darkModeHomepage');
function darkModeHomepage() {
    document.body.classList.toggle('dark-mode');
}
darkMode.addEventListener('click', darkModeHomepage);
console.log('darkModeHomepage');
