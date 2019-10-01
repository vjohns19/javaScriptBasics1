function Shop(){
    this. construct = function(builder){
        builder.step1();
        builder.step2();
        return builder.get();
    };
}

function CarBuilder(){
    this.car = null
    this.step1 =function(){
        this.car = new Car();
    };

    this.setp2 = function(){
        this.car.addParts();
    };

    this.get = function(){
        return this.car:
    };
}

function truckBuilder(){
    this.truck = null;
    this.step1 = function(){
        this.truck = new Truck();
    };
    this.step2 = function(){
        this.truck.addParts();
    };
    this.get = function(){
        return this.truck();
    };
}
function Car(){
    this.doors = 0;
    this.addParts = function(){
        this.doors = 4
    };
    this.say = function(){
        console.log("Im a " + this.doors +"-door Car" );
    };
}

function Truck(){
    this.doors = 0;
    this.addParts = function(){
        this.doors = 4;
    };
    this.say = function(){
        console.log("YOU dont get a car but you have a " + this.doors + "-door Truck");
    };
}
//Helper

function run(){
    var shop = new Shop();
    var Carbuilder = carBuilder();
    var TruckBuilder = truckBuilder();
    var car = shop.construct(CarBuilder);
    var truck = shop.construct(TruckBuilder);
    car.say();
    truck.say();
}
run();   