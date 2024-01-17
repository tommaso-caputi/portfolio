const main = document.getElementById('main');
const cursor = document.getElementById('cursor');

const writeDelay = 0;
const textSizes = ['x-large-text', 'medium-text'];
var textSize = textSizes[0]

window.addEventListener('load', async () => {
    await addMultipleLines(["Hi I'm tommaso caputi,", "a developer and a student of Politecnico di Bari", " "])
    textSize = textSizes[1]
    await addMultipleLines(["1. About Me", "2. Projects", "3. Contact", " "])
    textSize = textSizes[0]
    addLine("$ ")
});

window.addEventListener("keydown", (key) => {
    switch (key.key) {
        case "Backspace":
            removeChar()
            break;
        case "Enter":
            alert()
            break;
        default:
            if (/^[a-zA-Z0-9]$/.test(key.key)) {
                addChar(key.key);
            }
            break
    }
})


const addMultipleLines = async (lines) => {
    for (const line of lines) {
        await addLine(line)
        window.main.appendChild(document.createElement('br'))
    }
}

const addLine = (line) => {
    return new Promise((resolve) => {
        i = 0
        const interval = setInterval(() => {
            addChar(line[i++])
            if (line.length == i) {
                clearInterval(interval)
                resolve()
            }
        }, writeDelay);
    })
}

const removeChar = () => {
    const lastChild = window.main.lastChild;
    if (lastChild) {
        const prevSibling = lastChild.previousSibling;
        if (prevSibling && prevSibling.previousSibling.textContent != '$') {
            window.main.removeChild(prevSibling);
        }
    }
}

const addChar = (char) => {
    const span = document.createElement('span')
    span.textContent = char
    span.className = window.textSize
    window.main.appendChild(span)
    addCursor()
}

const addCursor = () => {
    window.main.appendChild(window.cursor)
}
const removeCursor = () => {
    window.main.removeChild(window.cursor)
}






window.addEventListener('click', () => {
    var r = document.querySelector(':root')
    if (r.style.getPropertyValue('--background-color') == 'white') {
        r.style.setProperty('--background-color', 'black');
        r.style.setProperty('--foreground-color', 'white');
    } else {
        r.style.setProperty('--background-color', 'white');
        r.style.setProperty('--foreground-color', 'black');
    }
})