document.getElementById("confirmButton").addEventListener("click", function() {
    const birthYearInput = document.getElementById("birthYear");
    const generationOutput = document.getElementById("generation");
     ;
    const body = document.body

    if (isNaN(birthYear) || birthYear < 1900 || birthYear > 2024) {
        alert("Please enter a year between 1900 and 2024.");
        generationOutput.value = "";
        return;
    }

    let generation = "";

    if (birthYear >= 1900 && birthYear <= 1945) {
        generation = "Silent Generation";
        body.style.backgroundImage = 'url(/public/images/gen-silence.jpg)';
    } else if (birthYear >= 1946 && birthYear <= 1964) {
        generation = "Baby Boomer";
       body.style.backgroundImage = 'url(/public/images/gen-boomer.jpg)';
    } else if (birthYear >= 1965 && birthYear <= 1980) {
        generation = "Generation X";
       body.style.backgroundImage = 'url(/public/images/gen-X.jpeg)';
    } else if (birthYear >= 1981 && birthYear <= 1996) {
        generation = "Millennial";
        body.style.backgroundImage = 'url(/public/images/gen-millenial.jpeg)';
    } else if (birthYear >= 1997 && birthYear <= 2012) {
        generation = "Generation Z";
       body.style.backgroundImage = 'url(/public/images/gen-z.jpeg)';
    } else if (birthYear >= 2013 && birthYear <= 2024) {
        generation = "Generation Alpha";
        body.style.backgroundImage = 'url(/public/images/gen-alpha.jpg)';
    }

    generationOutput.value = `${generation}`;
});
