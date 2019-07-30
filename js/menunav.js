	/* Menu navigation */
	
	    var page1 = document.getElementById("page1");
	    var page2 = document.getElementById("page2");
	    var page3 = document.getElementById("page3");
	    var page4 = document.getElementById("page4");
	    
	    /* wont work :/
	    function checkDisplay() {
	        if (page1.style.display = "none" && page2.style.display = "none") {
	            page1.style.display = "block";
	        }
	    } */
	
        function pageOneClick() {
           if (page1.style.display = "block") {
              page1.style.display = "block";
              page2.style.display = "none";
              page3.style.display = "none";
              page4.style.display = "none";
           }
           //checkDisplay();
        }
        
        function pageTwoClick() {
           if (page2.style.display = "none") {
              page2.style.display = "block";
              page1.style.display = "none";
              page3.style.display = "none";
              page4.style.display = "none";
           }
        }
        
        function pageThreeClick() {
           if (page3.style.display = "none") {
              page3.style.display = "block";
              page1.style.display = "none";
              page2.style.display = "none";
              page4.style.display = "none";
           }
        }
        
        function pageFourClick() {
           if (page4.style.display = "none") {
              page4.style.display = "block";
              page1.style.display = "none";
              page2.style.display = "none";
              page3.style.display = "none";
           }
        }
        
	    document.getElementById("item1").addEventListener("click", pageOneClick);
	    document.getElementById("item2").addEventListener("click", pageTwoClick);
	    document.getElementById("item3").addEventListener("click", pageThreeClick);
	    document.getElementById("item4").addEventListener("click", pageFourClick);
