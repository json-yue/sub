var logo = document.getElementsByClassName("logo");
var page = document.getElementsByClassName("page")[0];
var left = document.getElementsByClassName("left")[0];
var mrxh = document.getElementsByClassName("mrxh")[0];
var btn = document.getElementsByClassName("btn")[0];
init();
function init() {
   setTimeout(a,2000);
   setTimeout(b,4000);
   setTimeout(c,6000);
   setTimeout(d,8000);
}
function a() {
   logo[0].style.height = "120px";
   logo[0].style.transform = "translateY(-120px)";   
}
function b() {
   logo[1].style.height = "120px";
   logo[1].style.transform = "translateY(-120px)";
}
function c() {
   logo[2].style.height = "120px";
   logo[2].style.transform = "translateY(-120px)";
}
function d() {
   logo[3].style.height = "120px";
   logo[3].style.transform = "translateY(-120px)";
}
page.addEventListener("click",function () {
    page.classList.add("open");
    setTimeout(function () {
      left.classList.add("open");
    },500);
    mrxh.style.transform = "translateX(300px)";
});
btn.addEventListener("click",function () {
    page.classList.remove("open");
    setTimeout(function () {
      left.classList.remove("open");
    },500);
    mrxh.style.transform = "translateX(0px)";
})