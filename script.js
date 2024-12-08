function getJoke(){
    return fetch("https://icanhazdadjoke.com/slack")
            .then(response => response.json())
            .catch(error => console.log(error));
}

function addJoke(){
    let joke = getJoke();

    joke.then(data => {
        console.log(data)
        document.querySelector(".joke").innerText = data.attachments[0].text;
    });
}
addJoke();

document.querySelector(".btn").addEventListener("click", addJoke);