function createPhoneNumber(numbers){
    let firstThree = []; let midThree = []; let lastFour = [];
    let checker = true;        
    if (checker == false){if (numbers.length !== 10){
        return checker = false
    }
    // integer checker   
    for (let i = 0;i<=numbers.length-1; i++){
        if(isNaN(numbers[i])){
            return checker = false
        }            
        }
        return 'Please, enter phone number properly!'
    }else{
        // separator
        firstThree = numbers.slice(0,3)
        midThree = numbers.slice(3,6)
        lastFour = numbers.slice(6,)
    
        return (`(${firstThree.join('')}) ${midThree.join('')}-${lastFour.join('')}`)
    }       
    
}

console.log(createPhoneNumber([4,0,0,3,4,2,5,1,0,0]))