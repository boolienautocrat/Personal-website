window.onscroll = function () { myFunction() };

function myFunction() {
    var scrolledWin = document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scroll = (scrolledWin / height) * 100;

    document.getElementById("myBar").style.width = scroll + "%";
}