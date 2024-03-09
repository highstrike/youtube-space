// ==UserScript==
// @name         YouTube Space
// @namespace    https://github.com/highstrike
// @homepageURL  https://github.com/highstrike/youtube-space
// @description  Fix space bar behaviour when video element is out of focus.
// @icon         https://raw.githubusercontent.com/highstrike/youtube-space/master/icon.png
// @author       highstrike
// @match        *://www.youtube.com/*
// @grant        none
// @version      1.0.1
// @copyright    2024, highstrike (https://openuserjs.org/users/highstrike)
// @license      GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt
// @updateURL    https://openuserjs.org/meta/highstrike/YouTube_Space.meta.js
// @downloadURL  https://openuserjs.org/install/highstrike/YouTube_Space.user.js
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
