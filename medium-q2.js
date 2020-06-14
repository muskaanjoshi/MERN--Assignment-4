
function arr(x=[])
{		
		for (var i=0; i<x.length-1; i++) 
		{
			if(x[i]!== x[i+1])
			{
				return console.log(false)
			}
			else
			{
				return console.log(true)

			}
		}
		
}
arr(['@','@','@','@']);
arr(['abc','aBc','abc']);