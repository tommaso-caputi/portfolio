var textarea = document.getElementById('textinput');
var input = document.getElementById('input');
var cursor = document.getElementById('cursor');
var terminal = document.getElementById('terminal');

var delay = 20;


textarea.onkeyup = (key) => {
    switch (key.key) {
        case 'Enter':
            let temp = input.textContent
            input.innerHTML = '';
            addLine(temp)
            break
        default:
            if (/^[a-zA-Z0-9]$/.test(key.key)) {
                input.innerHTML += key.key
            }
            break
    }
}



const addLine = (text, type, time = delay) => {
    console.log(time, text)
    var line = document.createElement(type)
    terminal.appendChild(line)
    let i = 0;
    const characters = Array.from(text);
    const interval = () => {
        if (i < characters.length) {
            line.innerHTML += characters[i];
            i++;
            setTimeout(interval, time);
        }
    };
    interval();
}

addLine(` 
 ______   ______     __    __     __    __     ______     ______     ______        ______     ______     ______   __  __     ______   __    
/\\__  _\\ /\\  __ \\   /\\ "-./  \\   /\\ "-./  \\   /\\  __ \\   /\\  ___\\   /\\  __ \\      /\\  ___\\   /\\  __ \\   /\\  == \\ /\\ \\/\\ \\   /\\__  _\\ /\\ \\   
\\/_/\\ \\/ \\ \\ \\/\\ \\  \\ \\ \\-./\\ \\  \\ \\ \\-./\\ \\  \\ \\  __ \\  \\ \\___  \\  \\ \\ \\/\\ \\     \\ \\ \\____  \\ \\  __ \\  \\ \\ _-/  \\ \\ \\_\\ \\  \\/_/\\ \\/ \\ \\ \\  
   \\ \\_\\  \\ \\_____\\  \\ \\_\\ \\ \\_\\  \\ \\_\\ \\ \\_\\  \\ \\_\\ \\_\\  \\/\\_____\\  \\ \\_____\\     \\ \\_____\\  \\ \\_\\ \\_\\  \\ \\_\\    \\ \\_____\\    \\ \\_\\  \\ \\_\\ 
    \\/_/   \\/_____/   \\/_/  \\/_/   \\/_/  \\/_/   \\/_/\\/_/   \\/_____/   \\/_____/      \\/_____/   \\/_/\\/_/   \\/_/     \\/_____/     \\/_/   \\/_/         
        `, "pre", 0);
addLine("Hi I'm tommaso caputi, a developer and a student of Politecnico di Bari", "p")
addLine("For a list of available commands, type 'help'.", "p");
