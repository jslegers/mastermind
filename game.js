var preloadFlag = false, diff = 0, position = 0, geheugen = new Array(), allColors = new Array("blue.gif", "green.gif", "yellow.gif", "red.gif", "orange.gif", "purple.gif", "turquoise.gif", "pink.gif", "white.gif", "black.gif", "brown.gif", "grey.gif");

function newImage(arg) {
    if (document.images) {
        rslt = new Image();
        rslt.src = arg;
        return rslt;
    }
}

function changeImages() {
    if (document.images && (preloadFlag == true)) {
        for (var i=0; i<changeImages.arguments.length; i+=2) {
            document[changeImages.arguments[i]].src = changeImages.arguments[i+1];
        }
    }
}

function preloadImages() {
    if (document.images) {
        judge_space = newImage("images/judgespace.gif");
        judge_empty = newImage("images/judgeempty.gif");
        judge_red = newImage("images/judgered.gif");
        judge_white = newImage("images/judgewhite.gif");
        left = newImage("images/left.gif");
        legeknop = newImage("images/legeknop.gif");
        OK = newImage("images/OK.gif");
        OK_pressed = newImage("images/OKpressed.gif");
        placer_left = newImage("images/placerleft.gif");
        placer_right = newImage("images/placerright.gif");
        placer_top = newImage("images/placertop.gif");
        placer_space = newImage("images/placerspace.gif");
        placer_empty = newImage("images/placerempty.gif");
        placer_bottom = newImage("images/placerbottom.gif");
        placer_right = newImage("images/placerright.gif");
        placer_black = newImage("images/placerblack.gif");
        placer_blue = newImage("images/placerblue.gif");
        placer_brown = newImage("images/placerbrown.gif");
        placer_green = newImage("images/placergreen.gif");
        placer_grey = newImage("images/placergrey.gif");
        placer_orange = newImage("images/placerorange.gif");
        placer_pink = newImage("images/placerpink.gif");
        placer_purple = newImage("images/placerpurple.gif");
        placer_red = newImage("images/placerred.gif");
        placer_turquoise = newImage("images/placerturquoise.gif");
        placer_white = newImage("images/placerwhite.gif");
        placer_yellow = newImage("images/placeryellow.gif");
        right = newImage("images/right.gif");
        spacebetween = newImage("images/spacebetween.gif");
        upper_black = newImage("images/upperblack.gif");
        upper_blue = newImage("images/upperblue.gif");
        upper_brown = newImage("images/upperbrown.gif");
        upper_green = newImage("images/uppergreen.gif");
        upper_grey = newImage("images/uppergrey.gif");
        upper_orange = newImage("images/upperorange.gif");
        upper_pink = newImage("images/upperpink.gif");
        upper_purple = newImage("images/upperpurple.gif");
        upper_red = newImage("images/upperred.gif");
        upper_turquoise = newImage("images/upperturquoise.gif");
        upper_white = newImage("images/upperwhite.gif");
        upper_yellow = newImage("images/upperyellow.gif");
        preloadFlag = true;
    }
}

function write(string){
    document.writeln(string);
}

