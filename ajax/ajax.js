//ajax
//1.浏览器
//2.ajax对象
//3.ajax.open(method,url,true);
//4.ajax.send();
//5.onnreadystatechange 监听数据发送 1 2 3 4(发送成功)
//status == 200(返回成功) 404 503
var oBtn = document.getElementsByClassName("btn")[0];
var ul = document.getElementById("ul");
oBtn.onclick = function () {
	ajaxFunc("GET","./getNews.php","",showList,true);
}
function ajaxFunc(method,url,data,callback,flag){
    var xhr = null;
    if(window.XMLHttpRequest) {
    	xhr = new XMLHttpRequest();
    }else {
    	xhr = new ActiveXObject("Microsoft.XMLHttp");     
    }
    if(method == "GET") {
        xhr.open(method,url + "?",flag);
        xhr.send();
    }else if(method == "post") {
    	xhr.open(method,url,flag)
    	xhr.setRequestHeader("content type","application/x-www-form-urlencoded");
        xhr.send(data);
    }
    xhr.onreadystatechange = function () {
    	if(xhr.readyState == 4) {
    		if(xhr.status == 200) {
    			callback(xhr.responseText);
    		}
    	}
    }
}
function showList(data) {
    var value = JSON.parse(data);
    console.log(value);
    var str = "";
    value.forEach(function (ele,index){
    	str += "<li>" + ele.title + "-" + ele.date + "</li>";
    })
    ul.innerHTML = str;
}
function showPerson(data) {
	alert(data);
}
