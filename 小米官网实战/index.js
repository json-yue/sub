var count = 0;
var btn1 = document.getElementById("btn1");
var banner = document.getElementById("banner");
var shopCar1 = document.getElementsByClassName("shopCar1")[0];
var shopCar = document.getElementsByClassName("shopCar")[0];
var bar = document.getElementsByClassName("bar");
var newBar = document.getElementsByClassName("newBar");
var other = document.getElementsByClassName("other");
var rightImg1 = document.getElementsByClassName("rightImg1")[0];
var rightImg2 = document.getElementsByClassName("rightImg2")[0];
var rightImg3 = document.getElementsByClassName("rightImg3")[0];
var rightImg4 = document.getElementsByClassName("rightImg4")[0];
var scroll = document.createElement("div");
banner.appendChild(scroll).classList.add("scroll");
var scroll1 = document.createElement("img");
var scroll2 = document.createElement("img");
var scroll3 = document.createElement("img");
var scroll4 = document.createElement("img");
var scroll5 = document.createElement("img");
var rightBtn = document.createElement("div");
var leftBtn = document.createElement("div");
var leftImg = document.createElement("img");
var rightImg = document.createElement("img");
scroll.appendChild(scroll1).classList.add("scroll1");
scroll.appendChild(scroll2).classList.add("scroll2");
scroll.appendChild(scroll3).classList.add("scroll3");
scroll.appendChild(scroll4).classList.add("scroll4");
scroll.appendChild(scroll5).classList.add("scroll5");
scroll.appendChild(rightBtn).classList.add("rightBtn");
scroll.appendChild(leftBtn).classList.add("leftBtn");
rightBtn.appendChild(rightImg).classList.add("rightImg");
leftBtn.appendChild(leftImg).classList.add("leftImg");
scroll1.src = "./image/scroll1.jpg";
scroll2.src = "./image/scroll2.jpg";
scroll3.src = "./image/scroll3.jpg";
scroll4.src = "./image/scroll4.jpg";
scroll5.src = "./image/scroll5.jpg";
rightImg.src = "./image/right.png";
leftImg.src = "./image/left.png";
shopCar1.onmouseover = function () {
    shopCar.style.transform = "translateY(0)";
    shopCar.style.transition = "0.3s";
}
shopCar1.onmouseout = function () {
    t = setTimeout(init, 500);
}
function init() {
    shopCar.style.transform = "translateY(-100px)";
    shopCar.style.transition = "0.3s";
    clearTimeout(t);
}
t = setInterval(counted, 3000);
counter();
rightBtn.onclick = function () {
    count -= 1226;
    scroll1.style.marginLeft = count + "px";
    scroll1.style.transitionDelay = "0.2s";
    if (count < -4904) {
        count = 0;
        scroll1.style.marginLeft = count + "px";
    }
    counter();
    clearInterval(t);
    t = setInterval(counted, 3000);
    return count;
}
leftBtn.onclick = function () {
    count += 1226;
    scroll1.style.marginLeft = count + "px";
    if (count > 0) {
        count = -4904;
        scroll1.style.marginLeft = count + "px";
    }
    counter();
    clearInterval(t);
    t = setInterval(counted, 3000);
}
btn1.onclick = function () {
    count = -4904;
    counter();
    clearInterval(t);
    t = setInterval(counted, 3000);
}
btn2.onclick = function () {
    count = -3678;
    counter();
    clearInterval(t);
    t = setInterval(counted, 3000);
}
btn3.onclick = function () {
    count = -2452;
    counter();
    clearInterval(t);
    t = setInterval(counted, 3000);
}
btn4.onclick = function () {
    count = -1226;
    counter();
    clearInterval(t);
    t = setInterval(counted, 3000);
}
btn5.onclick = function () {
    count = 0;
    counter();
    clearInterval(t);
    t = setInterval(counted, 3000);
}
function counter() {
    switch (count) {
        case 0:
            scroll1.style.marginLeft = count + "px";
            btn5.style.backgroundColor = "#fff";
            btn4.style.backgroundColor = "#000";
            btn3.style.backgroundColor = "#000";
            btn2.style.backgroundColor = "#000";
            btn1.style.backgroundColor = "#000";
            break;
        case -1226:
            scroll1.style.marginLeft = count + "px";
            btn5.style.backgroundColor = "#000";
            btn4.style.backgroundColor = "#fff";
            btn3.style.backgroundColor = "#000";
            btn2.style.backgroundColor = "#000";
            btn1.style.backgroundColor = "#000";
            break;
        case -2452:
            scroll1.style.marginLeft = count + "px";
            btn5.style.backgroundColor = "#000";
            btn4.style.backgroundColor = "#000";
            btn3.style.backgroundColor = "#fff";
            btn2.style.backgroundColor = "#000";
            btn1.style.backgroundColor = "#000";
            break;
        case -3678:
            scroll1.style.marginLeft = count + "px";
            btn5.style.backgroundColor = "#000";
            btn4.style.backgroundColor = "#000";
            btn3.style.backgroundColor = "#000";
            btn2.style.backgroundColor = "#fff";
            btn1.style.backgroundColor = "#000";
            break;
        case -4904:
            scroll1.style.marginLeft = count + "px";
            btn5.style.backgroundColor = "#000";
            btn4.style.backgroundColor = "#000";
            btn3.style.backgroundColor = "#000";
            btn2.style.backgroundColor = "#000";
            btn1.style.backgroundColor = "#fff";
            break;
    }
}
function counted() {
    count -= 1226;
    if (count < -4904) {
        count = 0;
    }
    counter();
}
// bar[0].onmouseover = function () {
//     newBar[0].style.transform = "translateY(0)";
//     newBar[0].style.transition = "0.3s";
// }
// bar[0].onmouseout = function () {
//     Bar0 = setTimeout(bar0, 300);
// }
// function bar0() {
//     newBar[0].style.transform = "translateY(-230px)";
//     newBar[0].style.transition = "0.3s";
//     clearTimeout(Bar0);
// }
// bar[1].onmouseover = function () {
//     newBar[1].style.transform = "translateY(0)";
//     newBar[1].style.transition = "0.3s";
// }
// bar[1].onmouseout = function () {
//     Bar1 = setTimeout(bar1, 300);
// }
// function bar1() {
//     newBar[1].style.transform = "translateY(-230px)";
//     newBar[1].style.transition = "0.3s";
//     clearTimeout(Bar1);
// }
// bar[2].onmouseover = function () {
//     newBar[2].style.transform = "translateY(0)";
//     newBar[2].style.transition = "0.3s";
// }
// bar[2].onmouseout = function () {
//     Bar2 = setTimeout(bar2, 300);
// }
// function bar2() {
//     newBar[2].style.transform = "translateY(-230px)";
//     newBar[2].style.transition = "0.3s";
//     clearTimeout(Bar2);
// }
// bar[3].onmouseover = function () {
//     newBar[3].style.transform = "translateY(0)";
//     newBar[3].style.transition = "0.3s";
// }
// bar[3].onmouseout = function () {
//     Bar3 = setTimeout(bar3, 300);
// }
// function bar3() {
//     newBar[3].style.transform = "translateY(-230px)";
//     newBar[3].style.transition = "0.3s";
//     clearTimeout(Bar3);
// }
// bar[4].onmouseover = function () {
//     newBar[4].style.transform = "translateY(0)";
//     newBar[4].style.transition = "0.3s";
// }
// bar[4].onmouseout = function () {
//     Bar4 = setTimeout(bar4, 300);
// }
// function bar4() {
//     newBar[4].style.transform = "translateY(-230px)";
//     newBar[4].style.transition = "0.3s";
//     clearTimeout(Bar4);
// }
// bar[5].onmouseover = function () {
//     newBar[5].style.transform = "translateY(0)";
//     newBar[5].style.transition = "0.3s";
// }
// bar[5].onmouseout = function () {
//     Bar5 = setTimeout(bar5, 300);
// }
// function bar5() {
//     newBar[5].style.transform = "translateY(-230px)";
//     newBar[5].style.transition = "0.3s";
//     clearTimeout(Bar5);
// }
// bar[6].onmouseover = function () {
//     newBar[6].style.transform = "translateY(0)";
//     newBar[6].style.transition = "0.3s";
// }
// bar[6].onmouseout = function () {
//     Bar6 = setTimeout(bar6, 300);
// }
// function bar6() {
//     newBar[6].style.transform = "translateY(-230px)";
//     newBar[6].style.transition = "0.3s";
//     clearTimeout(Bar6);
// }
// bar[7].onmouseover = function () {
//     newBar[7].style.transform = "translateY(0)";
//     newBar[7].style.transition = "0.3s";
// }
// bar[7].onmouseout = function () {
//     Bar7 = setTimeout(bar7, 300);
// }
// function bar7() {
//     newBar[7].style.transform = "translateY(-230px)";
//     newBar[7].style.transition = "0.3s";
//     clearTimeout(Bar7);
// }
other[0].onmouseover = function () {
    other[0].style.color = "#f40";
    other[0].style.textDecoration = "underline";
    other[1].style.color = "#000";
    other[1].style.textDecoration = "none";
    other[2].style.color = "#000";
    other[2].style.textDecoration = "none";
    other[3].style.color = "#000";
    other[3].style.textDecoration = "none";
    rightImg1.style.display = "block";
    rightImg2.style.display = "none";
    rightImg3.style.display = "none";
    rightImg4.style.display = "none";

}
other[1].onmouseover = function () {
    other[1].style.color = "#f40";
    other[1].style.textDecoration = "underline";
    other[0].style.color = "#000";
    other[0].style.textDecoration = "none";
    other[2].style.color = "#000";
    other[2].style.textDecoration = "none";
    other[3].style.color = "#000";
    other[3].style.textDecoration = "none";
    rightImg1.style.display = "none";
    rightImg2.style.display = "block";
    rightImg3.style.display = "none";
    rightImg4.style.display = "none";

}
other[2].onmouseover = function () {
    other[2].style.color = "#f40";
    other[2].style.textDecoration = "underline";
    other[1].style.color = "#000";
    other[1].style.textDecoration = "none";
    other[0].style.color = "#000";
    other[0].style.textDecoration = "none";
    other[3].style.color = "#000";
    other[3].style.textDecoration = "none";
    rightImg1.style.display = "none";
    rightImg2.style.display = "none";
    rightImg3.style.display = "block";
    rightImg4.style.display = "none";

}
other[3].onmouseover = function () {
    other[3].style.color = "#f40";
    other[3].style.textDecoration = "underline";
    other[1].style.color = "#000";
    other[1].style.textDecoration = "none";
    other[2].style.color = "#000";
    other[2].style.textDecoration = "none";
    other[0].style.color = "#000";
    other[0].style.textDecoration = "none";
    rightImg1.style.display = "none";
    rightImg2.style.display = "none";
    rightImg3.style.display = "none";
    rightImg4.style.display = "block";

}
