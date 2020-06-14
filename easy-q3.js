// Easy Question 1 : replace all the vowels in a string
function replaceVowel(str)
{
	var res=str.replace(/a/g,1);
	res=res.replace(/e/gi,2);
	res=res.replace(/e/gi,2);
	res=res.replace(/i/gi,3);
	res=res.replace(/o/gi,4);
	res=res.replace(/u/gi,5);
	console.log(res);
}

replaceVowel('aeiou')
replaceVowel('karachi')
replaceVowel('chembur')
replaceVowel('khandbari')