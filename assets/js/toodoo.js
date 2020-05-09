//check the list (line through the list)
$("ul").on("click","li",function () {
$(this).toggleClass("done");
});
//delete the done item
$("ul").on("click","span",function (event) {
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	})
	//to stop from bubbleing
	event.stopPropagation();
})

//Add  new  list
$("input[type=text").keypress(function (event) {
	if(event.which===13){
	var newText =$(this).val();
	$(this).val("")
-	$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+newText+"</li>")
 	}
 })
$(".fa-plus").click(function () {
	$("input[type=text").fadeToggle();
});