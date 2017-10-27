// redroom.js

// index.js 
// animating the canvas hopefully
var isShowing

$(document).ready(function() {

    // var isShowing;
    function myHover(){
        $("#lab").show();
        console.log("hovering")
    }   

    window.onload = function() {

    	var body = document.body;
    	console.log(body.offsetHeight)

    	var mainImg = document.getElementById("bigimg");
    	var imgWidth = mainImg.offsetWidth;
    	var imgHeight = mainImg.offsetHeight;

    	var door1topX = 0.375 * imgWidth;
    	var door1topY = 0.298 * imgHeight;
    	var door1width = 0.08583 * imgWidth;
    	var door1height = 0.375 * imgHeight;
    	var door1bottomX = door1topX + door1width;
    	var door1bottomY = door1topY + door1height;

    	var door2tX = .529* imgWidth;
    	var door2tY = .298 * imgHeight;
    	var door2bX = .614 * imgWidth;
    	var door2bY = .672 *imgHeight;

    	console.log(door1topX, door1topY, door1bottomX, door1bottomY)
    	console.log(door1topX + ",")

    	var map = document.getElementById("roommap");
    	var door1 = document.createElement("area")
    	door1.shape = "rect";
    	door1.coords = door1topX + ", " + door1topY+ ", " + door1bottomX+", "+door1bottomY;
    	door1.href = "#";
    	door1.alt = "blue";
    	door1.id = "left-door"
    	map.appendChild(door1);

    	var door2 = document.createElement("area")
    	door2.shape = "rect";
    	door2.coords = door2tX + ", " + door2tY+ ", " + door2bX+", "+door2bY;
    	door2.href = "#";
    	door2.alt = "orange";
    	door2.id = "right-door"
    	map.appendChild(door2);

        var postedSign = document.createElement("area")
        var x1 = .095 * imgWidth;
        var y1 = .535 * imgHeight;
        var x2 = .1375 *imgWidth;
        var y2 = y1;
        var x3 = x2;
        var y3 = .672 *imgHeight;
        var x4 = x1;
        var y4 = y3;
        postedSign.shape = "poly";
        postedSign.coords = x1 + ", " + y1+ ", " + x2+", "+y2 + "," + x3 + ", " + y3+ ", " + x4+", "+y4;
        postedSign.href = "#";
        postedSign.alt = "posted";
        postedSign.id = "posted-sign"
        postedSign.onmouseover = myHover();
        map.appendChild(postedSign);

        var farSign = document.createElement("area")
        var x1 = .7796 * imgWidth;
        var y1 = .539 * imgHeight;
        var x2 = .7697 *imgWidth;
        var y2 = .563 *imgHeight;
        var x3 = .8541 * imgWidth;
        var y3 = .577 *imgHeight;
        var x4 = .85 * imgWidth;
        var y4 = .549 * imgHeight;
        farSign.shape = "poly";
        farSign.coords = x1 + ", " + y1+ ", " + x2+", "+y2 + "," + x3 + ", " + y3+ ", " + x4+", "+y4;
        farSign.href = "#";
        farSign.alt = "far";
        farSign.id = "far-sign"
        map.appendChild(farSign);

        var farSign = document.createElement("area")
        var x1 = .7796 * imgWidth;
        var y1 = .539 * imgHeight;
        var x2 = .7697 *imgWidth;
        var y2 = .563 *imgHeight;
        var x3 = .8541 * imgWidth;
        var y3 = .577 *imgHeight;
        var x4 = .85 * imgWidth;
        var y4 = .549 * imgHeight;
        farSign.shape = "poly";
        farSign.coords = x1 + ", " + y1+ ", " + x2+", "+y2 + "," + x3 + ", " + y3+ ", " + x4+", "+y4;
        farSign.href = "#";
        farSign.alt = "far";
        farSign.id = "far-sign"
        map.appendChild(farSign);

        var closeSign = document.createElement("area")
        var x1 = .8515 * imgWidth;
        var y1 = .5912 * imgHeight;
        var x2 = .9134 *imgWidth;
        var y2 = .5927 *imgHeight;
        var x3 = 1 * imgWidth;
        var y3 = .6115 *imgHeight;
        var x4 = 1 * imgWidth;
        var y4 = .64725 * imgHeight;
        closeSign.shape = "poly";
        closeSign.coords = x1 + ", " + y1+ ", " + x2+", "+y2 + "," + x3 + ", " + y3+ ", " + x4+", "+y4;
        closeSign.href = "#";
        closeSign.alt = "close";
        closeSign.id = "close-sign"
        map.appendChild(closeSign);

    	// $(function(){
    		var textDivs = document.getElementsByClassName("text");
    		var i;
    		for (i = 0; i < textDivs.length ; i++) {
    			// console.log(textDivs[i].style.display);
                textDivs[i].style.display = "none";
    			
            };

    	$("#screen").show();
        isShowing = true;
        var text = document.getElementById("textbox")
        // textbox.style.backgroundColor = "black";
        textbox.style.width = "86%";
        textbox.style.height = "80%";
        // textbox.style.color = "white";
        $("#screentext").typed({
            strings: ["Welcome to the " + color + "Red Room.^300  <br><br> <button onclick=closeScreen() id=closescreen>Click to Close</button>"],
            contentType: 'html',
            typeSpeed:0 
            // 20
            // <br>Feel free to explore at length before choosing a door. Hover over certain objects to view them more closely. These <br>Your <strong>primary</strong> objective is to select the most promising door and proceeed to the next colored room ^300 <br> Any <strong>secondary</strong> questions or gathering of information may assist you in this task, ^200 however some information could be misleading. ^300
        });

           $(".xout").click(function(){
            var texttype = $(this).parent();
            console.log(texttype);
            $(texttype).hide();
            $("#textbox").hide();
            isShowing = false
        })  

    // });

        $("#far-sign").hover(function(){
            console.log("hover")
            if(!isShowing){
                $("#textbox").show();
            $("#lab").show();
            // $("#lab").height("50%");
            isShowing = true;
        }
        })

        $("#close-sign").hover(function(){
            if(!isShowing){
                $("#textbox").show();
            $("#letter").show();
            // $("#lab").height("50%");
            isShowing = true;
        }
        })

        $("#posted-sign").hover(function(){
            if(!isShowing){
                $("#textbox").show();
            $("#sign").show();
            // $("#lab").height("50%");
            isShowing = true;
        }
        })

        $("#door1").hover(function(){
            if(!isShowing){
                
        }
        })

    }



    window.onresize = function(){
    	var mainImg = document.getElementById("bigimg");
    	var imgWidth = mainImg.offsetWidth;
    	var imgHeight = mainImg.offsetHeight;

    	var door1topX = 0.375 * imgWidth;
    	var door1topY = 0.298 * imgHeight;
    	var door1width = 0.08583 * imgWidth;
    	var door1height = 0.375 * imgHeight;
    	var door1bottomX = door1topX + door1width;
    	var door1bottomY = door1topY + door1height;

    	var door2tX = .529* imgWidth;
    	var door2tY = .298 * imgHeight;
    	var door2bX = .614 * imgWidth;
    	var door2bY = .672 *imgHeight;

    	var left = document.getElementById("left-door");
    	var right = document.getElementById("right-door");
    	left.coords = door1topX + ", " + door1topY+ ", " + door1bottomX+", "+door1bottomY;
    	right.coords = door2tX + ", " + door2tY+ ", " + door2bX+", "+door2bY;
    	}



    })

    function closeScreen(){
        console.log("closing")
        $("#screen").hide();
        $("#textbox").hide();
        isShowing = false;

        var mainImg = document.getElementById("bigimg");
        var imgWidth = mainImg.offsetWidth;
        var imgHeight = mainImg.offsetHeight;
        var map = document.getElementById("roommap");

        var left = document.getElementById("left-door");
        left.href = "blueroom.html"

        var right = document.getElementById("right-door");
        right.href = "index.html"     

    }



