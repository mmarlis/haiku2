$(document).ready(function(){
    $("button#add").on("click", addWord);
    $("button#generate").on("click", generateHaiku);
});


//create array with predetermined words
let syllables = [
    [],
    ["key", "heart", "love", "love"],
    ["purple", "cactus", "pizza", "princess"],
    ["banana", "animal", "piano", "magenta"],
    ["America", "unexpected", "disinfectant", "intermittent"],
    ["personality", "geometrical", "abominable", "unidentical"],
    ["capitalization", "responsibility", "personification", "individualize"],
    ["inapplicability", "contemporaneously","individualistic", "unconformability"]
];

 //function for user to enter words
function addWord() {

    let userInput = $("input#word").val();
    let word = "";
  
    let numDash = 1;
    //count the number of dashes 
    for (let i = 0; i < userInput.length; i++) {

        //characters in added word in userInput
        // let characters (char) be defined by dashes
        let char = userInput[i];
        if (char === "-") {
            numDash++
        } else{
            word += char;
            //if number of dashes is greater than 7 = "word has too many syllables"
        } if (numDash > 7) {
            $("p#warning").text(`Word can't have more than 7 syllables`);
        }

    }
    syllables[numDash][syllables[numDash].length] = word;
}

function syllableLineFive() {
    let line = "";
    let allSyllables = 0;
    while(allSyllables < 5){
        let randWord = Math.floor(Math.random()*5)+1;
        if(randWord + allSyllables > 5){

        }else{
            allSyllables += randWord;
            let innerArrayLength = syllables[randWord].length - 1;
            let randInner = Math.floor(Math.random()*innerArrayLength)+1;
            line += syllables[randWord][randInner] + " ";
        }
    }
    return line;
}
function syllableLineSeven(){
    let line = "";
    let allSyllables = 0;    
    while(allSyllables < 7){
        let randWord = Math.floor(Math.random()*7)+1;
        if(randWord + allSyllables > 7){

        }else{
            allSyllables += randWord;
            let innerArrayLength = syllables[randWord].length - 1;
            let randInner = Math.floor(Math.random()*innerArrayLength)+1;
            line += syllables[randWord][randInner] + " ";
        }
    }
    return line;
}
//Function that generates Haiku
function generateHaiku(){
    let lineOne = syllableLineFive();
    let lineTwo = syllableLineSeven();
    let lineThree = syllableLineFive();

    $("p#output1").text(lineOne);
    $("p#output2").text(lineTwo);
    $("p#output3").text(lineThree);
}