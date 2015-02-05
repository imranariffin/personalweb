$(document).ready(function()
{
	$(".navbarbox").mouseenter(function()
		{
			(this).style.backgroundColor="blue";
		}
	);
	$(".navbarbox").mouseleave(function()
		{
			(this).style.backgroundColor="green";
		}
	);
	$("#box1").click(function()
		{
			$(".mainSection").fadeOut(200);
			$("#main1").fadeIn(350);
		}
	);
	$("#box2").click(function()
		{
			$(".mainSection").fadeOut(200);
			$("#main2").fadeIn(350);
		}
	);
	$("#box3").click(function()
		{
			$(".mainSection").fadeOut(200);
			$("#main3").fadeIn(350);
		}
	);
	$("#box4").click(function()
		{
			$(".mainSection").fadeOut(200);
			$("#Projects").fadeIn(350);
		}	
	);
	$("body").mousedown(function()
		{
			if ($(".navbar").mouseenter()!= true && $(".mainSection").mouseenter() != true)
				$(".mainSection").fadeOut(250);
		}
	);
	/*
	$("#wheatherButton").click(function()
		{
			var output = $.ajax(
			{
				url: 'https://community-open-weather-map.p.mashape.com/weather',
				type: 'GET',
				data: {q: $('#wheatherInput').val(), lang='English', callback='test'},
				datatype: 'json',
				success: function (data)
				{
					var out = "<table>";
					for (var i=0; i<data.length; i++)
					{
						out = out+"<tr><td>"+data[i].day_of_week+"</td><td>"+data[i].high_celcius+
						"</td><td>"+data[i].low_celcius+"</td></tr>";
					}
					out=out+"</table>";
					alert(data);
					document.getElementById("wheatherForecast").innerHTML = out;
				},
				error: function(e){alert("Error");},
				beforeSend: function (xhr)
				{
					xhr.setRequestHeader("X-Mashape-Key", "OTrWTrbM5FmshmvBmac7zTvO3ByZp1jiVeAjsnFUghbHFZW2I8");
				}
			});
		}
	);
	*/
});