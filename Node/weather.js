var request = require("request");
var url = "http://api.openweathermap.org/data/2.5/weather?q=istanbul,tr&appid=5c1093a6f30891eda04dc3db21ea5e48&units=metric";

module.exports = function (callback) {
    request({
        url: url,
        json: true
    }, function (error, response, body) {

        if (error) {
            callback("Hava durumu alınamadı!!");
        } else {
            callback(body.name + " 'da hava sıcaklığı : " + body.main.temp);
        }

    });
}