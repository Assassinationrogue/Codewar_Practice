function solution(number){
    let currNum = 0;
    let sumArr = []
    while(currNum < number){
        if (currNum % 3 === 0){
            sumArr.push(currNum);
        }else if (currNum % 5 === 0){
            sumArr.push(currNum)
        }
        currNum++;
    }
    
    let finalValue = 0
    for (let i=0;i<sumArr.length;i++){
        finalValue += sumArr[i]
    }

  return finalValue;
 
}

console.log(solution(50))

