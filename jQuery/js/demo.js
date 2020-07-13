$("button").eq(0).click(function () {
	$("div").eq(0).css("z-index",3);
	$("div").eq(1).css("z-index",2);
	$("div").eq(2).css("z-index",1);
})
$("button").eq(1).click(function () {
	$("div").eq(0).css("z-index",2);
	$("div").eq(1).css("z-index",3);
	$("div").eq(2).css("z-index",1);
})
$("button").eq(2).click(function () {
	$("div").eq(0).css("z-index",1);
	$("div").eq(1).css("z-index",2);
	$("div").eq(2).css("z-index",3);
})