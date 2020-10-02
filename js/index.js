function updateInnerHTML(selector, newValue) {
    document.querySelector(selector).innerHTML = newValue;
}

updateInnerHTML('h2.intro', 'something New');

function strong(value) {
    return '<strong>' + value + '</strong>';
}

let importantText = document.querySelector('p.important').innerHTML;
importantText = strong(importantText);

updateInnerHTML('p.important', importantText);
