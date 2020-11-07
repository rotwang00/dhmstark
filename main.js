var cookies = 0;
var cursors = 0;

function cookieClick(number) {
    cookies += number;
    document.getElementById("cookies").innerHTML = cookies;
    console.log(cookies);
}

function buyCursor() {
    var cursorCost = Math.floor(10 * Math.pow(1.1, cursors));
    if (cookies >= cursorCost) {
        cursors += 1;
        cookies -= cursorCost;
        document.getElementById("cursors").innerHTML = cursors;
        document.getElementById("cookies").innerHTML = cookies;
    };
    var nextCost = Math.floor(10 * Math.pow(1.1, cursors));
    document.getElementById("cursorCost").innerHTML = nextCost;
}

window.setInterval(function() {
    cookieClick(cursors);
}, 1000);