var apiKey ='jCLPUDFqHDZV7369qCF3gfHGutmpcVKG';
var weatherURI ='https://dataservice.accuweather.com/currentconditions/v1/';
var cityURI ='https://dataservice.accuweather.com/locations/v1/cities/search';

var h1text = document.querySelector('.head-text');
var label = document.querySelector('.label');
var input = document.querySelector('.change-location');
var card = document.querySelector('.card');
var details =document.querySelector('.details');
var timeimg = document.querySelector('img.time');
var icon = document.querySelector('.icon img');


$(document).ready(function(){
	input.addEventListener('submit',(e)=>{

    e.preventDefault()
    var city=input.city.value.trim()
    localStorage.setItem('city',city)
    input.reset()
    input.city.blur()
	
	updateCityInfo(city);
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
        if(h1text.classList.contains('text-light'))
        {
            console.log('day-here')
            h1text.classList.remove('text-light');
            details.classList.remove('text-light');
            h1text.classList.add('text-dark');
            details.classList.add('text-muted');
            card.style.backgroundColor= "white";
        }
        else
        {
            console.log('day-not here');
        }
    }
    else{
        timeSrc='img/night.svg';
        timeimg.setAttribute('src', timeSrc);
        document.body.style.backgroundColor = "#0e2432";
        if(h1text.classList.contains('text-dark'))
        {
            console.log('night-here');
            h1text.classList.remove('text-dark');
            details.classList.remove('text-muted');
            h1text.classList.add('text-light');
            details.classList.add('text-light');
            card.style.backgroundColor= "#081d27";
        }
        else{
            console.log('night-not here');
        }
    }
	}
	
});



