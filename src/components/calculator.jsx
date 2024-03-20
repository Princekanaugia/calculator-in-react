import { useState } from "react"
import Output from "./output"
import DigitButton from "./digitButton"

export default function Calculator() {
    const [secondaryValue, setSecondaryValue] = useState('Ans = 0')
    const [primaryValue, setPrimaryValue] = useState('0')
    //const [result, setResult] = useState(null)

    const handleNumberClick = (e) => {
        console.log(e)
        if (primaryValue === '0') {
            return setPrimaryValue(e);
        }
        return setPrimaryValue(primaryValue + e)

    }

    const handleOperationClick = (e) => {
        switch (e) {
            case '+':
                if(secondaryValue === 'Ans = 0') {
                    setSecondaryValue(primaryValue + ' ' + e)
                    setPrimaryValue("0")
                    return;
                }
                let result = Number.parsefloat(primaryValue);
                setSecondaryValue(result)
                break;
            case '-':
                // code block
                break;
            case '=':
                if (secondaryValue === 'Ans = 0') {
                    return 
                }
                setSecondaryValue ()
                break;
            case '%':
                // code block
                break;
            case '÷':
                // code block
                break;
            case '×':
                // code block
                break;
            default:
                // code block
        }
    }


    return <>
        <div className="grid gap-2 grid-cols-4 justify-items-stretch border-black p-4 border-2 bg-slate-100 shadow-2xl rounded-xl">
            <div className="p-1 content-box col-span-4 border-black rounded-lg border-2 px-4 shadow-l min-h-20 bg-gray-800 align-text-bottom text-right text-4xl"><Output currentOutput={primaryValue} previousOutput={secondaryValue}/></div>
            <div className="p-1 btn-primary text-center" onClick={(e) => {e.stopPropagation(); handleNumberClick(e.target.textContent)}}><DigitButton value="("/></div>
            <div className="p-1 btn-primary text-center" onClick={(e) => {e.stopPropagation(); handleNumberClick(e.target.textContent)}}><DigitButton value=")" /></div>
            <div className="p-1 btn-primary text-center" onClick={(e) => {e.stopPropagation(); handleOperationClick(e.target.textContent)}}><DigitButton value="%" /></div>
            <div className="p-1 btn-primary text-center" onClick={(e) => {e.stopPropagation(); handleOperationClick(e.target.textContent)}}><DigitButton value="AC" /></div>
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
}