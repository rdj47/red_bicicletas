var Bike = require ('../../models/bike');

exports.bike_list = function (req, res) {
    res.json({
        bikes: Bike.allBikes
    });
}

exports.bike_create = function (req, res) {
    var bike = new Bike (req.body.id, req.body.color, req.body.model);
    bike.location = [ req.body.lat, req.body.lng];
    Bike.add(bike);    
    res.status(200).json({
        bike
    });
}

exports.bike_update = function (req, res){
    console.log("req.query.id: ", req.query.id);
    var bike = Bike.findById(req.query.id);
    bike.id = req.body.id;
    bike.color = req.body.color;
    bike.model = req.body.model;
    bike.location = [ req.body.lat, req.body.lng];
    res.status(204).send();
 }

exports.bike_delete = function (req, res) {
    Bike.removeById(req.body.id);
    res.status(204).send();
}