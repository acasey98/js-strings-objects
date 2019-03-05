const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += textToPrint;
}

const iAmThursty = (num) =>{
if(num < 21){
    return('drink water kiddo');
} else if (num >= 21 && num <= 65){
    return('drink some beer big boy');
}else 
    return('take a nap gramps');

};

printToDom('thirsty',iAmThursty(77));
printToDom('thirsty',iAmThursty(55));
printToDom('thirsty',iAmThursty(16));

console.log(1 === '1');
console.log(1 !== '2');
console.log('cats'.length);
const quote = 'winter is coming';
console.log(quote.indexOf('is'));
