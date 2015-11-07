//MyWidget Script
/**************************
Add a link for a CSS file that styles .mywidget
Add a script tag that points to CDN version of jQuery 1.*
Add a script tag that loads your script file from http://m.edumedia.ca/
**************************/
var scriptsLoaded = 0;
var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; 
var today = new Date();

document.addEventListener("DOMContentLoaded", function(){
  
  var css = document.createElement("link");
  css.setAttribute("rel", "stylesheet");
  css.setAttribute("href", "widget.css");	
  //loads the CSS file and applies it to the page
  css.addEventListener("load", loadCount);
  document.querySelector("head").appendChild(css);

  var jq = document.createElement("script");
  jq.addEventListener("load", loadCount);
 jq.setAttribute("src","https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js");
  document.querySelector("head").appendChild(jq);

 
});

function buildWidget(container){
	$.ajax({
url:'https://api.forecast.io/forecast/12a84e049ca027bfb6e57f97be5e2a65/45.348391,-75.757045',
	method:'GET',
	dataType:'jsonp'
	
    })
        .done(function(weather){
                  currentWeather(weather.container) 
                  hourlyWeather(weather.hourly)
		          console.log(weather)
	       })
                .fail(function(fail){
		                  console.log(fail)
	                   });
	
};

function loadCount(){
  scriptsLoaded++;
    
    if(scriptsLoaded === 2){
      buildWidget(".mywidget");
      console.log("both scripts loaded");
    }
};

function currentWeather (current){
    var today = new Date ();
    var container = $(".weather-forecast");
    
    $("weather-forecast").append("<h2>");
    $("weather-forecast h2").append(
        "<h2>" + "The Current Weather Conditions for today," + today.getDate() + "the Month of" + (parseInt(today.getMonth() + 1)) + "</h2>", "It is" + current.summary + "and the tempature is" + current.temperature + "°C" + "." + "</h2>"
      );
    
        $("<i>").addClass("wi").addClass("wi-forecast-io-" +  
        current.icon).addClass("current").appendTo(currently)
};

function hourlyWeather(hourly){                 
    for (var a = 0; a < hourly.data.length; a++){
            var time = new Date(hourlyData.time * 1000);
            if (time.getDate() === today.getDate()){   
                    $("tr:last").append ( 
                            "<td>" + time.getHours() + ":00" + "</td>",
                            "<td>" + hourlyData[a].humidity.toString().split(".")[1] + "%</td>",
                            "<td>" + hourlyData[a].cloudCover.toString().split(".")[1]+"%</td>",
                            "<td>" + hourlyData[a].temperature + "°C" + "</td>",
                            "<td>" + hourlyData[a].windSpeed + "km/h" + "</td>",
                            "<td>" + hourlyData[a].summary + "</td>"
                );
                 
                            $("<td>").html($("<a>").addClass("wi").addClass("wi-forecast-io-" + hourlyData.icon)).appendTo(hourNode);
                   
                }
    containerNode.appendTo($(".weather-forecast"))
        }
};