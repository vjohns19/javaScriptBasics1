function decorate (myObject){
    //Decoratubg an object
    myObject.addColor = function(color){
        myObject.color = color;
        console.log(myObject.colored);

    };
    myObject.addSparkles = function(sparkleColor){
        myObject.sparkles = sparkleColor;
        console.log(myObject.sparkles);
    };
    myObject.addBananaSeat = function(){
        myObject.bananaSeat = true;
        console.log(myObject.bananaSeat);
    };
    myObject.removeBananaSeat = function(){
        myObject.bananaSeat = false;
        console.log(myObject.bananaSeat);
    };
    return myObject;
    }

    var girlBike ={};
    var boyBike = {};

    decorate(girlBike);
    decorate(boyBike);

    girlBike.addColor("pink purple blue");
    console.log(girlBike.color)
    girlBike.addSparkles("silver");
    console.log(girlBike.sparkleColor);
    girlBike.addBananaSeat();
    console.log (girlBike.bananaSeat);
    
