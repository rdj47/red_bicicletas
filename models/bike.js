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

var bike1 = new Bike ('1','orange','traditional',[7.8877441564647315, -72.50754518930361]);
var bike2 = new Bike ('2','blue','profesional',[7.888401009838708, -72.50255963961185]);
var bike3 = new Bike ('3','orange','traditional',[7.8848621532210155, -72.5008725555759]);
var bike4 = new Bike ('4','blue','traditional',[7.885119969973831, -72.50685431972403]);

Bike.add(bike1);
Bike.add(bike2);
Bike.add(bike3);
Bike.add(bike4);

module.exports = Bike;