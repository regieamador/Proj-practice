

const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

let people = 1;

function calculateBill(){
    let bill = Number(billInput.value);
    let tipPercent = Number(tipInput.value) / 100;
    let tip = tipPercent * bill;

    let total = (bill + tip) / people;
    showTotal(total);
    return total;
}

function showTotal(total){
    perPersonTotalDiv.innerHTML = total.toFixed(2);
}

function increasePeople(){
    people += 1;

    calculateBill(people);
    showCount(people);
}

function decreasePeople(){
    if(people > 1){
        people -= 1;
    }
    else{
        return;
    }

    calculateBill(people);
    showCount(people);
}

function showCount(people){
    numberOfPeopleDiv.innerHTML = people;
    return people;
}