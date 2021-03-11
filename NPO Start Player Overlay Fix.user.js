// ==UserScript==
// @name         NPO Start Player Overlay Fix
// @namespace    http://tampermonkey.net/
// @version      1.0
// @icon https://www.npostart.nl/images/npo_logo_40x40.png
// @description  Fixes the very intrusive grey gradient overlay with a more reserved look.
// @author       Me
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

addGlobalStyle('.video-js:before {content: "" ; position: absolute; top: 83%; width: 100%; height: 17%; background: #000000; background: linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0.3) 50%, #00000000 100%); pointer-events: none; -ms-touch-action: none; touch-action: none; z-index: 1; opacity: 1; visibility: visible; }');
