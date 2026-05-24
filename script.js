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
const SELECTOR = 'path[d="M6 3a4 4 0 0 0-4 4v14h20V7a4 4 0 0 0-4-4H6Zm1 2H6a2 2 0 0 0-2 2v1h3V5Zm2 0v3h6V5H9Zm11 5v9H4v-9h16Zm-3-5v3h3V7a2 2 0 0 0-2-2h-1Z"]';

setInterval(() => {
  const button = document.querySelector(SELECTOR)?.closest("button");
  if (!button) {
    return;
  }

  setTimeout(() => {
    button.click();
  }, Math.floor(Math.random() * 700) + 300);
}, TIME);
