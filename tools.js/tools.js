//拖拽函数
drag = (function() {
  function drag(elem) {
    elem.addEventListener("mousedown",down,false);
    function down(e) {
    var event = e || window.event;
    var X = e.pageX - elem.offsetLeft;
    var Y = e.pageY - elem.offsetTop;
    document.addEventListener("mousemove",move,false);
    function move(e) {
      elem.style.left = e.pageX - X + "px";
      elem.style.top = e.pageY - Y + "px";
    }
    elem.addEventListener("mouseup",up,false);
    function up() {
      document.removeEventListener("mousemove",move,false);
    }
    }
  }
  return function (elem) {
    drag(elem);
  }
}());
//异步加载函数
function loadScript(url,callback) {
  var scsript = document.createElement("script");
  script.type = "text/javascript";
  if(script.readyState) {
    script.onreadyStatechange = function () {
      //IE
      if(script.tradyState =="complete" || script.readyState == "loaded"){
        tools.[callback]();
      }
    }
  }else{
    script.onload =   function () {
      //Safari chrome firefox opera
      tools[callback]();
    }
  }
  script.src = url;
  document.head.appendChild(script);
}