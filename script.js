const background = document.getElementById("background");


const code = [

"import random",
"import requests",
"",
"channel = '@zphrexx.official'",
"creator = 'Zphrexx'",
"",
"function loadShorts() {",
"    getLatestVideo();",
"}",
"",
"subscribers = update()",
"views = calculate()",
"",
"if online:",
"    upload()",
"",
"while True:",
"    create_content()",
"",
"status = ONLINE",
"system.ready = true",
"",
"render_interface()",
"",
"// Brawl Stars Creator",
"// Latest Shorts",
"// YouTube API",
"",
"loading assets...",
"connecting...",
"complete."
];



function createCodeLine(){

    const line = document.createElement("div");

    line.className = "code-line";

    line.textContent =
    code[Math.floor(Math.random()*code.length)];


    line.style.left =
    Math.random()*100 + "vw";


    line.style.top =
    Math.random()*100 + "vh";


    line.style.transform =
    `rotate(${Math.random()*4-2}deg)`;


    background.appendChild(line);

}



for(let i = 0; i < 80; i++){

    createCodeLine();

}



let offset = 0;


function moveCode(){

    offset -= 0.15;


    background.style.transform =
    `translateY(${offset}px)`;


    if(offset < -200){

        offset = 0;

    }


    requestAnimationFrame(moveCode);

}


moveCode();
