function zero(operatorType) {
    currNumber = 0
   return stringSeparate(operatorType,currNumber)        
}

function one(operatorType) {
    currNumber = 1
   return stringSeparate(operatorType,currNumber)        
}

function two(operatorType) {
    currNumber = 2
   return stringSeparate(operatorType,currNumber)        
}

function three(operatorType) {
    currNumber = 3
   return stringSeparate(operatorType,currNumber)        
}

function four(operatorType) {
    currNumber = 4
   return stringSeparate(operatorType,currNumber)        
}


function five(operatorType) {
    currNumber = 5
   return stringSeparate(operatorType,currNumber)        
}

function six(operatorType) {
    currNumber = 6
   return stringSeparate(operatorType,currNumber)        
}

function seven(operatorType) {
    currNumber = 7
   return stringSeparate(operatorType,currNumber)        
}

function eight(operatorType) {
    currNumber = 8
   return stringSeparate(operatorType,currNumber)        
}

function nine(operatorType) {
    currNumber = 9
   return stringSeparate(operatorType,currNumber)        
}



function stringSeparate(numStr,crtNum){ // take operator and a number
    let stringSeparator= []
    if(numStr !== undefined){ 
        for(let number = 0; number < numStr.length;number++){
            stringSeparator.push(numStr[number]) // string sperator
        }
         stringSeparator[1] = parseInt(stringSeparator[1]) // string to int
    }
    
    function operatorCheck(operator){
        switch(operator[0]){
            case "+": return crtNum + operator[1]
            break;
            case "-": return crtNum - operator[1]
            break; 
            case "*": return crtNum * operator[1]
            break;
            case "/":  return Math.trunc(crtNum / operator[1])
            break;
            default:
                return crtNum
        }
    }       return operatorCheck(stringSeparator) 
}


function plus(num){
     return "+" + num;
}
function minus(value) {return "-"+value;}
function times(value) { return "*"+value;}
function dividedBy(value) { return "/"+value;}





