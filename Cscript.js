class Calculator{
    
    constructor(historyDisplayText, currentDisplayText){
        this.historyDisplayText = historyDisplayText
        this.currentDisplayText = currentDisplayText
        this.clear();
    }

    clear()
    {
        this.currentDisplay=''
        this.historyDisplay=''
        this.operator= ''
        
    }

    delete(){
        this.currentDisplay = this.currentDisplay.toString().slice(0, -1)
    }

    appendnumber( number){
        if (number === '.' && this.currentDisplay.includes('.')) return
       this.currentDisplay = this.currentDisplay.toString() + number.toString();
    }

    chooseoperation(operator){
        if(this.currentDisplay==='') return
        if(this.historyDisplay !=='')
        {this.compute()}
        this.operator = operator
        this.historyDisplay= this.currentDisplay
        this.currentDisplay=''
    }

    compute(){
          
        let computation
        let num1= parseFloat(this.historyDisplay)
        let num2= parseFloat(this.currentDisplay)
        
        if (isNaN(num1)||isNaN(num2)) return
        /* code does not work
         if (operator == '+') {
             computation = add(num1,num2);
             return computation
        }
        else if (operator == '-') {
            computation = minus(num1,num2);
             return computation
        }
        else if (operator == 'x') {
            computation = multiply(num1,num2);
             return computation
        }
        else if(operator == '/') {
            computation = devide(num1,num2);
             return computation
        }
        */
        switch (this.operator) {
            case '+':
              computation = add(num1,num2)
              break
            case '-':
              computation = minus(num1,num2)
              break
            case '*':
              computation = multiply(num1,num2)
              break
            case '÷':
              computation = devide(num1,num2)
              break
            default:
              return
        }
        this.currentDisplay= computation 
        this.operator=''
        this.historyDisplay=''

    }

    updateDisplay(){

        this.currentDisplayText.innerText = this.currentDisplay
        this.historyDisplayText.innerText = this.historyDisplay + this.operator

    }

}


let numberButtons = document.querySelectorAll('.number')
let operationButtons = document.querySelectorAll('.operation')
let equalsButton = document.querySelector('.equals')
let deleteButton = document.querySelector('.delete')
let clearButtons = document.querySelector('.clear')
let historyDisplayText = document.querySelector('.historyDisplay')
let currentDisplayText = document.querySelector('.currentDisplay')

let calculator = new Calculator(historyDisplayText, currentDisplayText)

numberButtons.forEach(button => {
    button.addEventListener('click', ()=>
    {
        calculator.appendnumber(button.innerText)
        calculator.updateDisplay()
    })
})
operationButtons.forEach(button=> {
    button.addEventListener('click', ()=>
    {
        calculator.chooseoperation(button.innerText)
        calculator.updateDisplay()
    })
})
equalsButton.addEventListener('click', button =>
    {
        calculator.compute()
        calculator.updateDisplay()
    })

deleteButton.addEventListener('click', button => {
        calculator.delete()
        calculator.updateDisplay()
      })
clearButtons.addEventListener('click', button => {
        calculator.clear()
        calculator.updateDisplay()
      })


let operator;


function add(num1, num2){
   result= num1+num2;
   return result;
}
function minus(num1, num2){
    result= num1-num2;
    return result;
 }
 function multiply(num1, num2){
    result= (num1*num2);
    return result;
 }
 function devide(num1, num2){
    result= (num1/num2);
    return result;
 }

  
