var page = document.getElementsByClassName("page")[0];
var left = document.getElementsByClassName("left")[0];
var btn = document.getElementsByClassName("btn")[0];
page.addEventListener("click",function () {
    page.classList.add("open");
    setTimeout(function () {
    	left.classList.add("open");
    },350);
});
btn.addEventListener("click",function () {
    page.classList.remove("open");
    setTimeout(function () {
    	left.classList.remove("open");
    },350);
})