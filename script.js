// ==UserScript==
// @name        Twitch Bonus Chest Auto Clicker
// @namespace   Violentmonkey Scripts
// @match       https://www.twitch.tv/*
// @grant       none
// @version     1.0
// @author      https://github.com/dev-quentin
// ==/UserScript==

const TIME = 1000;
const SELECTOR = 'path[d="M2 6v11h16V6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3Zm10-1H8v2h4V5Zm2 0v2h2V6a1 1 0 0 0-1-1h-1ZM4 9v6h12V9H4Zm1-4h1v2H4V6a1 1 0 0 1 1-1Z"]';

function getParent(node) {
    return node.parentNode ?? null;
}

setInterval(() => {
    let domNode = document.querySelector(SELECTOR);

    if (!domNode) {
        return;
    }

    while (domNode.nodeName != "BUTTON") {
        domNode = getParent(domNode);
        if (domNode === null) {
            break;
        }
    }

    if (domNode) {
        domNode.click();
    }
}, TIME);