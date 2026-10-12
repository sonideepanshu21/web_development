function sum (a,b){
    let c =a+b;
    console.log(c);
    
}
 sum(10,20);

function sum_width_d(x,y=10){
    console.log(x+y);
    
}

sum_width_d(7);
sum_width_d(8,20);

function calculate(x,y,z){
    return x+y+z;
}  
let answer = calculate(10,20,30);
console.log(answer);


const greet = function(){
    console.log("wellcome to javascript");
    
};

greet();