// Assignment

// let b= Number(prompt('Enter Your Age'));
// if(b>=18)
// {
// console.log('Congragulations, You can vote');
// }
// else
// {
//    console.log('Better luck next time'); 
// }


// let z= Number(prompt('Enter a number'));
// if(z==0)
// {
//     console.log('Number is zero')
// }
// else if(z % 2 == 0) 
// {
//      console.log('Number is even');
//  }
//  else 
// {
//      console.log('Number is odd');
// }

// let UserEmail=prompt('Enter email');
// let Email="Romaisa96@gmail.com"
// if (UserEmail==Email) 
// {
//     console.log('You can login');
// }
// else 
// {
//     console.log('You cannot login');
// }

// let num1 = Number(prompt('Enter num1'))
// let operator = prompt('Enter any any arithmetic operator(+,-,/,*)')
// let num2 = Number(prompt('Enter num2'))
// if (operator == "+") {
//     console.log(num1 + num2)
// }
// else if (operator == "-") {
//     console.log(num1 - num2)
// }
// else if (operator == "*") {
//     console.log(num1 * num2)
// }
// else if (operator == "/") {
//     console.log(num1 / num2)
// } 
// else {
//     console.log('invalid');

// }


// let sub1=Number(prompt('Enter sub1 marks'));
// let sub2=Number(prompt('Enter sub2 marks'));
// let sub3=Number(prompt('Enter sub3 marks'));
// let sub4=Number(prompt('Enter sub4 marks'));
// let sub5=Number(prompt('Enter sub5 marks'));
// let total=500;
// let obtainmarks=(sub1+sub2+sub3+sub4+sub5)
// let percentage=(obtainmarks/total)*100
// if (percentage >= 90 && percentage <= 100) 
// {
//       console.log("A+ is your grade AND percentage is " ,percentage)
// }
//  else if (percentage >=80 && percentage<=89) 
// {
//      console.log("A is your grade AND percentage is " ,percentage)
// }
//  else if (percentage>=70 && percentage<=79) 
// {
//      console.log("B is your grade AND percentage is " ,percentage)
// }
//  else if (percentage>=60 && percentage<=69) 
// {
//      console.log("C is your grade AND percentage is " ,percentage)
// } 
//  else if (percentage>=50 && percentage<=59) 
// {
//      console.log("D is your grade AND percentage is " ,percentage)
// } 
// else if (percentage>=40 && percentage<=49) 
// {
//      console.log("E is your grade AND percentage is " ,percentage)
// } 
//  else if ( percentage<=40) {
//     console.log("Failed" , percentage)
//  }

// else {
//     console.log("invalid")
// } 



// let sub1=Number(prompt('Enter sub1 marks'));
// let sub2=Number(prompt('Enter sub2 marks'));
// let sub3=Number(prompt('Enter sub3 marks'));
// let sub4=Number(prompt('Enter sub4 marks'));
// let sub5=Number(prompt('Enter sub5 marks'));
// let total=500;
// let obtainmarks=(sub1+sub2+sub3+sub4+sub5)
// let percentage=(obtainmarks/total)*100
// switch(true)
// {
// case percentage >= 90 && percentage <= 100:
//     console.log("A+ is your grade AND percentage is " ,percentage)
//     break;
// case percentage >=80 && percentage<=89: 
//      console.log("A is your grade AND percentage is " ,percentage)
//      break;
// case percentage>=70 && percentage<=79: 
//     console.log("B is your grade AND percentage is " ,percentage)
//     break;
// case percentage>=60 && percentage<=69: 
//      console.log("C is your grade AND percentage is " ,percentage)
//      break;
// case percentage>=50 && percentage<=59:
//      console.log("D is your grade AND percentage is " ,percentage)
//      break;
// case percentage>=40 && percentage<=49:
//      console.log("E is your grade AND percentage is " ,percentage)
//      break;
// case percentage<=40:
//     console.log("Failed" , percentage)
//     break;
// default:
//         console.log("Invalid")
//         break;
// } 


// let i=1;
// while( i<=10 )
// {
//      console.log('Value of i is:',i);
//      i++
// }

// let i=1;
// while( i<=100)
// {
//      if(i%2==0)
//      {
//      console.log('Value of i is even:',i);
//      }
//      else
//      {
//       console.log('Value of i is odd:',i);    
//      }
//      i++
// }


// let i=1;
// while( i<=10)
// {
//   console.log("2 x " , i , '=', i*2 )
//      i++
// }

// for(let i=1;i<=10;i++){
//      console.log("2 x " , i , '=', i*2 ) 
// }


