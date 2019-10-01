function createImage (name){
    return new Image (name);
}
//Using my factory pattern

var image = createImage ('photo.jpeg);

//Create a more complex factory

function createImage2(name){
    if (name.match(/\.jpeg$/)){
        return new JpegImage(name);
    }
        else if (name.match(/\.gif$/)){
            return new pngImage(name);
        }
        else{
            throw new Exception("Unsupported Format");
        }
    }
    