function writeTable() {
    write('<center><TABLE width=539 BORDER=0 CELLPADDING=0 CELLSPACING=0><tr>');
    write('<td colspan=15>');
    write('<img src="images/top_01.gif" width=539 height=76 ALT=""></td>');
    write('<td>');
    write('<img src="images/spacer.gif" width=1 height=76 ALT=""></td>');
    write('</tr>');
    write('<tr>');
    write('<td colspan=5 ROWSPAN=2>');
    write('<img src="images/top_02.gif" width=159 height=136 ALT=""></td>');
    write('<td>');
    write('<img name="upper1"            src="images/topspace.gif" width=27 height=27 ALT=""></td>');
    write('<td>');
    write('<img src="images/topspace.gif" width=34 height=27 ALT=""></td>');
    write('<td>');
    write('<img name="upper2"            src="images/topspace.gif" width=27 height=27 ALT=""></td>');
    write('<td>');
    write('<img src="images/topspace.gif" width=41 height=27 ALT=""></td>');
    write('<td>');
    write('<img name="upper3"            src="images/topspace.gif" width=27 height=27 ALT=""></td>');
    write('<td>');
    write('<img src="images/topspace.gif" width=42 height=27 ALT=""></td>');
    write('<td>');
    write('<img name="upper4"            src="images/topspace.gif" width=27 height=27 ALT=""></td>');
    write('<td colspan=3 ROWSPAN=2>');
    write('<img src="images/top_03.gif" width=155 height=136 ALT=""></td>');
    write('<td>');
    write('<img src="images/spacer.gif" width=1 height=27 ALT=""></td>');
    write('</tr>');
    write('<tr>');
    write('<td colspan=7>');
    write('<img src="images/top_04.gif" width=225 height=109 ALT=""></td>');
    write('<td>');
    write('<img src="images/spacer.gif" width=1 height=109 ALT=""></td>');
    write('</tr>');
    for (i=1;i<13;i++) {
        write('<tr>');
        write('<td ROWSPAN=4>');
        write('<img src="images/left.gif" width=61 height=56 ALT=""></td>');
        write('<td ROWSPAN=2>');
        write('<img name="judge0' + i + '"            src="images/judgeempty.gif" width=28 height=28 ALT=""></td>');
        write('<td ROWSPAN=4>');
        write('<img src="images/judgespace.gif" width=1 height=56 ALT=""></td>');
        write('<td ROWSPAN=2>');
        write('<img name="judge1' + i + '"            src="images/judgeempty.gif" width=28 height=28 ALT=""></td>');
        write('<td colspan=9>');
        write('<img src="images/placertop.gif" width=307 height=14 ALT=""></td>');
        write('<td ROWSPAN=4>');
        write('<img name="knop' + i + '"            onClick="checkPlacer('+i+')" src="images/legeknop.gif" width=57 height=56 ALT=""></td>');
        write('<td ROWSPAN=4>');
        write('<img src="images/right.gif" width=57 height=56 ALT=""></td>');
        write('<td>');
        write('<img src="images/spacer.gif" width=1 height=14 ALT=""></td>');
        write('</tr>');
        write('<tr>');
        write('<td ROWSPAN=3>');
        write('<img src="images/placerleft.gif" width=41 height=42 ALT=""></td>');
        write('<td ROWSPAN=2>');
        write('<img name="placer1' + i + '"            oncontextmenu="launchMenu('+i+', 1);" onClick="nextColor('+i+', 1)" src="images/placerempty.gif" width=27 height=27 ALT=""></td>');
        write('<td ROWSPAN=2>');
        write('<img src="images/placerspace.gif" width=34 height=27 ALT=""></td>');
        write('<td ROWSPAN=2>');
        write('<img name="placer2' + i + '"            oncontextmenu="launchMenu('+i+', 2);" onClick="nextColor('+i+', 2)" src="images/placerempty.gif" width=27 height=27 ALT=""></td>');
        write('<td ROWSPAN=2>');
        write('<img src="images/placerspace.gif" width=41 height=27 ALT=""></td>');
        write('<td ROWSPAN=2>');
        write('<img name="placer3' + i + '"            oncontextmenu="launchMenu('+i+', 3);" onClick="nextColor('+i+', 3)" src="images/placerempty.gif" width=27 height=27 ALT=""></td>');
        write('<td ROWSPAN=2>');
        write('<img src="images/placerspace.gif" width=42 height=27 ALT=""></td>');
        write('<td ROWSPAN=2>');
        write('<img name="placer4' + i + '" oncontextmenu="launchMenu('+i+', 4);" onClick="nextColor('+i+', 4)" src="images/placerempty.gif" width=27 height=27 ALT=""></td>');
        write('<td ROWSPAN=3>');
        write('<img src="images/placerright.gif" width=41 height=42 ALT=""></td>');
        write('<td>');
        write('<img src="images/spacer.gif" width=1 height=14 ALT=""></td>');
        write('</tr>');
        write('<tr>');
        write('<td ROWSPAN=2><img name="judge2' + i + '" src="images/judgeempty.gif" width=28 height=28 ALT=""></td>');
        write('<td ROWSPAN=2>');
        write('<img name="judge3' + i + '" src="images/judgeempty.gif" width=28 height=28 ALT=""></td>');
        write('<td>');
        write('<img src="images/spacer.gif" width=1 height=13 ALT=""></td>');
        write('</tr>');
        write('<tr>');
        write('<td colspan=7>');
        write('<img src="images/placerbottom.gif" width=225 height=15 ALT=""></td>');
        write('<td>');
        write('<img src="images/spacer.gif" width=1 height=15 ALT=""></td>');
        write('</tr>');
        write('<tr>');
        write('<td colspan=15>');
        if (i != 12) {
            write('<img src="images/spacebetween.gif" width=539 height=6 ALT=""></td>');
            write('<td><img src="images/spacer.gif" width=1 height=6 ALT=""></td>');
            write('</tr>');
        }
        else {
            write('<img src="images/bottom.gif" width=539 height=54 ALT=""></td>');
            write('<td><img src="images/spacer.gif" width=1 height=54 ALT=""></td>');
            write('</tr></TABLE></center>');
        }
		
    }
}

function startGame(checkoption) {
    var tellerke = 0;
    if (checkoption) {
        while (! document.theform.difficulty.options[tellerke].selected)
            tellerke++;
        diff = document.theform.difficulty.options[tellerke].value;
    }
    initialize();
    for (i = 1; i < 13; i++) {
        eval("changeImages('knop"+i+"', legeknop.src);");
        for (j = 1; j < 5; j++) {
            eval("changeImages('placer"+j+i+"', placer_empty.src);");
            eval("changeImages('judge"+(j-1)+i+"', judge_empty.src);");
        }
    }
    for (i = 1; i < 5; i++)
        eval("changeImages('upper"+i+"', 'images/topspace.gif');");
    changeImages('knop1', OK.src);
    position = 1;
}

