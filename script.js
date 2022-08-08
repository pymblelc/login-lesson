let titleHello = document.getElementById("titleHello");
let helloDots = 0;

setInterval(function() {
    helloDots += 1;
    if (helloDots>3) {
        helloDots = 0;
    }
    titleHello.innerText = "HELLO";
    for (i = 0; i < helloDots; i++) {
        titleHello.innerText += ".";
    }
}, 1000);

