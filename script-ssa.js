const robot = require("robotjs");

// coordenadas do mouse com o delay de 1s
// setInterval(() => {
//     const mousePos = robot.getMousePos();
//     console.log(`coord: (${mousePos.x}, ${mousePos.y})`);
// }, 1000);

// cor do pixel com delay de 1s
// setInterval(() => {
//     const color = robot.getPixelColor(x, y);
//     console.log('color in: (${x}, ${y}) - ${color}`);
// }, 1000)

// coord e cor do pixel
const x = 1769; // altere x para o pixel desejado
const y = 207; // altere y para o pixel desejado
let lastColor = 525457; // altere a cor para o pixel desejado

// funcao que analisa a mudanca no pixel
function checkForChange() {
    const currentColor = robot.getPixelColor(x, y); //cor atual em xy
    if (currentColor == lastColor) {
        robot.keyTap("tab");
        // console.log('pixel changed');
    }
}

// delay de verificacao
setInterval(checkForChange, 50);