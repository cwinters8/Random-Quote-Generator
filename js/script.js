/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// quote data
let quotes = [
    {
        quote: 'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.',
        source: 'Patrick McKenzie'
    },
    {
        quote: 'Injustice anywhere is a threat to justice everywhere.',
        source: 'Martin Luther King Jr.',
        citation: 'Letter from the Birmingham Jail',
        year: 1994
    },
    {
        quote: 'I am rarely happier than when spending an entire day programming my computer to perform automatically a task that would otherwise take me a good ten seconds to do by hand.',
        source: 'Douglas Adams',
        citation: 'Last Chance to See',
        year: 1992
    },
    {
        quote: 'When you start off, you have to deal with the problems of failure. You need to be thick-skinned, to learn that not every project will survive.',
        source: 'Neil Gaiman',
        citation: 'Art Matters',
        year: 2018
    },
    {
        quote: 'Do or do not, there is no try.',
        source: 'Yoda',
        citation: 'Star Wars: The Empire Strikes Back',
        year: 1980
    },
    {
        quote: 'Often you will discover that the harder you work, and the more wisely you work, the luckier you get.',
        source: 'Neil Gaiman',
        citation: 'Art Matters',
        year: 2018
    },
    {
        quote: 'Make interesting, amazing, glorious, fantastic mistakes. Break rules. Leave the world more interesting for your being here.',
        source: 'Neil Gaiman',
        citation: 'Art Matters',
        year: 2018
    }   
]

// array of colors
let colorClasses = ['navy', 'gunmetal', 'rusty-red', 'yellow', 'forest', 'violet'];

// get a random number between 0 and the provided maximum
function getRandom(max) {
    return Math.floor(Math.random() * max);
}

// return a random quote from the quotes array
function getRandomQuote(array) {
    let random = getRandom(array.length);
    let quote = array[random];
    return(quote);
}

// return a random color
function getRandomColorClass(array) {
    let random = getRandom(array.length);
    let color = array[random];
    return(color);
}

// set color on HTML body
function setColorClass() {
    let color = getRandomColorClass(colorClasses);
    document.body.className = color;
}

// prints a provided message to the div with the provided class
function print(message, divClass) {
    let div = document.getElementById(divClass);
    div.innerHTML = message;
}

let id;
// print a random quote to the page
function printQuote() {
    clearInterval(id);
    let quote = getRandomQuote(quotes);
    let html = '<p class="quote">' + quote['quote'] + '</p>';
    html += '<p class="source">' + quote['source'];
    if (quote['citation']) {
        html += '<span class="citation">' + quote['citation'] + '</span>';
    }
    if (quote['year']) {
        html += '<span class="year">' + quote['year'] + '</span>';
    }
    html += '</p>';
    setColorClass();
    print(html, 'quote-box');
    id = setInterval(function() {printQuote()}, 10000);
}
printQuote();

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
