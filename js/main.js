var textarea = document.getElementById('textinput');
var input = document.getElementById('input');
var cursor = document.getElementById('cursor');
var terminal = document.getElementById('terminal');

var delay = 20;

textarea.oninput = (e) => {
    key = e.data
    switch (key) {
        case null:
            if (e.inputType === 'insertLineBreak') {//enter

            } else if (e.inputType === 'deleteContentBackward') {//backspace
                input.innerHTML = input.innerHTML.substring(0, input.innerHTML.length - 2)
            }
            break
        default:
            if (key.length > 1) {
                key = key[key.length - 1]
            }
            if (/^[a-zA-Z0-9]$/.test(key)) {
                input.innerHTML += key
            }
            break
    }
}



const addLine = (text, type, time = delay) => {
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


/* addLine(` 
 ______   ______     __    __     __    __     ______     ______     ______        ______     ______     ______   __  __     ______   __    
/\\__  _\\ /\\  __ \\   /\\ "-./  \\   /\\ "-./  \\   /\\  __ \\   /\\  ___\\   /\\  __ \\      /\\  ___\\   /\\  __ \\   /\\  == \\ /\\ \\/\\ \\   /\\__  _\\ /\\ \\   
\\/_/\\ \\/ \\ \\ \\/\\ \\  \\ \\ \\-./\\ \\  \\ \\ \\-./\\ \\  \\ \\  __ \\  \\ \\___  \\  \\ \\ \\/\\ \\     \\ \\ \\____  \\ \\  __ \\  \\ \\ _-/  \\ \\ \\_\\ \\  \\/_/\\ \\/ \\ \\ \\  
   \\ \\_\\  \\ \\_____\\  \\ \\_\\ \\ \\_\\  \\ \\_\\ \\ \\_\\  \\ \\_\\ \\_\\  \\/\\_____\\  \\ \\_____\\     \\ \\_____\\  \\ \\_\\ \\_\\  \\ \\_\\    \\ \\_____\\    \\ \\_\\  \\ \\_\\ 
    \\/_/   \\/_____/   \\/_/  \\/_/   \\/_/  \\/_/   \\/_/\\/_/   \\/_____/   \\/_____/      \\/_____/   \\/_/\\/_/   \\/_/     \\/_____/     \\/_/   \\/_/         
        `, "pre", 0); */

addLine(` ______   ______     __    __     __    __     ______     ______     ______        ______     ______     ______   __  __     ______   __    `, "pre", 15)
addLine(`/\\__  _\\ /\\  __ \\   /\\ "-./  \\   /\\ "-./  \\   /\\  __ \\   /\\  ___\\   /\\  __ \\      /\\  ___\\   /\\  __ \\   /\\  == \\ /\\ \\/\\ \\   /\\__  _\\ /\\ \\   `, "pre", 18)
addLine(`\\/_/\\ \\/ \\ \\ \\/\\ \\  \\ \\ \\-./\\ \\  \\ \\ \\-./\\ \\  \\ \\  __ \\  \\ \\___  \\  \\ \\ \\/\\ \\     \\ \\ \\____  \\ \\  __ \\  \\ \\ _-/  \\ \\ \\_\\ \\  \\/_/\\ \\/ \\ \\ \\  `, "pre", 21)
addLine(`   \\ \\_\\  \\ \\_____\\  \\ \\_\\ \\ \\_\\  \\ \\_\\ \\ \\_\\  \\ \\_\\ \\_\\  \\/\\_____\\  \\ \\_____\\     \\ \\_____\\  \\ \\_\\ \\_\\  \\ \\_\\    \\ \\_____\\    \\ \\_\\  \\ \\_\\ `, "pre", 24)
addLine(`    \\/_/   \\/_____/   \\/_/  \\/_/   \\/_/  \\/_/   \\/_/\\/_/   \\/_____/   \\/_____/      \\/_____/   \\/_/\\/_/   \\/_/     \\/_____/     \\/_/   \\/_/         `, "pre", 27)


//addLine("Hi I'm tommaso caputi, a developer and a student of Politecnico di Bari", "p")
addLine("For a list of available commands, type 'help'.", "p");

textarea.focus();