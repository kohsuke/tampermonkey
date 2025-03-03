// ==UserScript==
// @name         Confluence banner killer
// @namespace    https://kohsuke.org/
// @version      2025-02-05
// @description  try to take over the world!
// @author       You
// @match        https://cloudbees.atlassian.net/wiki/spaces/*/pages/edit-v2/*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/kohsuke/tampermonkey/refs/heads/main/confluence-banner-killer.js
// ==/UserScript==

(function() {
    'use strict';
    setInterval(function() {
        document.getElementById("AkTopNav").style.display = "none";
        document.querySelector("DIV#confluence-ui DIV[data-layout-container]").style.gridTemplateRows = "0px 0px auto";
    }, 1000);
})();
