// Coucou toi qui regarde dans le code
//
//
// /‾‾‾‾‾\ /‾‾‾‾‾] [‾‾‾‾‾‾‾‾] |‾‾‾‾‾] |‾‾‾‾‾\ |‾‾‾‾‾\ |‾| /‾/
// | |‾| | | |‾‾‾   ‾‾|  |‾‾  | |‾‾‾  |     | |     | | |/ /
// | | | | | |        |  |    |  ___] |     / |     / |  _/
// | |_| | | |___     |  |    | |___  | |\ \  | |\ \  | |
// \_____/ \_____]    |__|    |_____] |_| \_\ |_| \_\ |_|
// MADE ON EARTH BY HUMANS

function drawInner1() {
    const canvas = document.getElementById("robotBgInner1");
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 2000, 0);

    ctx.globalCompositeOperation = 'destination-over'
    gradient.addColorStop(.2, "#000");
    gradient.addColorStop(.8, "#00000000");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, 700);
    ctx.lineTo(2000, 300);
    ctx.lineTo(2000, 0);
    ctx.closePath();
    ctx.fill();
}

function drawInner2() {
    const canvas = document.getElementById("robotBgInner2");
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 2000, 0);

    ctx.globalCompositeOperation = 'destination-over'
    gradient.addColorStop(.2, "#00000000");
    gradient.addColorStop(.8, "#444448");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.moveTo(0, 700);
    ctx.lineTo(0, 1000);
    ctx.lineTo(2000, 600);
    ctx.lineTo(2000, 300);
    ctx.closePath();
    ctx.fill();
}

function drawInner3() {
    const canvas = document.getElementById("robotBgInner3");
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 2000, 0);

    ctx.globalCompositeOperation = 'destination-over'
    gradient.addColorStop(0, "#00000000");
    gradient.addColorStop(.8, "#00000060");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.moveTo(2000, 600);
    ctx.lineTo(2000, 1000);
    ctx.lineTo(0, 400);
    ctx.lineTo(0, 0);
    ctx.closePath();
    ctx.fill();
}

function drawInner4() {
    const canvas = document.getElementById("robotBgInner4");
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 2000, 0);

    ctx.globalCompositeOperation = 'destination-over'
    gradient.addColorStop(.2, "#000");
    gradient.addColorStop(.8, "#00000060");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.moveTo(2000, 1000);
    ctx.lineTo(2000, 2000);
    ctx.lineTo(0, 1400);
    ctx.lineTo(0, 400);
    ctx.closePath();
    ctx.fill();
}

function drawInner5() {
    const canvas = document.getElementById("robotBgInner5");
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 2000, 0);

    ctx.globalCompositeOperation = 'destination-over'
    gradient.addColorStop(.2, "#000");
    gradient.addColorStop(.8, "#00000060");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.moveTo(2000, 800);
    ctx.lineTo(2000, 2000);
    ctx.lineTo(0, 2000);
    ctx.lineTo(0, 1000);
    ctx.closePath();
    ctx.fill();
}


function drawInnerBg() {
    drawInner1()
    drawInner2()
    drawInner3()
    drawInner4()
    drawInner5()
}

drawInnerBg();
