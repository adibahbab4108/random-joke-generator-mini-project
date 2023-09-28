const jokePara = document.getElementById('joke');
const Btn = document.getElementById('btn');
const url = 'https://v2.jokeapi.dev/joke/Any';

let getJoke = () => {
    jokePara.classList.remove('fade');
    fetch(url).then((response) => response.json())
        .then(item => {
            jokePara.textContent = `${item.joke || item.setup}`;
            jokePara.classList.add('fade');
        })
}

Btn.addEventListener('click', getJoke);
getJoke()