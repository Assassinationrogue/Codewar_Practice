function digital_root(m){
    if(m === 0){
        return 0
    }else{
        let number =  Math.trunc(m%10) + digital_root(Math.trunc(m/10))
        newNumber(number)
        function newNumber(n){
            number =  Math.trunc(n%10) + digital_root(Math.trunc(n/10))           
        }
        return number
    }   
}

// function newNumber(n){
//     n = number;
//     if(n === 0){
//         return 0
//     }else{
//         return Math.trunc(n%10) + digital_root(Math.trunc(n/10))
        
//     }
// }

let number = digital_root(1208794)


number = digital_root(number)
console.log(number)
// while (number > 10){
//     digital_root(number)

// }





