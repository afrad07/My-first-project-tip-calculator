let billAmt;
let tipPerc;
let tipAmt;
let tipPerPerson;
let x;
let y;
let output = document.getElementById("output");

const calculateBtn = document.getElementById("calculateBtn");

document.getElementById("billAmt").addEventListener("input", function(e){
        billAmt = document.getElementById("billAmt").value;
        console.log(billAmt)
})

document.getElementById("percInput").addEventListener("input", function(e){
        tipPerc = document.getElementById("percInput").value;
        console.log(tipPerc)
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

    output.innerText = "₹" + x / document.getElementById("counterInput").value;
}

calculateBtn.addEventListener("click", calculate)

// let tipAmt = billAmt * percInput / 100;
// console.log(tipAmt);

// let multiply = tipPerc*billAmt;
// console.log(multiply)

console.log(document.getElementsByClassName("test").onInput);
