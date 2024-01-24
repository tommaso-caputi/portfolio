var textarea = document.getElementById('textinput');
var input = document.getElementById('input');
var cursor = document.getElementById('cursor');
var terminal = document.getElementById('terminal');

var delay = 20;

textarea.oninput = (e) => {
    key = e.data;
    command = input.textContent.toLowerCase();
    switch (key) {
        case null:
            if (e.inputType === 'insertLineBreak') {//enter
                input.innerHTML = '';
                action(command)
            } else if (e.inputType === 'deleteContentBackward') {//backspace
                input.innerHTML = input.innerHTML.substring(0, input.innerHTML.length - 1);
            }
            break
        default:
            if (key.length >= input.textContent.length) {
                key = key[key.length - 1];
            }
            if (/^[a-zA-Z0-9]$/.test(key)) {
                input.innerHTML += key;
            }
            break;
    }
}

const addCleanLine = (line, time = delay) => {
    let i = 0;
    const characters = Array.from(line);
    const interval = () => {
        if (i < characters.length) {
            if (characters == ' ') {
                terminal.innerHTML += "&nbsp;"
            }
            terminal.innerHTML += characters[i];
            i++;
            setTimeout(interval, time);
        }
    };
    interval();
}


const addLine = (text, type, time = delay) => {
    var line = document.createElement(type);
    terminal.appendChild(line);
    let i = 0;
    const characters = Array.from(text);
    const interval = () => {
        if (i < characters.length) {
            if (characters[i] == ' ' && type != 'pre') {
                console.log('a')
                line.innerHTML += '&nbsp;';
            } else {
                line.innerHTML += characters[i];
            }
            i++;
            setTimeout(interval, time);
        }
    };
    interval();
}

const addMultipleLines = (lines, time) => {
    let i = 0;
    const interval = () => {
        if (i < lines.length) {
            addLine(lines[i][1], lines[i][0], lines[i][2]);
            i++;
            setTimeout(interval, time);
        }
    };
    interval();
}


addMultipleLines(init, 0)
textarea.focus();


const action = (command) => {
    switch (command) {
        case 'clear':
            terminal.innerHTML = '';
            break;
        case 'help':
            terminal.innerHTML += '<p>user@tommasocaputi.com:~$ ' + command + '</p>';
            addMultipleLines(help, 200);
            break;
        default:
            break;
    }
}   