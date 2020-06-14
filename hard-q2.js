
function numInstr(x=[])
{
	let numstr = x.filter(function(y){
										for (var i = 0; i <= 9; i++) 
										{
											if(y.includes(i)||y.includes(i+1))
											{
												return true
											}	
										}
	})
	return console.log('array is :'+numstr)
}

numInstr(['1a','a','2b'])
numInstr(['this is a test case','test1'])