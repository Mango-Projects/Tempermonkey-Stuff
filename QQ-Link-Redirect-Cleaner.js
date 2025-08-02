// ==UserScript==
// @name         QQ Link Redirect Cleaner
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  自動跳轉 QQ 中轉鏈接至原始鏈接，點擊確認後才會跳轉
// @match        https://c.pc.qq.com/ios.html*
// @author       MangoJellyPudding
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 取得 URL 參數中的 url 值
    const params = new URLSearchParams(window.location.search);
    const targetUrl = params.get("url");

    if (targetUrl) {
        const decodedUrl = decodeURIComponent(targetUrl);

        // 顯示確認提示框
        const shouldRedirect = confirm(`是否跳轉到以下連結？\n\n${decodedUrl}`);

        if (shouldRedirect) {
            // 跳轉
            window.location.href = decodedUrl;
        }
        // 否則什麼都不做，停留在原頁
    }
})();
