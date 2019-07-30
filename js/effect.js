var i = 1;
        var textBox = document.getElementById("textbox");
        var arrowDown = document.getElementById("arrow-down");
        var arrowDownS = document.getElementById("arrow-down-shade");
	
		/* Fade in/out textbox effect - NOTE: FIX*/
		
		var myopacity = 0;

        function fadeInTransition() {
           if (myopacity<1) {
              myopacity += .05;
             setTimeout(function(){fadeInTransition()},100);
           }
           textBox.style.opacity = myopacity;
        }
        
        function fadeOutTransition() {
           if (myopacity>0) {
              myopacity -= .05;
             setTimeout(function(){fadeOutTransition()},100);
           }
           textBox.style.opacity = myopacity;
        }
        
        function hideTextBox() {
            textBox.style.display = "none";
		    arrowDown.style.display = "none";
	        arrowDownS.style.display = "none";
        }
        
        fadeInTransition();

        
        
        
        
	
	    document.addEventListener('DOMContentLoaded',function(event){
	        
	        

            var dataText = [ "Hey! You over there!", "If you're here, then that means you have nothing to do, right?", "Want to try something out? It won't hurt, I promise!", "Well first of all, who are you?", ""];
    	  
            document.getElementById("textbox").addEventListener("click", advanceDialog);
	  
        
	  
	  function advanceDialog() {
            //document.getElementById("textbox").style.color: "#F00";
            if (arrowDown.style.display == "") {
                indexText += 1;
                StartTextAnimation(indexText);
            }
	    }
        
	  
	  // keeps calling itself until the text is finished
	  function typeWriter(text, i, fnCallback) {
	      arrowDown.style.display = "none";
	      arrowDownS.style.display = "none";
		// check if text isn't finished yet
		if (i < (text.length)) {
		  // add next character to h1
		 textBox.innerHTML = text.substring(0, i+1) +'<span id="caret"></span>'; //for the cursor at end effect

		  // wait for a while and call this function again for next character
		  setTimeout(function() {
			typeWriter(text, i + 1, fnCallback)
		  }, 50);
		}
		// text finished, call callback if there is a callback function
		else if (typeof fnCallback == 'function') {
		  // call callback after timeout
		  arrowDown.style.display="";
	      arrowDownS.style.display = "";
		}
	  }
	  // start a typewriter animation for a text in the dataText array
	   function StartTextAnimation(i) {
		 // check if dataText[i] exists
		if (i < dataText[i].length) {
		  // text exists! start typewriter animation
		 typeWriter(dataText[i], 0, function(){
		   // after callback (and whole text has been animated), start next text
		   StartTextAnimation(i + 1);
		 });
		}
		else if (dataText[i] == "") {
	        fadeOutTransition();
		    setTimeout(hideTextBox, 2000);
		}
	  } //starttextanimation
	  
	  StartTextAnimation(indexText);
	    }); //typeWriter
