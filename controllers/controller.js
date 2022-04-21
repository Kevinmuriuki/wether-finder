const axios = require("axios");
const { response } = require("../app");
const API_KEY = "341f3a5ad73fcf20c2dee19a9f0b6b90";


exports.homePage = (req, res, next) => {
    res.render('index')

}

exports.getWeather = (req, res, next) => {
    const city = req.body.city;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    
    axios.get(url)
        .then(response => {
            res.render('index', { weather: `it is currently ${response.data.main.temp} in ${response.data.name}` })
            
        })
        .catch(err => {
            console.log(err);
        })
}




exports.aboutPage = (req, res, next) => {
    res.render('about', title)

}