// let startingvalue = Number(prompt('Enter a number'));
// let table = Number(prompt('Enter table number'));
// let EndValue = Number(prompt('Enter stop value'))
// while (startingvalue <= EndValue) {
//      console.log(table, 'x', startingvalue, '=', startingvalue * table)
//      startingvalue++
// }



// let pin = Number(prompt('Enter your PIN'));
// let customerpin = 5679;
// let balance = 10000;
// if(pin == customerpin)
// {
//     console.log('Continue');
//     let option = Number(prompt(
//         'Select your Option:\n' +
//         '1. Check Balance\n' +
//         '2. Withdraw Cash\n' +
//         '3. Deposit Cash\n' +
//         '4. Exit'
//     ));
//     while(option != 4)
//     {
//         if(option == 1)
//         {
//             console.log('Your Current Balance is', balance);
//         }
//         else if(option == 2)
//         {
//             let amount = Number(prompt('Enter withdrawal amount'));
//             if(amount > balance)
//             {
//                 console.log('Insufficient Balance');
//             }
//             else if(amount % 5 != 0)
//             {
//                 console.log('Invalid Amount');
//             }
//             else
//             {
//                 balance = balance - amount;
//                 console.log('Your New balance is =', balance);
//             }
//         }
//         else if(option == 3)
//         {
//             let deposit = Number(prompt('Enter amount you want to deposit'));

//             balance = balance + deposit;

//             console.log('Your New balance is =', balance);
//         }
//         else
//         {
//             console.log('Invalid Option');
//         }
//         option = Number(prompt(
//             'Select your Option:\n' +
//             '1. Check Balance\n' +
//             '2. Withdraw Cash\n' +
//             '3. Deposit Cash\n' +
//             '4. Exit'
//         ));
//     }
//     console.log('Thank you for using ATM');
// }
// else
// {
//     console.log('Invalid Pin');
// }


// let i=1
// do{
//      console.log("2x",i,"=",i*2)
//      i++
// }
// while(i<=10)

// function sum(a,b){
//      let add=a + b;
//      console.log('sum of two values',add);
// }
// sum(24,55)
// sum(2,555)
// sum(74,15)
// sum(20,75)
// sum(84,50)
// sum(29,60)
// sum(14,95)


// function isEvenOdd(a){
//      if (a%2==0){
//           return'number is even'+a
//      }else{
//           return'number is odd'+a
//      }
// }
// let num1=Number(prompt('enter any number'))
// console.log(isEvenOdd(num1))


// function sum(a,b){
//      let add=a+b;
//      return add
// }
// console.log(sum(24,55),sum(2,555),sum(74,15),sum(20,75),sum(84,50),sum(29,60),sum(14,95))



// let sub1 = Number(prompt('Enter sub1 marks'));
// let sub2 = Number(prompt('Enter sub2 marks'));
// let sub3 = Number(prompt('Enter sub3 marks'));
// let sub4 = Number(prompt('Enter sub4 marks'));
// let sub5 = Number(prompt('Enter sub5 marks'));
// console.log('Total mark is', 500)
// console.log('obtainmarks=', (sub1 + sub2 + sub3 + sub4 + sub5))
// function percentage() {
//      percent = ((sub1 + sub2 + sub3 + sub4 + sub5) / 500) * 100;
//      return percent
// }
// console.log('your percentage is:', percentage())
// function grade() {
//      if (percentage() >= 90 && percentage() <= 100) {
//           return 'GRADE A+ : '
//      }
//      else if (percentage() >= 80 && percentage() <= 89) {
//           return 'GRADE A : '
//      }
//      else if (percentage() >= 70 && percentage() <= 79) {
//           return 'GRADE B : '
//      }
//      else if (percentage() >= 60 && percentage() <= 69) {
//           return 'GRADE C : '
//      }
//      else if (percentage() >= 50 && percentage() <= 59) {
//           return 'GRADE D : '
//      }
//      else if (percentage() >= 40 && percentage() <= 49) {
//           return 'GRADE E : '
//      }
//      else if (percentage() <= 40) {
//           return 'GRADE F : '
//      }
// }
// console.log('Your Grade is : ', grade())



// function table(a) {
//     let i = 1;

//     while (i <= 10) {
//         console.log(a, "x", i, "=", a * i);
//         i++;
//     }
// }

// let num1 = Number(prompt("Enter any number"));

// table(num1);

