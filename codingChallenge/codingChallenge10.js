//Create an app that searches through a paragraph and locates items by keyword and puts them in an array.//

var paragraph = "Etizzle a own yo' dizzle augue fo shizzle mah nizzle fo rizzle, mah home g-dizzle accumsizzle. Rizzle dope daahng dawg. Vivamizzle bizzle dolizzle, viverra vitae, for sure izzle, i'm in the shizzle izzle, crackalackin. Vestibulizzle ante ipsizzle crackalackin izzle faucibus orci luctus izzle i saw went crizzle posuere cubilia Sizzle; Sheezy dolizzle. Integer faucibizzle. Dizzle i'm in the shizzle blandit quizzle. Shizzlin dizzle rutrizzle orci. Sizzle facilisizzle. Tellivizzle bow wow wow nulla, venenatizzle eu, scelerisque cool, blandizzle the bizzle, things.";

var eachWord = paragraph.split(" ");
//This variable breaks the paragraph into single word array
var searchBox = "izzle";
var secondSearch = "dizzle";
// This variable searches for and contains a word in an array
var result = [];

function searchPara (eachWord, searchBox, secondSearch){
    for (var i = 0; i < eachWord.length; i++){
        if (eachWord[i] === searchBox){
            console.log("hey i found it ...i added it to the results array");

            result.push (eachWord[i]);
            console.log(result);
        } 
        else if (eachWord[i] === secondSearch){
            console.log("hey i found it ...i added it to the results array");

            result.push (eachWord[i]);
        
            console.log(result);
        }
       }
}

searchPara (eachWord, searchBox, secondSearch);

//add another condition, else if and add another word   var secondSearch = ????
