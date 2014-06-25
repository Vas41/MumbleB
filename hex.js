function loadhex(hex1){
	var first = false;
	var third = false;
	var last = hex1;
	var next = last.next();
	if(next.length > 0){
		var toplast = last.position().top;
		var topnext = next.position().top;
		while(next.length > 0){
			while(toplast == topnext)
		    {
				if(third)
				{
					next.css("margin-top","-46px");
				};
				   
				last = next;
				next = next.next();
				first = true;
				toplast = last.position().top;
				if(next.length > 0)
				{
					topnext = next.position().top;
				} else break;
			};         
			third = false;			
			if(next.length > 0)
			{
				last = next;
				toplast = last.position().top;
			} else break;
			while(last.position().top == next.position().top)
			{
				if(first)
				{
					next.css("margin-left","104px");
					first = false;
				};
				next.css("margin-top","-46px");
				last = next;
				next = next.next();
				toplast = last.position().top;
				if(next.length > 0)
				{
					topnext = next.position().top;
				} else break;
				third = true;
			};
			if(next.length > 0)
			{
				last = next;
				toplast = last.position().top;
			} else break;
		};
	};
};

	
function cleanhex(hex1){
	var next = hex1;
	
	while(next.length > 0)
	{
		next.css("margin-top","0px");
		next.css("margin-left","0px");
        next = next.next();   
	};
};

function loadhex2(hex2){
	var first = false;
	var third = false;
	var last = hex2;
	var next = last.next();
	if(next.length > 0){
		var toplast = last.position().top;
		var topnext = next.position().top;
		while(next.length > 0){
			while(toplast == topnext)
		    {
				if(third)
				{
					next.css("margin-top","-23px");
				};
				   
				last = next;
				next = next.next();
				first = true;
				toplast = last.position().top;
				if(next.length > 0)
				{
					topnext = next.position().top;
				} else break;
			};         
			third = false;
			if(next.length > 0)
			{
				last = next;
				toplast = last.position().top;
			} else break;
			while(last.position().top == next.position().top)
			{
				if(first)
				{
					next.css("margin-left","52px");
					first = false;
				};
				next.css("margin-top","-23px");
				last = next;
				next = next.next();
				toplast = last.position().top;
				if(next.length > 0)
				{
					topnext = next.position().top;
				} else break;
				third = true;
			};
			if(next.length > 0)
			{
				last = next;
				toplast = last.position().top;
			} else break;
		};
	};
};

	
function cleanhex2(hex2){
	var next = hex2;
	
	while(next.length > 0)
	{
		next.css("margin-top","0px");
		next.css("margin-left","0px");
        next = next.next();   
	};
};