/*
 ______   ______     __    __     __    __     ______     ______     ______        ______     ______     ______   __  __     ______   __    
/\\__  _\\ /\\  __ \\   /\\ "-./  \\   /\\ "-./  \\   /\\  __ \\   /\\  ___\\   /\\  __ \\      /\\  ___\\   /\\  __ \\   /\\  == \\ /\\ \\/\\ \\   /\\__  _\\ /\\ \\   
\\/_/\\ \\/ \\ \\ \\/\\ \\  \\ \\ \\-./\\ \\  \\ \\ \\-./\\ \\  \\ \\  __ \\  \\ \\___  \\  \\ \\ \\/\\ \\     \\ \\ \\____  \\ \\  __ \\  \\ \\ _-/  \\ \\ \\_\\ \\  \\/_/\\ \\/ \\ \\ \\  
   \\ \\_\\  \\ \\_____\\  \\ \\_\\ \\ \\_\\  \\ \\_\\ \\ \\_\\  \\ \\_\\ \\_\\  \\/\\_____\\  \\ \\_____\\     \\ \\_____\\  \\ \\_\\ \\_\\  \\ \\_\\    \\ \\_____\\    \\ \\_\\  \\ \\_\\ 
    \\/_/   \\/_____/   \\/_/  \\/_/   \\/_/  \\/_/   \\/_/\\/_/   \\/_____/   \\/_____/      \\/_____/   \\/_/\\/_/   \\/_/     \\/_____/     \\/_/   \\/_/         
*/

help = [
    ['p', 'projects           list of public dev projects'],
    ['p', 'social             link to social'],
    ['p', 'email              contact me with an email'],
    ['p', "theme [color]      change the terminal theme color, use 'theme' for view all available colors"],
    ['p', 'banner             show the header'],
    ['p', 'clear              clear the terminal'],
    ['p', 'exit               get back to the home'],
    //['br', '']
];

init = [
    ['pre', ` ______   ______     __    __     __    __     ______     ______     ______        ______     ______     ______   __  __     ______   __    `, 10, null, 'var(--liner-color)'],
    ['pre', `/\\__  _\\ /\\  __ \\   /\\ "-./  \\   /\\ "-./  \\   /\\  __ \\   /\\  ___\\   /\\  __ \\      /\\  ___\\   /\\  __ \\   /\\  == \\ /\\ \\/\\ \\   /\\__  _\\ /\\ \\   `, 11, null, 'var(--liner-color)'],
    ['pre', `\\/_/\\ \\/ \\ \\ \\/\\ \\  \\ \\ \\-./\\ \\  \\ \\ \\-./\\ \\  \\ \\  __ \\  \\ \\___  \\  \\ \\ \\/\\ \\     \\ \\ \\____  \\ \\  __ \\  \\ \\ _-/  \\ \\ \\_\\ \\  \\/_/\\ \\/ \\ \\ \\  `, 12, null, 'var(--liner-color)'],
    ['pre', `   \\ \\_\\  \\ \\_____\\  \\ \\_\\ \\ \\_\\  \\ \\_\\ \\ \\_\\  \\ \\_\\ \\_\\  \\/\\_____\\  \\ \\_____\\     \\ \\_____\\  \\ \\_\\ \\_\\  \\ \\_\\    \\ \\_____\\    \\ \\_\\  \\ \\_\\ `, 13, null, 'var(--liner-color)'],
    ['pre', `    \\/_/   \\/_____/   \\/_/  \\/_/   \\/_/  \\/_/   \\/_/\\/_/   \\/_____/   \\/_____/      \\/_____/   \\/_/\\/_/   \\/_/     \\/_____/     \\/_/   \\/_/         `, 14, null, 'var(--liner-color)'],
    ['p', "For a list of available commands, type 'help'"]
]

social = [
    ['p', 'github                 https://github.com/tommaso-caputi', null, 'https://github.com/tommaso-caputi'],
    ['p', 'linkedin               https://www.linkedin.com/in/tommaso-caputi/', null, 'https://www.linkedin.com/in/tommaso-caputi/'],
    //['br', '']
]

error1 = [
    ['p', "Insert a valid command, use 'help' for a list of available commands"]
]
error2 = [
    ['p', "Insert a valid theme, use 'theme' for a list of available themes"]
]

projects = [
    ['p', 'Work in progress, some projects are on github']
]


color = [
    ['p', 'classic, atom, aura, maia, nord, fairy, fairy-dark, everforest, everforest-dark, elio, lunaria, lunaria-dark']
]
themes = {
    'everforest': ['rgb(253, 246, 227)', '#5C6A72', '#F85552'],
    'everforest-dark': ['rgb(45, 53, 59)', '#D3C6AA', '#A7C080'],
    'fairy': ['rgb(90, 84, 117)', '#C2FFDF', '#FF857F'],
    'fairy-dark': ['rgb(66, 57, 93)', '#C2FFDF', '#FF857F'],
    'elio': ['rgb(4, 26, 59)', '#F2F2F2', '#6AB017'],
    'lunaria-dark': ['rgb(54, 70, 78)', '#CACED8', '#809984'],
    'lunaria': ['rgb(235, 228, 225)', '#3F3566', '#497D46'],
    'atom': ['rgb(22, 23, 25)', '#E0E0E0', '#FD5FF1'],
    'aura': ['rgb(21, 20, 27)', '#EDECEE', '#FFCA85'],
    'maia': ['rgb(49, 54, 59)', '#E0E0E0', '#BA2922'],
    'nord': ['rgb(235, 234, 242)', '#003B4E', '#069F5F'],
    //'classic': ['rgb(247, 247, 247)', '#090300', '#ee6c4d'],
    'classic': ['rgb(247, 247, 247)', '#090300', '#2596be'],
}