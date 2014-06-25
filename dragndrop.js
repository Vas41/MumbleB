var dragSrcEl = null;

function allowDrop(ev)
{
ev.preventDefault();
};

function drag(ev)
{
//$("div.container2").animate({right:'0px'});
//$("div.container2 button").text("Hide");
ev.dataTransfer.setData("Text",ev.target.id);
dragSrcEl = this;
};

function drop(ev)
{
ev.preventDefault();
var data = ev.dataTransfer.getData("Text");
    var el = ev.target;
    if (el.className != "dragzone" && el.className != "container") {
        el = el.parentNode;
    };
	if (el.className == "dragzone")
	{
		document.getElementById(data).className = "hex2";
	} else if (el.className =="container")
	{
		document.getElementById(data).className = "hex";
	};
    el.appendChild(document.getElementById(data));

cleanhex2($("div.dragzone div:first-child"));
loadhex2($("div.dragzone div:first-child"));

cleanhex($("div.container div:first-child"));
loadhex($("div.container div:first-child"));
};