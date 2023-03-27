function string(myText){
    let firstString = '';
    for(let i = myText.length-1; i>=0; i--){
        const element = myText[i];
        firstString += element;
        console.log(element, firstString);
    }
    return firstString;
}
let reverse = 'I am a good student';
console.log(string(reverse));



function string(myText){
    let words = myText.split(' ');
    let firstString = [];
    for(let i = words.length-1; i>=0; i--){
        const element = words[i];
        firstString.push(element);
    }
    return firstString;
}
let reverse1 = 'I am a good student';
console.log(string(reverse1));
