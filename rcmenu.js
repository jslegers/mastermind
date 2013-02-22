var x=0, y=0,ie5=document.all&&document.getElementById,ns6=document.getElementById&&!document.all,Moz_event=0,menuobj;

function hidemenuie5(e){
	if (menuobj)
		menuobj.style.visibility="hidden"
	x = 0;
	y = 0;
}

function highlightie5(e){
	var firingobj=ie5? event.srcElement : e.target;
	selecteer("#936801","white",firingobj);
}

function lowlightie5(e){
	var firingobj=ie5? event.srcElement : e.target;
	selecteer("","black",firingobj);
}

function selecteer(brcolor,color,firingobj){
	if (firingobj.className=="menuitems"||ns6&&firingobj.parentNode.className=="menuitems"){
		if (ns6&&firingobj.parentNode.className=="menuitems")
			firingobj=firingobj.parentNode;
		firingobj.style.backgroundColor=brcolor;
		firingobj.style.color=color;
	}
}

function showmenuie5(){
	var rightedge=ie5? document.body.clientWidth-event.clientX : window.innerWidth-Moz_event.clientX;
	var bottomedge=ie5? document.body.clientHeight-event.clientY : window.innerHeight-Moz_event.clientY;
	if (rightedge<menuobj.offsetWidth)
		menuobj.style.left=ie5? document.body.scrollLeft+event.clientX-menuobj.offsetWidth : window.pageXOffset+Moz_event.clientX-menuobj.offsetWidth;
	else
		menuobj.style.left=ie5? document.body.scrollLeft+event.clientX : window.pageXOffset+Moz_event.clientX;
	if (bottomedge<menuobj.offsetHeight)
		menuobj.style.top=ie5? document.body.scrollTop+event.clientY-menuobj.offsetHeight : window.pageYOffset+Moz_event.clientY-menuobj.offsetHeight;
	else
		menuobj.style.top=ie5? document.body.scrollTop+event.clientY : window.pageYOffset+Moz_event.clientY;
	menuobj.style.visibility="visible";
}

function launchMenu(row, column){
	if (ie5||ns6)
		if (position == row) {
			eval('menuobj=document.getElementById("ie5menu'+diff+'");');
			x=column;
			y=row;
			menuobj.style.display='';
			if ((ie5)||(Moz_event!=0))
				showmenuie5();
	}
}

function initializeMoz_event(e){
	if ((ns6)&&(Moz_event==0)) {
		Moz_event = e;
		launchMenu(y, x);
	}
	return false;
}

function writemenu(){
	for (i = 4; i < 13; i=i+2) {
		document.writeln('<div id="ie5menu'+i+'" class="Menu" onMouseover="highlightie5(event)" onMouseout="lowlightie5(event)" display:none>');
		document.writeln('<hr>');
		document.writeln('<div class="menuitems" onClick="changeColor(y, x, \'blue.src\');">Blue</div>');
		document.writeln('<div class="menuitems" onClick="changeColor(y, x, \'green.src\');">Green</div>');
		document.writeln('<div class="menuitems" onClick="changeColor(y, x, \'yellow.src\');">Yellow</div>');
		document.writeln('<div class="menuitems" onClick="changeColor(y, x, \'red.src\');">Red</div>');
		if (i > 5) {
			document.writeln('<div class="menuitems" onClick="changeColor(y, x, \'orange.src\');">Orange</div>');
			document.writeln('<div class="menuitems" onClick="changeColor(y, x, \'purple.src\');">Purple</div>');
			if (i > 7) {
				document.writeln('<div class="menuitems" onClick="changeColor(y, x, \'turquoise.src\');">Turquoise</div>');
				document.writeln('<div class="menuitems" onClick="changeColor(y, x, \'pink.src\');">Pink</div>');
				if (i > 9) {
					document.writeln('<div class="menuitems" onClick="changeColor(y, x, \'white.src\');">White</div>');
					document.writeln('<div class="menuitems" onClick="changeColor(y, x, \'black.src\');">Black</div>');
					if (i > 11) {
						document.writeln('<div class="menuitems" onClick="changeColor(y, x, \'brown.src\');">Brown</div>');
						document.writeln('<div class="menuitems" onClick="changeColor(y, x, \'grey.src\');">Grey</div>');
					}
				}
			}
		}
		document.writeln('<hr>');
		document.writeln('</div>');
	}
}

if (ie5||ns6){
	document.onclick=hidemenuie5;
	document.oncontextmenu=initializeMoz_event;
}

