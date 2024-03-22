const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://znxgd4tc5spawkirikcy37wh4m0wtgaj.lambda-url.us-west-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `Total View Count: ${data}`;
}
updateCounter();