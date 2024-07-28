// ==UserScript==
// @name        Twitch Bonus Chest Auto Clicker
// @icon        https://raw.githubusercontent.com/dev-quentin/twitch-bonus-chest-auto-clicker/main/logo.jpg
// @namespace   0f4494b0ce95bc04feac86a004f7fdd1
// @match       https://www.twitch.tv/*
// @grant       none
// @version     1.1
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
    setTimeout(() => {
      domNode.click();
    }, Math.floor(Math.random() * 3) + 1);
  }
}, TIME);