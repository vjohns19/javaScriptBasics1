function decorate (myPotato){
    //Decoratubg an object
    myPotato.addColor = function(color){
        myPotato.color = color;
        console.log(myPotato.colored);

    };
    myPotato.addType = function(Type){
        myPotato.type = Type;
        console.log(myPotato.type);
    };
    myPotato.addSize = function(size){
        myPotato.size = size;
        console.log(myPotato.size);
    };
    myPotato.highPaidJob = function(){
        myPotato.highPaidJob = false;
        console.log(myPotato.highPaidJob);
    };
    myPotato.superPowers = function(){
        myPotato.superPowers = true;
        console.log(myPotato.superPowers);
    };
    return myPotato;
    }

    var potato1 ={};
    
    decorate(potato1);
    

    potato1.addColor("brown purple gold");
    console.log(potato1.color)
    potato1.addType("red yukon idaho");
    console.log(potato1.type);
    potato1.addSize("miniature large small");
    console.log (potato1.size);
    
