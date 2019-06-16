import React from 'react'

function Greet(){
	var i;
	let arra=[]
	for(var i=1;i<=5;i++){
		for(var j=1;j<=i;j++){
			arra.push("* ");
		}
		arra.push(<br/>);
	}
	//return React.createElement('div',null,React.createElement('h1',null,arra))
	return (
			<div>
			<input class="form-control" type="number"/>
			<h1>{arra}</h1>
			</div>
		)
	
}

export default Greet