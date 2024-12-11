const newFunction = (name, age) => {
 console.log(`welcome ${name} you are ${age} years old`);
}
newFunction(`Jubilee`,100)

const newfunction = (number1, number2) => {
 console.log(number1+number2);
}
newfunction(15,30)

//Using Logical Operator
let isLogin = true
let isAdmin = false
if(isLogin === true && isAdmin === true){
 console.log(`You're an admin`)
}
else{
 console.log(`You're not an admin`)
}