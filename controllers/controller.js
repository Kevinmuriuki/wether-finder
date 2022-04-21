const title = { title: 'Weather Finder' };

exports.homePage = (req, res, next) => {
    res.render('index', title)

}

exports.getWeather = (req, res, next) => {
    res.send(`You typed ${req.body.city}`);
}




exports.aboutPage = (req, res, next) => {
    res.render('about', title)

}