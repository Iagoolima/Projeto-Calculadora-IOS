var oneClick;



const clean =()=>{
    document.getElementById('resultNumber').innerHTML = "0"
    document.querySelector(".clean").innerHTML = "AC"
    oneClick = false
    
}

const sign=()=>{
    let number = document.getElementById('resultNumber').innerHTML;
    document.getElementById('resultNumber').innerHTML = - + number
}

const percetage=(num)=>{
    let number = document.getElementById('resultNumber').innerHTML;
    document.getElementById('resultNumber').innerHTML = number / 100
}


const insert=(num)=>{
    
    let number = document.getElementById('resultNumber').innerHTML;

    if(number == 0){
        document.getElementById('resultNumber').innerHTML = " "
    }
    
    
    document.getElementById('resultNumber').innerHTML +=  num
    document.querySelector(".clean").innerHTML = "C"
}




const comma=()=>{
    if(!oneClick){
    let number = document.getElementById('resultNumber').innerHTML;
        document.getElementById('resultNumber').innerHTML = number + ".";
        oneClick = true
    }
}

var number1;
var number2;

const calculate=(operation)=>{
    let number = document.getElementById('resultNumber').innerHTML;
    if(number != 0){
    number1 = document.getElementById('resultNumber').innerHTML + operation;
    document.getElementById('resultNumber').innerHTML =""
    }
}


const result=()=>{
    
    if(number1){
        number2 = document.getElementById('resultNumber').innerHTML;
        var res = number1 + number2
        document.getElementById('resultNumber').innerHTML=eval(res)
    }
    

}




