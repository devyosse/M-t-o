let APIKey = '3e2429f7a8bb86b76efd66f8f6bc3f1d';

let x = function (city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric&lang=fr`;

    fetch(url).then((response) =>
        response.json().then(data => {
            document.querySelector('#city').querySelector('p').innerHTML = data.name;
            document.querySelector('#temp').querySelector('p').innerHTML = data.main.temp + "°";
            document.querySelector('#humidity').querySelector('p').innerHTML = data.main.humidity + '%';
            document.querySelector('#wind').querySelector('p').innerHTML = data.wind.speed + "km/h";

        })).catch(err => console.log('Erreur ' + err));

    document.querySelector('form').addEventListener("submit", function (e) {
        e.preventDefault();
        let ville = document.getElementById("inputCity").value;
        x(ville);
    })
}

x('Fourmies');