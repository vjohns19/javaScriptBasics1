function first2 (string){
    if (string.length % 2 === 0){

        var firstTwo = string.substring(0, 2);

        console.log (firstTwo);
    }
}

first2 ("HelloWorld");
first2 ("naughty")