const background = document.getElementById("background");

const codeLines = [

"import random",
"from brawl import *",
"player = 'Zphrexx'",
"channel = '@zphrexx.official'",
"Loading...",
"Connecting...",
"Generating...",
"System Ready",
"while True:",
"print('BRAWL STARS')",
"def shorts():",
"return latest_short",
"subscribers += 1",
"views += 1000",
"render()",
"if online:",
"watch()",
"upload()"

];

function createLine(){

    const line = document.createElement("div");

    line.innerText =
    codeLines[
        Math.floor(Math.random()*codeLines.length)
    ];

    line.style.position = "absolute";

    line.style.left =
    Math.random()*100 + "vw";

    line.style.top = "110vh";

    line.style.color = "#39ff14";

    line.style.opacity = "0.18";

    line.style.fontSize =
    (16 + Math.random()*18) + "px";

    line.style.fontFamily =
    "monospace";

    line.style.whiteSpace = "nowrap";

    line.style.pointerEvents = "none";

    background.appendChild(line);

    let y = window.innerHeight + 50;

    const speed =
    0.3 + Math.random()*0.8;

    function animate(){

        y -= speed;

        line.style.transform =
        `translateY(${y-window.innerHeight}px)`;

        if(y < -150){

            line.remove();

            return;

        }

        requestAnimationFrame(animate);

    }

    animate();

}

setInterval(createLine,250);

for(let i=0;i<30;i++){

    setTimeout(createLine,i*120);

}