// let pin = Number(prompt('Enter your PIN'));
// let customerpin = 5679;
// let balance = 10000;
// if(pin == customerpin)
// {
//     return'Continue';
//     function atm()
//     {
//         let option = Number(prompt('Select your Option:\n' +
//         '1.Check Balance\n' +
//         '2.Withdraw Cash\n' +
//         '3.Deposit Cash\n' +
//         '4.Exit'));
//         while(option != 4)
//         {
//             if(option == 1)
//             {
//                 return'Your Current Balance is', balance;
//             }
//             else if(option == 2)
//             {
//                 let amount = Number(prompt('Enter withdrawal amount'));
//                 if(amount > balance)
//                 {
//                     return'Insufficient Balance';
//                 }
//                 else if(amount % 500 != 0)
//                 {
//                     return'Invalid Amount';
//                 }
//                 else
//                 {
//                     balance = balance - amount;
//                     return'Your New balance is =', balance;
//                 }
//             }
//             else if(option == 3)
//             {
//                 let deposit = Number(prompt('Enter amount you want to deposit'));
//                 balance = balance + deposit;
//                 return'Your New balance is =', balance;
//             }
//             else
//             {
//                 return'Invalid Option';
//             }
//             option = Number(prompt('Select your Option:\n' +
//             '1.Check Balance\n' +
//             '2.Withdraw Cash\n' +
//             '3.Deposit Cash\n' +
//             '4.Exit'));
//         }
//         return 'Thank you for using ATM';
//     }
//     console.log(atm());
// }
// else
// {
//     return'Invalid Pin';
// }


// let array=[20,34,65,35,3,5,65]
// console.log('array',array);

// let value=[20,34,65,35,3,5,65]
// console.log('array',value[3]);

// let number=[20,34,65,35,3,5,65]
// console.log('array',number.length);

// array[4]=56
// console.log('ssss',array)


// let array1=[20,34,65,35,3,5,65]
// let array2=[62,34,60,75,10,9,5]
// for(let i=0;i<array1.length;i++)
// {
//     console.log(array1[i]+array2[i]);
// }

// let array3=[62,34,60,75,10,9,50]
// console.log('array after applying with metod',array3);
// let result=array3.push(0)
// console.log('array after applying with metod',array3);
// console.log('Return Method',result);

// let array3=[62,34,60,75,10,9,50]
// console.log('array after applying with metod',array3);
// let result=array3.pop()
// console.log('array after applying with metod',array3);
// console.log('Return Method',result);

// let array3=[62,34,60,75,10,9,50]
// console.log('array after applying with metod',array3);
// let result=array3.unshift(99)
// console.log('array after applying with metod',array3);
// console.log('Return Method',result);

// let array3=[62,34,60,75,10,9,50]
// console.log('array after applying with metod',array3);
// let result=array3.shift()
// console.log('array after applying with metod',array3);
// console.log('Return Method',result);

// let array3=[62,34,60,75,10,9,50]
// console.log('array after applying with metod',array3);
// let result=array3.reverse()
// console.log('array after applying with metod',array3);
// console.log('Return Method',result);

// let array3=[62,34,60,75,10,9,50]
// console.log('array after applying with metod',array3);
// let result=array3.join("----")
// console.log('array after applying with metod',array3);
// console.log('Return Method',result);

// let array3=[62,34,60,75,10,9,50]
// let array1=[20,34,65,35,3,5,65]
// console.log('array after applying with metod',array3);
// let result=array3.concat(array1)
// console.log('array after applying with metod',array3);
// console.log('Return Method',result);


// let array3=[62,34,60,75,10,9,50]
// console.log('array after applying with metod',array3);
// let result=array3.sort()
// console.log('array after applying with metod',array3);
// console.log('Return Method',result);

// let array3=[62,34,60,75,10,9,50]
// console.log('array after applying with metod',array3);
// let result=array3.slice(2,4)
// console.log('array after applying with metod',array3);
// console.log('Return Method',result);

// let array3=[62,34,60,75,10,9,50]
// console.log('array after applying with metod',array3);
// let result=array3.splice(3,2)
// console.log('array after applying with metod',array3);
// console.log('Return Method',result);

// let array3=[62,34,60,75,10,9,50]
// console.log('array after applying with metod',array3);
// let result=array3.splice(2,2,'Romaisa','Mazhar')
// console.log('array after applying with metod',array3);
// console.log('Return Method',result);

let array3=[62,34,60,75,10,9,50]
console.log('array after applying with metod',array3);
// As we have three parameters in map= Elements,Index,Arrays
let result=array3.map((num)=>num*3)
console.log('array after applying with metod',array3);
console.log('Return Method',result);