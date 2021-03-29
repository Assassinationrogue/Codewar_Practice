const names = [ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]
function list(names){
    let counting = [];
    // for the converstion of array of object into an array
    for (let num=0;num < names.length; num++){
        counting.push(names[num].name);        
    }; 
    // if the array has more than one word   
    if (names.length > 1){
    counting[names.length-1] = `& ${names[names.length-1].name}`; // adding ampersent before the last name
    let countedJoin = counting.join(', '); // turning the array into one string
    let indexedNumber = countedJoin.indexOf('&')-2; // taking the index of the last ","
    return countedJoin.slice(0,indexedNumber) + ' ' +countedJoin.slice(indexedNumber+2,)
    }else{
        return counting.join()
    }   
}
console.log(list(names))

