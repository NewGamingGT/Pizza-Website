window.location.href = "https://newgaminggt.github.io/Pizza-Website/index2.html";

if (window.innerWidth <= 900 || document.body.clientWidth <= 900)
{
	window.location.href = "https://newgaminggt.github.io/Pizza-Website/index2.html";
}
else
{
	window.location.href = "https://newgaminggt.github.io/Pizza-Website/index.html";
}


document.addEventListener ("onresize",function() {
	if (window.innerWidth <= 900 || document.body.clientWidth <= 900)
	{
		window.location.href = "https://newgaminggt.github.io/Pizza-Website/index2.html";
	}
	else
	{
		window.location.href = "https://newgaminggt.github.io/Pizza-Website/index.html";
	}
});