// Easy Question 2 : to find sum upto n numbers
function addup(x)
{	if(x>=1 && x<=1000)
	{
		let res= x/2*(x+1)
		console.log(res);
	}
	else
	{
		console.log('invalid number')
	}
}
addup(4)
addup(13)
addup(1001)