function nextColor(row, column) {
    var tellerke = 0, picsource = stripSource(eval('document.images.placer' + column + row),"placer", 6);
    if (position == row) {
        if (picsource == "empty.gif")
            changeColor(row, column, "blue.src");
        else {
            while (picsource != allColors[tellerke])
                tellerke++;
            if (diff > tellerke+1)
                changeColor(row, column, allColors[tellerke+1].replace("gif", "src"));
            else
                changeColor(row, column, "blue.src");
        }
    }
}

function changeColor(row, column, color) {
    eval("changeImages('placer"+column+row+"', placer_"+color+");");
}

function checkPlacer(row) {
    if (position == row) 
        if ((basicStripSource(eval('document.images.placer1'+row)) != "placerempty.gif") && (basicStripSource(eval('document.images.placer2'+row)) != "placerempty.gif") && (basicStripSource(eval('document.images.placer3'+row)) != "placerempty.gif") && (basicStripSource(eval('document.images.placer4'+row)) != "placerempty.gif"))
            if (gewonnen(row))
                restart("Congratulations!\n Would you like to try again?");
            else
            if (position >= 12)
                restart("You've taken too long!\n Would you like to try again?");
            else {
                eval("changeImages('knop" + row + "', legeknop.src);");
                position++;
                eval("changeImages('knop" + position + "', OK.src);");
            }
        else
            alert("You have to make a full code to continue.");
    else 
        alert("This button can not be used now");
}

function surrender() {
    var stoppen;
    stoppen = window.confirm("Are you sure you want to surrender?");
    if (stoppen)
        restart("Would you like to try again?");
}

function restart(alertstring) {
    var herstart;
    revealupper();
    herstart = window.confirm(alertstring);
    if (herstart)
        startGame(false);
    else
        position = 0;
}

function basicStripSource(source) {
    var newsource = stripSource(source, "placer", 0);
    return newsource;
}

function stripSource(source, searchstring, offset) {
    var newsource = source.src.substring(source.src.lastIndexOf(searchstring) + offset);
    return newsource;
}

function initialize () {
    var temp1, temp2, maxim = 2*diff, doubleColors = new Array();
    for (i = 0; i < 12; i++) {
        doubleColors[2*i] = allColors[i];
        doubleColors[2*i+1] = allColors[i];
    }
    for (i = 0; i < 4; i++) {
        temp1 = Math.round(Math.random()*(maxim-1));
        geheugen[i] = doubleColors[temp1];
        maxim--;
        temp2 = doubleColors[maxim];
        doubleColors[maxim] = doubleColors[temp1];
        doubleColors[temp1] = temp2;
    }
}

function gewonnen (row) {
    var tellerke = 0, counter = 0, check = true, tellerke2, temp, winst = false, temp1 = new Array(), temp2 = new Array();
    for (i = 1; i < 5; i++) {
        temp1[i-1] = geheugen[i-1];
        eval('temp2[i-1] = stripSource(document.images.placer'+i+row +', "placer", 6)');
    }
    while (tellerke < 4-counter) {
        setTimeout("", 250);
        if (temp1[tellerke] == temp2[tellerke]) {
            eval("changeImages('judge"+counter+row+"', judge_red.src);");
            temp = temp1[tellerke];
            temp1[tellerke] = temp1[4-counter-1];
            temp1[4-counter-1] = temp;
            temp = temp2[tellerke];
            temp2[tellerke] = temp2[4-counter-1];
            temp2[4-counter-1] = temp;
            counter++;
        }
        else
            tellerke++;
    }
    if (counter == 4) {
        winst = true;
    }
    tellerke = 0;
    while (tellerke < 4-counter) {
        setTimeout("", 250);
        tellerke2 = 0;
        check = true;
        while ((tellerke2  < 4-counter) && (check)) {
            if (temp1[tellerke] == temp2[tellerke2]) {
                eval("changeImages('judge"+counter+row+"', judge_white.src);");
                temp = temp1[tellerke];
                temp1[tellerke] = temp1[4-counter-1];
                temp1[4-counter-1] = temp;
                temp = temp2[tellerke2];
                temp2[tellerke2] = temp2[4-counter-1];
                temp2[4-counter-1] = temp;
                counter++;
                check = false;
            }
            else
                tellerke2++;
        }
        if (check)
            tellerke++;
    }
    return winst;
}

function revealupper() {
    for (i = 1; i < 5; i++) {
        eval("changeImages('upper"+i+"', 'images/upper"+geheugen[i-1]+"');");
    }
}


