var Bike = function (id, color, model, location) {
    this.id = id;
    this.color = color;
    this.model = model;
    this.location = location;
}

Bike.prototype.toString = function () {
    return 'id: ' + this.id + " | color: " + this.color;
}

Bike.allBikes = [];
Bike.add = function (aBike){
    Bike.allBikes.push(aBike);
};

Bike.findById = function(aBikeId) {
    var aBike = Bike.allBikes.find( x => x.id ==aBikeId);
    if(aBike) {
        return aBike;
    } else {
        throw new Error (`There is no bike with id $(aBikeId)`);
    }
}

Bike.removeById = function(aBikeId) {
    Bike.findById(aBikeId);
    for (var i = 0; i < Bike.allBikes.length; i++) {
        if (Bike.allBikes[i].id == aBikeId) {
            Bike.allBikes.splice(i,1);
            break;
        }
    }
}

var bike1 = new Bike ('id_example','color_example','model_example',[1,2]);

Bike.add(bike1);

module.exports = Bike;