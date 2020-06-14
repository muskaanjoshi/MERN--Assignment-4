
function specialReverse(str,x)
{	//if(str.match(new RegExp(x, 'g')))
	
	var res=str.split(' ');
	for (var i = 0; i<res.length; i++) 
	{
		if(res[i][0]==x)
		{
			res[i]=res[i].split('').reverse('').join('');
		}
	}
	return console.log(res.join(' '));
	//var word=res.match(ne(/\b[p]\w/g))
	//var srch=res.indexof(x)
	//var rev=res.reverse();
	//var join=rev.join('')
	//console.log(str.split('').indexof()==x.reverse().join(''))
	console.log(word)
} 
specialReverse('pepper in a pan','p')