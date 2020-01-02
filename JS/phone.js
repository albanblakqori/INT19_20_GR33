function ndrysho(){
element=document.getElementById("galaxy");
	if(element.src.match("samsung"))
		{
			element.src="images/tel/sams.jpg";
		}
	else if(element.src.match("sams")){
		element.src="images/tel/sam.jpg";
	}
	else{
			element.src="images/tel/samsung.jpg";
		}
}
