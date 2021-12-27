var search = document.querySelector('.search');
var city = document.querySelector('.city');
var country = document.querySelector('.country');
var city = document.querySelector('.city');
var value = document.querySelector('.value');
var shortDesc = document.querySelector('.short-desc');
var visibility = document.querySelector('.visibility span');
var wind = document.querySelector('.wind span');
var humidity = document.querySelector('.humidity span');
var time = document.querySelector('.time'); 
var content = document.querySelector('.content'); 
var body = document.querySelector('body'); 

async function changeWeatherUI(capitalValue){
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalValue}&appid=218534ae5371055521afab2d617687ef`;
    let data = await fetch(apiURL).then(res => res.json());
    if(data.cod == 200){
        content.classList.remove('hide');
        city.innerText = data.name;
        country.innerText = data.sys.country;
        visibility.innerText = data.visibility + '(m)';
        wind.innerText = data.wind.speed + '(m/s)';
        humidity.innerText = data.main.humidity + '(%)';
        let temp = Math.round((data.main.temp - 273.15));
        value.innerText = temp;
        shortDesc.innerText = data.weather[0] ? data.weather[0].main : ' ';
        time.innerText =  new Date().toLocaleString('vi');
        body.setAttribute('class','hot');
        if(temp <= 25 && temp > 18){
            body.setAttribute('class','cool');
        }
        else if(temp<18){
            body.setAttribute('class','cold');
        }
    }
    else{
        content.classList.add('hide');
        alert('không tìm thấy! Vui lòng tìm một địa điểm khác.');
    }
}
search.addEventListener('keypress', function(e){
   if(e.code === 'Enter'){
        let capitalValue = search.value.trim();        
        changeWeatherUI(capitalValue);
    };
})
changeWeatherUI('Ho Chi Minh');