// Easy Question 1 : to find the occurence of a substring in string
function charcount(x,str)
{
	let res =str.match(new RegExp(x, 'g'));
	console.log(res.length);
}
charcount('a','ab ba aa');
charcount('c','Chamber of secrets');