function orderWeight(strng){
    let newOrd = strng.split(" ");
    let numArr = []
    let numOrdArr=[]
    let obj1 = {}
    for (let keyNum = 0; keyNum < newOrd.length; keyNum++){
    numArr.push(parseInt(newOrd[keyNum])) // str to int
    }
    for (let currNum =0; currNum < numArr.length; currNum++){
        numOrdArr.push(digitSum(numArr[currNum]))
    } numOrdArr.sort((a,b)=>{
        return a - b;
    });
    for (let i = 0; i < numArr.length;i++){
        if (digitSum(numArr[i]) in obj1){
            obj1[digitSum(numArr[i])] += " "+numArr[i]
        }else{
            obj1[digitSum(numArr[i])] = numArr[i]
        }    
    }
    
    let blankArr = []
    for(let key in obj1){
        blankArr.push(obj1[key])
    }
    return blankArr.join(' ')
}
// digit summation ( i am stubborn and will not use reduce....huh!)
function digitSum(num){
    if (num === 0){
        return 0
    }else{
        return (num%10 + digitSum(Math.trunc(num/10)))
    }
}

console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"))