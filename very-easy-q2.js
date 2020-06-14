//Very Easy Question 1 : to find whether 1st no. divides 2nd no. evenly
function dividesEvenly(a,b)
{	if(a>=b)
	{
		if (a%b == 0) 
		{
			return console.log('true');
		}
		else
		{
		return console.log('false');
		}
	}
	else
	{
		return console.log('Enter proper number .');
	}
}
dividesEvenly(98,7)
dividesEvenly(85,4)
dividesEvenly(69,138)
