
	    var love = 0;
	    
	    var flag_0001 = 0;
	    
	    
	    
	    var loveBar = document.getElementById('love-bar');
	    
	    var generatorsButton = document.getElementById('generatorsButton');
	    
	    
	    
	    var indexText = 0; /* var 'i' in the functions */
	    
	    
	    
	    function makeLove(num) {
	        if (num == 1) {
	            love += 1 * level;
	        }
	        else {
	            love += num;
	        }
	        document.getElementById("love_count").innerHTML = love.toFixed(1);
	    }
	    
	    var generators = 0;
	    
	    var generatorCost;
	    
	    function computeGeneratorCost() {
	        generatorCost = Math.floor(10 * Math.pow(1.1, generators));
	    }
	    
	    computeGeneratorCost();
	    
	    var level = 1;
	    var levelUpLove = 100;
	    
	    function computeLevelUpLove() {
	        levelUpLove = Math.floor (100 * Math.pow (1.5, level));
	    }
	    
	    function updateLevel() {
	        document.getElementById('level').innerHTML = level;
	    }
	    
	    function buygenerator() {
	        var generatorCost = Math.floor(10 * Math.pow(1.1,generators));
	        if(love >= generatorCost) {
	            generators += 1;
	            love -= generatorCost;
	            document.getElementById('generators').innerHTML = generators;
	            document.getElementById('love_count').innerHTML = love.toFixed(1);
	        }
	        var nextCost = Math.floor(10 * Math.pow(1.1,generators));
	        document.getElementById('generatorCost').innerHTML = nextCost;
	    }
	    
	    function updateLoveBar(love) {
	        var widthStr = (love * 100 / levelUpLove) + "%";
	        loveBar.style.width = widthStr;
	        if (love >= levelUpLove) {
	            love -= levelUpLove;
	            level += 1;
	            updateLevel();
	            computeLevelUpLove();
	        }
	    }
	    
	    function checkBuyable() {
	        computeGeneratorCost();
	        if (love >= generatorCost) {
	            generatorsButton.disabled = false;
	        }
	        else if (love < generatorCost) {
	            generatorsButton.disabled = true;
	        }
	        
	    }
	    
	    
	    
        
        
        function save() {
            var savefile = {
                love: love,
                generators: generators,
                level: level,
                indexText: indexText,
                flag_0001: flag_0001};
            localStorage.setItem("savefile",JSON.stringify(savefile));
            //ga('send', 'event', 'My Game', 'Save');
        }
	    
	    window.setInterval(function(){
            makeLove(generators*0.05);
            updateLoveBar(love);
            checkBuyable();
            document.getElementById('toNextLvl').innerHTML = (levelUpLove - love).toFixed(1);
        }, 100);
        
        window.setInterval(function(){
            save();
            console.log("Autosaved!");
        }, 30000); /* 60000 = 60s = 1 min */
        
        
        
        
        function load() {
            var savegame = JSON.parse(localStorage.getItem("savefile"));
            if (typeof savegame.love !== "undefined") love = savegame.love;
            if (typeof savegame.generators !== "undefined") generators = savegame.generators;
            if (typeof savegame.level !== "undefined") level = savegame.level;
            if (typeof savegame.indexText !== "undefined") indexText = savegame.indexText;
            if (typeof savegame.flag_0001 !== "undefined") flag_0001 = savegame.flag_0001;
            
            computeGeneratorCost();
            document.getElementById('generators').innerHTML = generators;
            document.getElementById('generatorCost').innerHTML = generatorCost;
            computeLevelUpLove();
            updateLevel();
        }
        
        load();
