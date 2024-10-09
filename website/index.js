const counter = document.querySelector(".counter-number");
async function updateCounter(){
    let response = await fetch("https://fwnvkfmqlruaulecimmpds7q6i0trmqa.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` View number ${data} `;
}

updateCounter();