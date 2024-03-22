import {useState, memo} from "react"
import Display from "./display"
import DigitButton from "./digitButton"

const Calculator = memo(function Calculator() {
    const [secondaryValue, setSecondaryValue] = useState('Ans = 0')
    const [primaryValue, setPrimaryValue] = useState('0')
    //const [result, setResult] = useState(null)
    let lastOperation = '+'
    let result = 0;
    const handleNumberClick = (e) => {
        if (e === 'Delete') {
            setPrimaryValue(primaryValue.slice(0,-1))
            return
        }
        
        if (primaryValue === '0' && e != '0') {
            return setPrimaryValue(e);
        }
        if (primaryValue.includes('.') && e === '.') {
            return
        }
        return setPrimaryValue(primaryValue + e)

    }



    const handleOperationClick = (e) => {
        if (e === 'All Clear') {
            if (secondaryValue != 'Ans = 0') {
                setSecondaryValue('Ans = 0');
            }
            if (primaryValue != '0') {
                setPrimaryValue('0');
            }
            return;
        }

        if (e == '%'){
            if (secondaryValue === 'Ans = 0') {
                result = primaryValue / 100
                setSecondaryValue(' ' + primaryValue + ' ' )
                setPrimaryValue("0")
                return;
            }
            if (secondaryValue.includes(" ") && primaryValue === '0') {
                result = secondaryValue / 100
                setSecondaryValue(' ' + result + ' ' )
                return;
            }
            if (primaryValue != '0') {
                result = parseFloat(secondaryValue) * (parseFloat(primaryValue)/100);
                setSecondaryValue(' ' + result + ' ')
                setPrimaryValue('0')
            }
        }

        const fristOperation = (event) => {
            if (secondaryValue === 'Ans = 0') {
                setSecondaryValue(primaryValue + ' ' + event)
                setPrimaryValue("0")
                return;
            }
            if (secondaryValue.includes(' ') && primaryValue === '0') {
                setSecondaryValue(parseFloat(secondaryValue) + ' ' + event)
                return;
            }
        }

        const operationCase = (lO, event) => {
            switch (lO) {
                case '+':
                    if (primaryValue != '0') {
                        result = parseFloat(secondaryValue) + parseFloat(primaryValue);
                        setSecondaryValue(result + ' ' + event)
                        setPrimaryValue('0')
                        return;
                    }
                    break;
                case '-':
                    if (primaryValue != '0') {
                        result = parseFloat(secondaryValue) - parseFloat(primaryValue);
                        setSecondaryValue(result + ' ' + event)
                        setPrimaryValue('0')
                        return
                    }
                    break;
                case '÷':
                    if (primaryValue != '0') {
                        result = parseFloat(secondaryValue) / parseFloat(primaryValue);
                        setSecondaryValue(result + ' ' + event)
                        setPrimaryValue('0')
                        return;
                    }
                    break;
                case '×':
                    if (primaryValue != '0') {
                        result = parseFloat(secondaryValue) * parseFloat(primaryValue);
                        setSecondaryValue(result + ' ' + event)
                        setPrimaryValue('0')
                        return;
                    }
                    break;
                case '=':
                    if (event != "=") {
                        setSecondaryValue(parseFloat(secondaryValue) + ' ' + event)
                    }
                    return;
                default:
                        alert('Input Not Supported /n Please Refresh The Page')
                    return;
            }
        }    
        /////need to complete ' = ' logic
        lastOperation = secondaryValue[secondaryValue.length-1]
        if (e === '=' && secondaryValue != 'Ans = 0') {
            operationCase(lastOperation, e)
            return;
        }
        
        if (secondaryValue === "Ans = 0") {
            fristOperation(e);
            return
        }
        operationCase(lastOperation,e);
    }


    return <>
        <div className="grid gap-2 grid-cols-4 justify-items-stretch border-black p-4 border-2 bg-slate-100 shadow-2xl rounded-xl">
            <div className="p-1 content-box col-span-4 border-black rounded-lg border-2 px-4 shadow-l min-h-20 bg-gray-800 align-text-bottom text-right text-4xl"><Display currentOutput={primaryValue} previousOutput={secondaryValue}/></div>
            <div className="p-1 col-span-2 btn-primary text-center" onClick={(e) => {e.stopPropagation(); handleOperationClick(e.target.textContent)}}><DigitButton value="All Clear"/></div>
            <div className="p-1 btn-primary text-center" onClick={(e) => {e.stopPropagation(); handleOperationClick(e.target.textContent)}}><DigitButton value="%" /></div>
            <div className="p-1 btn-primary text-center" onClick={(e) => {e.stopPropagation(); handleNumberClick(e.target.textContent)}}><DigitButton value="Delete" /></div>
            <div className="p-1 btn-primary text-center" onClick={(e) => {e.stopPropagation(); handleNumberClick(e.target.textContent)}}><DigitButton value="7" /></div>
            <div className="p-1 btn-primary text-center" onClick={(e) => {e.stopPropagation(); handleNumberClick(e.target.textContent)}}><DigitButton value="8" /></div>
            <div className="p-1 btn-primary text-center" onClick={(e) => {e.stopPropagation(); handleNumberClick(e.target.textContent)}}><DigitButton value="9" /></div>
            <div className="p-1 btn-primary text-center" onClick={(e) => {e.stopPropagation(); handleOperationClick(e.target.textContent)}}><DigitButton value="÷" /></div>
            <div className="p-1 btn-primary text-center" onClick={(e) => {e.stopPropagation(); handleNumberClick(e.target.textContent)}}><DigitButton value="4" /></div>
            <div className="p-1 btn-primary text-center" onClick={(e) => {e.stopPropagation(); handleNumberClick(e.target.textContent)}}><DigitButton value="5" /></div>
            <div className="p-1 btn-primary text-center" onClick={(e) => {e.stopPropagation(); handleNumberClick(e.target.textContent)}}><DigitButton value="6" /></div>
            <div className="p-1 btn-primary text-center" onClick={(e) => {e.stopPropagation(); handleOperationClick(e.target.textContent)}}><DigitButton value="×" /></div>
            <div className="p-1 btn-primary text-center" onClick={(e) => {e.stopPropagation(); handleNumberClick(e.target.textContent)}}><DigitButton value="1" /></div>
            <div className="p-1 btn-primary text-center" onClick={(e) => {e.stopPropagation(); handleNumberClick(e.target.textContent)}}><DigitButton value="2" /></div>
            <div className="p-1 btn-primary text-center" onClick={(e) => {e.stopPropagation(); handleNumberClick(e.target.textContent)}}><DigitButton value="3" /></div>
            <div className="p-1 btn-primary text-center" onClick={(e) => {e.stopPropagation(); handleOperationClick(e.target.textContent)}}><DigitButton value="-" /></div>
            <div className="p-1 btn-primary text-center" onClick={(e) => {e.stopPropagation(); handleNumberClick(e.target.textContent)}}><DigitButton value="0" /></div>
            <div className="p-1 btn-primary text-center" onClick={(e) => {e.stopPropagation(); handleNumberClick(e.target.textContent)}}><DigitButton value="." /></div>
            <div className="p-1 btn-primary text-center" onClick={(e) => {e.stopPropagation(); handleOperationClick(e.target.textContent)}}><DigitButton value="=" /></div>
            <div className="p-1 btn-primary text-center" onClick={(e) => {e.stopPropagation(); handleOperationClick(e.target.textContent)}}><DigitButton value="+" /></div>
            
        </div>
    </>
})

export default Calculator;