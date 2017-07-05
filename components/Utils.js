const extractElement = (element) => {
    return document.querySelector(element);
}

export const addClass = (_element, name) => {
    const element = extractElement(_element);
    if (!element) return;
    if (element.classList) {
        element.classList.add(name);
    }
    else {
        element.className += ' ' + name;
    }
}

export const removeClass = (_element, name) => {
    const element = extractElement(_element);
    if (!element) return;
    if (element.classList) {
        element.classList.remove(name);
    }
    else {
        element.className =
        element.className.replace(new RegExp('(^|\\b)' + name.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
}
