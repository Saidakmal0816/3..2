const form = document.getElementById("form");
const input = document.querySelector("#inp");
const text = document.getElementById("text");

// const thisYear = 2022;

const hour = 1;
const minut = 60;
const secund = 3600;

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const inputValue = input.value;

    const hourResult = Math.floor(inputValue / hour);
    const minutResult = Math.floor(inputValue / minut);
    const secundResult = Math.floor(inputValue / secund);

    text.textContent = `hour: ${hourResult}, minut: ${minutResult}, secund: ${secundResult}`

    // const result = thisYear - inputValue;

    // text.textContent = `Result: ${result} years old`;
    form.reset();
})


console.log(new Date());
const currentDate = new Date();
