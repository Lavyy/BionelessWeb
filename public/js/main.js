module.exports = {

	marcher: function(mouv){
		
		const puppeteer = require('puppeteer');

		(async () => {
		    const browser = await puppeteer.launch();


		    page = await browser.newPage();
		    await page.goto('http://localhost:3000/main.html', {waitUntil: 'load'});


		    const newPage = await page.evaluate(() => {

		        var title  = document.getElementById("title").innerHTML;
		        //title.innerHTML = "<p>"+mouv+"</p>";
		        console.log(title);

		    });

		     

  })();
}
  	
  
	/*marcher: function(){ 
		const jsdom = require("jsdom");
	  	const { JSDOM } = jsdom;
	  	global.document = new JSDOM(html).window.document;

		  var walking = false; 
		  var stepNum = 1; 
		  var stepTimeout; 
		  var divWindow = document.getElementById("anim");
		  var divPosition = 0;
		  var y = 700; 
		  var direction = 1; 
		  var speed = 5; 
		  var slider = 0;



	    slider = 5;
	    walking = (!walking) ? true : false; 
	    if(walking){ 
	      step();  
	    } 
	    else{
	      clearTimeout(stepTimeout); 
	    }
  },

  step: function(){
      divWindow.css("background-position", (-75 * stepNum) + "px"); 
      speed = slider; 
      divPosition = divPosition + (direction * speed);
      divWindow.css("left", divPosition + "px"); 
      stepNum = (stepNum + 1) % 8; 
      stepTimeout = setTimeout(step, 750/speed);
  }*/
};