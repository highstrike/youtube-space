// ==UserScript==
// @name         YouTube Space
// @namespace    https://github.com/highstrike
// @homepageURL  https://github.com/highstrike/youtube-space
// @description  Fix space bar behaviour when video element is out of focus.
// @icon         https://raw.githubusercontent.com/highstrike/youtube-space/master/icon.png
// @author       highstrike
// @match        *://www.youtube.com/*
// @grant        none
// @version      2.0.0
// @copyright    2024, highstrike (https://openuserjs.org/users/highstrike)
// @license      GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt
// @updateURL    https://openuserjs.org/meta/highstrike/YouTube_Space.meta.js
// @downloadURL  https://openuserjs.org/install/highstrike/YouTube_Space.user.js
// ==/UserScript==

window.addEventListener('keydown', (e) => {
    const isSpace = e.code === 'Space'; // Use e.code for better readability
    const allowedClasses = ['ytp-progress-bar', 'ytp-fine-scrubbing-thumbnails'];

    if (isSpace && allowedClasses.includes(document.activeElement.className)) {
        const event = new KeyboardEvent('keydown', {
            key: 'k',
            code: 'KeyK', // Use 'code' to specify the key
            keyCode: 75,
            which: 75,
            bubbles: true,
            cancelable: true
        });
        document.dispatchEvent(event);
    }
});
