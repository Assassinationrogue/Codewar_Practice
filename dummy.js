let numArr = [2000, 10003, 1234000, 44444444, 9999, 11, 11, 22, 123]
let numOrdArr = [2,2,2,4,6,10,32,36]

function digitSum(num){
    if (num === 0){
        return 0
    }else{
        return (num%10 + digitSum(Math.trunc(num/10)))
    }
}
let obj1 = {}

for (let i = 0; i < numArr.length;i++){
    if (digitSum(numArr[i]) in obj1){
        obj1[digitSum(numArr[i])] += " "+numArr[i].toString()
    }else{
        obj1[digitSum(numArr[i])] = numArr[i].toString()
    }
    
}

let blankArr = []

for(let key in obj1){
    blankArr.push(obj1[key])
}

console.log(blankArr.join(' '))