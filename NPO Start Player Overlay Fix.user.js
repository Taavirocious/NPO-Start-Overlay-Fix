// ==UserScript==
// @name         NPO Start Player Overlay Fix
// @namespace    http://tampermonkey.net/
// @version      1.01
// @icon https://www.npostart.nl/images/npo_logo_40x40.png
// @description  Fixes the very intrusive grey gradient overlay with a more reserved look.
// @author       Taavirocious
// @match        https://start-player.npo.nl/embed/*
// @grant        none
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

// Replaces the old gradient in the player with a new one.
addGlobalStyle('.video-js:before {content: ""; width: 100%; height: 100%; top: 0; position: absolute; background: rgb(0,0,0); background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 20%, rgba(255,255,255,0) 83%, rgba(0,0,0,1) 100%); pointer-events: none; -ms-touch-action: none; touch-action: none; z-index: 1; opacity: 1; visibility: visible;}');
