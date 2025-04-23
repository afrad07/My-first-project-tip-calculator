let billAmt;
let tipPerc;
let tipAmt;
let tipPerPerson;
let x;
let output = document.getElementById("output");

const calculateBtn = document.getElementById("calculateBtn");

document.getElementById("billAmt").addEventListener("keypress", function(e){
    if(e.key == "Enter"){
        billAmt = document.getElementById("billAmt").value;
        console.log(billAmt)
    }
})

document.getElementById("percInput").addEventListener("keypress", function(e){
    if(e.key == "Enter"){
        tipPerc = document.getElementById("percInput").value;
        console.log(tipPerc)
    }
})

let count = 1;
console.log(count);

function add(){
    count += 1;
    document.getElementById("counterInput").value = count;
    console.log(count);
}

function subtract(){
    count --;
    document.getElementById("counterInput").value = count;
    console.log(count);
}

let noOfPeople = document.getElementById("counterInput").value;
console.log(noOfPeople);

function calculate(){
    tipAmt = billAmt * tipPerc;
    x = tipAmt / 100;
    tipPerPerson = x / document.getElementById("counterInput").value;
    output.innerText = "₹" + tipPerPerson;
}

calculateBtn.addEventListener("click", calculate)

// let tipAmt = billAmt * percInput / 100;
// console.log(tipAmt);

// let multiply = tipPerc*billAmt;
// console.log(multiply)
