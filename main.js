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

const catName = ()=>{
    return 'Grubbo';
}

const bucketOfCats = {
    cat1: 'fluffy',
    cat2: 5,
    cat3: catName,
    cat4: {
        water: 'no',
        sunlight: 'yee'
    }
};

console.log(bucketOfCats.cat2);


console.log(bucketOfCats['cat2']);

console.log(bucketOfCats.cat4.water);

let hitchhikers_guide = {
    characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
    catchphrase: "Don't Panic",
    random_facts: {
        copies_sold: 14000000,
        formats: ["radio", "TV", "film", "graphic novel"],
        ultimate_answer: {
            meaning_of_life: 42
        }
    }
};

console.log(hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life);

let employee = {
    name: "Jeff Winger",
    age: 37,
    department: "legal",
    hire_date: "09/22/2010"
  }

  
document.write(`Our company's lawyer is ${employee.name}`);
  document.write(`Jeff was hired on ${employee['hire_date']}`);
  employee.vacation_days = 20;
  document.write(employee.vacation_days);
  let eom = 'employee_of_the_month';
  employee.eom = false;
  document.write(employee.eom);
  

  printToDom('employee1', (`Our company's lawyer is ${employee.name}`));
  printToDom('employee2', (`Jeff was hired on ${employee['hire_date']}`));