﻿new Promise(resolve => {
    var i = 0;
    const interval = setInterval(() => {
        if(i > 100 || $('span:contains("Stores")').length) {
            clearInterval(interval);
            resolve();
        }
        i++;
    }, 200);
});