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
        obj1[digitSum(numArr[i])] += " "+numArr[i]

    }else{
        obj1[digitSum(numArr[i])] = numArr[i]
    }
    
}

let blankArr = []




for(let key in obj1){
    if(isNaN(obj1[key])){
        
        let a = (obj1[key].split(' ').map(Number));
        // for ( let currNum =0;currNum<a.length;currNum++){
        //         console.log(a[currNum])
        //     }
        
        // }
        console.log(a)
        
     }
}

function orderWeight(strng){
    let obj = {};
        // use truthy to check for value
        if (strng) {
            // split string and iterate over each index of integers
            strng.split(" ").forEach( (str) => {
                // convert the string into a number and reduce the numbers into one value
                let total = str.split('').map(Number).reduce((accumulator, currentValue) => accumulator + currentValue )
                // because JS only allows unique keys in objects, this lets us relate multiple 
                !obj[total] ? obj[total] = [str] : obj[total].push(str)
            });
        }
    }
    
    console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"))