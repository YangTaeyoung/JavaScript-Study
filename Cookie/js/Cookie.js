function setCookie(cname, cvalue, exDays)
{
	var d = new Date();
	// d.setTime(d.getTime()+ (exDays*1000*60*60*24)); // 유효시간 1일
	d.setTime(d.getTime()+ (exDays*1000*60)); // 유효시간 1분
	var expires = "expires = " + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(";");
	
	for(var i = 0; i < ca.length;i++)
	{
		var c = ca[i];
		while(c.charAt(0) == ' ')
		{
			c = c.substring(1);
		}
		if(c.indexOf(name) == 0)
		{
			return c.substring(name.length, c.length);
		}
	}
	return "";
}