$(document).ready(function(){
	$("button").click(function(){
		$.post("/examen2/js/demo_post.php",
		{
			parra1:"hola mundo cruel",
			parra2:"madworld"
		},
			function(data, status){
				alert("Data:" +data+ "\nStatus:" + status);

			});
	});

});
