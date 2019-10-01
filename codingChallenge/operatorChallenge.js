var myString = "first string";
var mySecondString = "alot";
var myNumber = myString.length + mySecondString.length
console.log (myString.substring (0,2))
console.log (mySecondString.substring (0,2));
var myReverseString = myString.split("").reverse().join("");

console.log(myReverseString);

function isLarger (name1, name2){
    if (name1 > name2){
        document.getElementById("demo1").innerHTML = name1  + "is larger than" +   name2
    }
    else{
        document.getElementById("demo1").innerHTML = name2   + " is larger than  " + "  " + name1
    }
}
isLarger(myString, mySecondString);


document.getElementById("demo2").innerHTML = myReverseString;
document.getElementById("demo3").innerHTML = myNumber;
document.getElementById("demo4").innerHTML = myString.substring(0,2) + " " + mySecondString.substring(0,2);