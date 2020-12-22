if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function () {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function () {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 400);

}

var x = 0;

var titleText = ["S", "S/", "S\\", "SI", "SI/", "SI\\", "SIN", "SIN/", "SIN\\", "SINF", "SINF/", "SINF\\", "SINFU", "SINFU/", "SINFU\\", "SINFUL", "SINFUL/", "SINFUL\\", "SINFULL", "SINFUL/", "SINFUL\\", "SINFU/", "SINFU\\", "SINF/", "SINF\\", "SIN/", "SIN\\", "SI/", "SI\\", "S"];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length];

}