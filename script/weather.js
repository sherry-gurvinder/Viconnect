var apiKey ='g4AScxxWnkqju7tWSD5kCHP9V7VBsOfi';
var weatherURI ='https://dataservice.accuweather.com/currentconditions/v1/';
var cityURI ='https://dataservice.accuweather.com/locations/v1/cities/search';

var h1text = document.querySelector('.head-text');
var label = document.querySelector('.label');
var input = document.querySelector('.change-location');
var card = document.querySelector('.card');
var details =document.querySelector('.details');
var timeimg = document.querySelector('img.time');
var icon = document.querySelector('.icon img');
footer = document.querySelector('footer');

$(document).ready(function(){
	input.addEventListener('submit',(e)=>{

    e.preventDefault()
    var city=input.city.value.trim()
    localStorage.setItem('city',city)
    input.reset()
    input.city.blur()
    updateCityInfo(city);
    footer.classList.remove('footerbottom');
});
	
function updateCityInfo (city)
	{
		$.when(getCityInfo(city)).done(function(cityResponse){
          var cityData = cityResponse[0];
		  
		  $.when(getWeatherInfo(cityData.Key)).done(function(weatherResponse){
		  var weatherData = weatherResponse[0];
		  updateUIPanel(cityData,weatherData);});
		
		});
	}
	
function getCityInfo(city)
	{
        var query= `?apikey=${this.apiKey}&q=${city}`
        return $.get(cityURI+query, function(response){return response;});
    }

function getWeatherInfo(key)
	{
        var query =`${key}?apikey=${this.apiKey}`
        return $.get(weatherURI+query, function(response){return response;});
    }


function updateUIPanel(cityData,weatherData)
	{
      
    console.log(cityData,weatherData);
	details.innerHTML= '<h5 class="my-3">'+cityData.EnglishName+' , '+cityData.Country.EnglishName+'</h5> <div class="my-3">'+weatherData.WeatherText+'</div><div class="display-4 my-4"><span>'+weatherData.Temperature.Metric.Value+'</span><span>&deg;C</span></div>';
	
    // update day/night & icon images
    if(card.classList.contains('d-none'))
    {
        card.classList.remove('d-none')
    }

	var imgIcon= 'img/icons/'+weatherData.WeatherIcon+'.svg';
    
	icon.setAttribute('src',imgIcon)

    var timeSrc
    if(weatherData.IsDayTime)
    {
        updateColor('day')

    }else{
        
        updateColor('night')
    }
	}
	
function updateColor(time){
    window.scrollTo(0,document.body.scrollHeight);
    if(time==='day'){
        timeSrc='img/day.svg';
        timeimg.setAttribute('src', timeSrc);
        document.body.style.backgroundColor = "#e6ecf6";
        
    }
    else{
        timeSrc='img/night.svg';
        timeimg.setAttribute('src', timeSrc);
        document.body.style.backgroundColor = "#0e2432";
       
    }
  
	}
	
});



