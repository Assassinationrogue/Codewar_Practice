function order(words){
    let b = words.split(' ');
    let newWordArray = words.split(' ');
    for (let letter = 0; letter <= b.length-1; letter++){
       for (let newLet = 1; newLet <= b.length; newLet++){       
            if(b[letter].includes(newLet.toString())){
                newWordArray[newLet] = b[letter]
            }
       }
    } 
    newWordArray.reverse()
    newWordArray.pop()
    newWordArray.reverse()
    return newWordArray.join(' ')
    
}

console.log(order(" ") )