class Calculator {
    constructor(_output) {
        if(_output === undefined) {
            this.output = ' ';
            return;
        }
        this.output = _output;
    }

    clear() {
        this.output = "";
        this.updateDisplay();
    }

    delete() {
        
    }

    addSymbol(_symbol) {
        this.output += _symbol;
        this.updateDisplay();
    }

    equals() {

    }

    updateOnInput() {
        this.output = output.value;
        for(var i = 1; i < this.output.length + 1; i++) {
            this.ouput = this.ouput.substr(0, i) + this.convertSymbol(this.output[i]) + this.output.substr(index + this.output.length);
        }
        this.updateDisplay();
    }

    updateDisplay() {
        output.value = this.output;
    }

    convertSymbol(_char) {
        switch(_char) {
            case 'r':
            return '√';
            default:
            return 'ERROR'
        }
    }
   
}

const symbolButtons = document.querySelectorAll('[data-symbol]');
const clearButton = document.querySelector('[data-clear]');
const delButton = document.querySelector('[data-delete]')
const equalsButton = document.querySelector('[data-equals]');
const output = document.querySelector('[data-output]');

const calc = new Calculator(" ");

//EventListener for each symbol
symbolButtons.forEach(button => {
    button.addEventListener('click', () => {
        calc.addSymbol(button.textContent);
    });
})

//EventListener for clear
clearButton.addEventListener('click', () => {
    calc.clear();
});

//EventListener for del
delButton.addEventListener('click', () => {
    calc.delete();
})


