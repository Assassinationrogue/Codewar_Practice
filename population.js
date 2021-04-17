function nbYear(p0, percent, aug, p) {
    let percentage = p0 * (percent/100);
    let endResult = p0 + percentage + aug; // 1500 * 0.05 + 1500 + 100
    let idleArray = []
    idleArray.push(endResult)
    while(endResult <= p){
        p0 = endResult;
        percentage = p0 * (percent/100);
        endResult = p0 + percentage + aug;
            
        idleArray.push(endResult)    
    }   
        return idleArray.length        
}

console.log(nbYear(1500, 5, 100, 5000))

