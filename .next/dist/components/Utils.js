'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var extractElement = function extractElement(element) {
    return document.querySelector(element);
};

var addClass = exports.addClass = function addClass(_element, name) {
    var element = extractElement(_element);
    if (!element) return;
    if (element.classList) {
        element.classList.add(name);
    } else {
        element.className += ' ' + name;
    }
};

var removeClass = exports.removeClass = function removeClass(_element, name) {
    var element = extractElement(_element);
    if (!element) return;
    if (element.classList) {
        element.classList.remove(name);
    } else {
        element.className = element.className.replace(new RegExp('(^|\\b)' + name.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
};