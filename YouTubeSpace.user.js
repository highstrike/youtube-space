// ==UserScript==
// @name         YouTube Space
// @description  Fix space bar behaviour when video element is out of focus.
// @icon         https://raw.githubusercontent.com/highstrike/youtube-space/master/icon.png
// @namespace    https://github.com/highstrike/youtube-space
// @version      1.0
// @author       highstrike
// @license      GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt
// @match        *://www.youtube.com/*
// @grant        none
// ==/UserScript==

window.addEventListener('keydown', function(e) {
    // console.log(document.activeElement.className);
    let isSpace = e.keyCode === 32; // Space
    let allowedClasses = ['ytp-progress-bar', 'ytp-fine-scrubbing-thumbnails'];
    if (isSpace && allowedClasses.includes(document.activeElement.className)) {
        document.dispatchEvent(new KeyboardEvent("keydown", {
            key: "K",
            keyCode: 75,
            which: 75
        }));
    }
});
