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
function addLine(text, type, time = delay) {
    var t = "";
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
            t += "&nbsp;&nbsp;";
            i++;
        } else {
            t += text.charAt(i);
        }
    }
    setTimeout(function () {
        var next = document.createElement(type);
        next.innerHTML = t;
        terminal.appendChild(next)
        window.scrollTo(0, document.body.scrollHeight);
    }, time);
}

const addMultipleLines = (lines, time) => {
    if (terminal.innerHTML != '') {
        terminal.innerHTML += '<p>user@tommasocaputi.com:~$ ' + command + '</p>';
    }
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
        case 'social':
            addMultipleLines(social, 200);
            break;
        case 'clear':
            terminal.innerHTML = ' ';
            break;
        case 'help':
            addMultipleLines(help, 200);
            break;
        default:
            break;
    }
}   