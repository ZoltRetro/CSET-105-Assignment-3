const prompt = require('prompt-sync')();

// function erm(){
//     let choice = Number(prompt("Chose 2 to find the minimum of two numbers or 3 to find the minimum of 3 numbers: "))
//     if(choice == 3){
//         let input = Number(prompt("Enter a number: "))
//         let input2 = Number(prompt("Enter second number: "))
//         let input3 = Number(prompt("Enter third number: "))
//         function minimum2()
//         {
//             if (input < input2 && input < input3 ){
//                 console.log("Your first number is the minimum")
//                 return(input2)
//             }
//             else if(input2 < input && input2 < input3){
//                 console.log("Your second number is the minimum")
//                 return(input)
//             }

//             else if(input3 < input && input3 < input2){
//                 console.log("Your third number is the minimum")
//                 return(input3)
//             }


//         }
    
//         minimum2()
//     }

//     else if(choice == 2){
//         let input4 = Number(prompt("Enter a number: "))
//         let input5 = Number(prompt("Enter second number: "))
    
//         function minimum()
//         {
//             if (input4 > input5){
//                 console.log("Your second number is the minimum")
//                 return(input5)
//             }
//             else if(input4 < input5){
//                 console.log("Your first number is the minimum")
//                 return(input4)
//             }
//             else{
//                 console.log("kys")
//             }

//         }

//         minimum()
//     }



// }

// erm()

// function isEven(){
//     let input = Number(prompt("Enter a number: "));


//     if(input < 0){
//         input -= (input + input)
//     }

//     let numba = 0
//     numba += (input%2)


//     if(numba == 0){
//         console.log("Your Number is Even");
//         return(input)
//     }
//     else if(numba == 1){
//         console.log("Your Number is Odd");
//         return(input)
//     }
// }

// isEven()


function nth(){
    let input = Number(prompt("Enter the nth term you want: "));
    let numba = 2
        
    for(let i = 0; i < input; i++){
        numba = numba + 4*i
        console.log(numba)
        }
    

    return(input)
}
nth()

function nth(){
    let input = Number(prompt("Enter the nth term you want: "));
    let numba = 1
    let count = 0

        while(count != input){
            numba *= ++count

            console.log(numba)
            

        }
    
    return(input)
}

nth()

// function nth(){
//     let input = Number(prompt("Enter the nth term you want: "));
//     let a = 1;
//     let b = 0;
//     let count = 0;
//     while(count != input){
//         let next = a + b
//         a = b
//         b = next

//         count++
//         console.log(next)
//     }
//     return(input)
// }
// nth()

// function calculator(){
//     question = 0;

//     while(question !== 5){
//         question = Number(prompt(`Press 1 to add, 2 to substract, 3 to multiply, 4 to divide, 5 to quit: `));

//         if(question === 1){
//             question_1 = Number(prompt(`Enter first number: `));
//             question_2 = Number(prompt(`Enter second number: `));
//             if(isNaN(question_1) || isNaN(question_2)){
//                 console.log('Warning Incorrect Number program ending!');
//                 break;
//             }
//             else{
//                 console.log(`The sum of the numbers is ${question_1 + question_2}`)
//             }
//         }
//         else if(question === 2){
//             question_1 = Number(prompt(`Enter first number: `));
//             question_2 = Number(prompt(`Enter second number: `));
//             if(isNaN(question_1) || isNaN(question_2)){
//                 console.log('Warning Incorrect Number program ending!');
//                 break;
//             }
//             else{
//             console.log(`The difference of the numbers is ${question_1 - question_2}`)
//             }
//         }
//         else if(question === 3){
//             question_1 = Number(prompt(`Enter first number: `));
//             question_2 = Number(prompt(`Enter second number: `));
//             if(isNaN(question_1) || isNaN(question_2)){
//                 console.log('Warning Incorrect Number program ending!');
//                 break;
//             }
//             else{
//                 console.log(`The product of the numbers is ${question_1 * question_2}`)
//             }
//         }
//         else if(question === 4){
//             question_1 = Number(prompt(`Enter first number: `));
//             question_2 = Number(prompt(`Enter second number: `));
//             if(isNaN(question_1) || isNaN(question_2)){
//                 console.log('Warning Incorrect Number program ending!');
//                 break;
//             }
//             else{
//                 console.log(`The quotient of the numbers is ${question_1 / question_2}`)
//             }
//         }
//         else if(question === 5){
//             console.log("GoodBye!")
//             break;
//         }
//         else{
//             console.log(`Please select a valid option`);
//             question = Number(prompt(`Press 1 to add, 2 to substract, 3 to multiply, 4 to divide, 5 to quit: `));

//         }

//     }

// }

// calculator()

// let input = 0
// let input2 = 0
// let input3 = 0
// function table(){
//     let num1 = 0;
//     let num2 = 0;
//     let num3 = 0;
//     while(input != isNaN || input2 != isNaN || input3 != isNaN){
//         input = Number(prompt("Enter first number: "))
//         input2 = Number(prompt("Enter second number: "))
//         input3 = Number(prompt("Enter third number: "))
//         if(input == isNaN || input2 == isNaN || input3 == isNaN){
//             console.log("Please enter a valid number!")
//             input = Number(prompt("Enter first number: "))
//             input2 = Number(prompt("Enter second number: "))
//             input3 = Number(prompt("Enter third number: "))
//         }
        
//         let count = 0
//         num1 += input;
//         num2 += input2;
//         num3 += input3;
//         while(count != num3){
//             console.log(`${num1} * ${num2} = ${num1 * num2}`)
//             num2++
//             count++
//         }
        
        
//     }
    
// }
// table()


// let input = 0;
// let input2 = 0;
// let input3 = 0;
// let input4 = 0;
// function table(){
//     let num1 = 0;
//     let num2 = 0;
//     let num3 = 0;
//     let num4 = 0;
//     while(input != isNaN && input2 != isNaN && input3 != isNaN && input4 != isNaN){
//         input = Number(prompt("Enter first number: "))
//         input2 = Number(prompt("Enter second number: "))
//         input3 = Number(prompt("Enter third number: "))
//         input4 = Number(prompt("Enter fourth number: "))
//         if(input == isNaN || input2 == isNaN || input3 == isNaN || input4 == isNaN){
//             console.log("Please enter a valid number!")
//             input = Number(prompt("Enter first number: "))
//             input2 = Number(prompt("Enter second number: "))
//             input3 = Number(prompt("Enter third number: "))
//             input4 = Number(prompt("Enter fourth number: "))

//         }
        
//         let count = 0
//         num1 += input;
//         num2 += input2;
//         num3 += input3;
//         num3 += input4;
//         while(count != num4){
//             console.log(`${num1} * ${num3} = ${num1 * num3}`)
//             console.log(`${num2} * ${num3} = ${num1 * num3}`)
//             num3++
//             count++
//         }
            
        
        
//     }
    
// }
// table()