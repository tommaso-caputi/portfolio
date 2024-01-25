var textarea = document.getElementById('textinput');
var input = document.getElementById('input');
var cursor = document.getElementById('cursor');
var terminal = document.getElementById('terminal');

var delay = 20;

textarea.oninput = (e) => {
    key = e.data;
    command = input.textContent.toLowerCase()/* .replace(/\s/g, '') */;
    if (key != null) {
        input.innerHTML = textarea.value;
    } else {
        input.innerHTML = textarea.value;
        if (e.inputType === 'insertLineBreak') {//enter
            input.innerHTML = '';
            textarea.value = '';
            action(command)
        }
    }
}

const addLine = (text, type, time = delay, link, color) => {
    var line = document.createElement(type);
    line.style.color = color
    terminal.appendChild(line);
    let i = 0;
    const characters = Array.from(text);
    const interval = () => {
        if (i < characters.length) {
            if (characters[i] == ' ' && type != 'pre') {
                line.innerHTML += '&nbsp;';
            } else {
                line.innerHTML += characters[i];
            }
            i++;
            setTimeout(interval, time);
        } else {
            if (link) {
                line.innerHTML = line.innerHTML.substring(0, line.innerHTML.length - link.length) + '<a href="' + link + '">' + link + '</a>';
            }
        }
    };
    interval();
}

const addMultipleLines = (lines, time = delay) => {
    let i = 0;
    const interval = () => {
        if (i < lines.length) {
            addLine(lines[i][1], lines[i][0], lines[i][2], lines[i][3], lines[i][4]);
            i++;
            setTimeout(interval, time);
        }
    };
    interval();
}


addMultipleLines(init)
textarea.focus();


const action = (command) => {
    terminal.innerHTML += ' <div id="inputcont"> ' + command + '</div>';
    switch (command) {
        case 'theme':
            addMultipleLines(color, 200);
            break;
        case 'clear':
            terminal.innerHTML = '';
            break;
        case 'social':
            addMultipleLines(social, 200);
            break
        case 'projects':
            addMultipleLines(projects, 200);
            break
        case 'banner':
            addMultipleLines(init);
            break
        case 'help':
            addMultipleLines(help, 200);
            break;
        default:
            if (command.substring(0, 5) == 'theme') {
                let color = command.substring(6, command.length)
                document.documentElement.style.setProperty('--background-color', '' + themes[color][0] + '');
                document.documentElement.style.setProperty('--foreground-color', '' + themes[color][1] + '');
                document.documentElement.style.setProperty('--liner-color', '' + themes[color][2] + '');
            } else {
                addMultipleLines(error, 200);
            }
            break;
    }
}   