import React, {useState} from 'react'
import ResultScreen from './ResultScreen';
import Key from './Key'

export default function Calculator() {

    const [oldValue, setOldValue] = useState("");
    const [value, setValue] = useState("");
    const [operation, setOperation] = useState("");

    let writeToScreen = (number) => {
        if(operation === "equal"){
            setValue(number)
            setOperation("")
        }else
        setValue(value + "" + number)
    }

    let writeDot = () => {
        writeToScreen(".")
    }

    let add = () => {
        setOldValue(value);
        setValue("");
        setOperation("addition");
    }
    let substract = () => {
        setOldValue(value);
        setValue("");
        setOperation("substract");
    }
    let multiply = () => {
        setOldValue(value);
        setValue("");
        setOperation("multiply");
    }
    let divide = () => {
        setOldValue(value);
        setValue("");
        setOperation("divide");
    }
    let clear = () => {
        setOldValue("")
        setValue("")
        setOperation("")
    }
    let backspace = () => {
        setValue(value.substring(0, value.length - 1))
    }
    let percent = () => {
        
    }

    let getResult = () => {
        if(value !== ""){
            if(operation === "addition"){
                console.log(value + " " + oldValue)
                setValue("=" + (parseFloat(oldValue.replace('=', '')) + parseFloat(value)))
            }
            else if(operation === "substract"){
                setValue("=" + (parseFloat(oldValue.replace('=', '')) - parseFloat(value)))
            }
            else if(operation === "multiply"){
                setValue("=" + (parseFloat(oldValue.replace('=', '')) * parseFloat(value)))
            }
            else if(operation === "divide"){
                setValue("=" + (parseFloat(oldValue.replace('=', '')) / parseFloat(value)))
            }
            setOperation("equal")
        }
    }
    
    return (
        <div>
            <ResultScreen value={value}/>
            <div className="buttons-grid">
                <Key text="C" type="clear" onClick={clear}/>
                <Key text="/" type="letter" onClick={divide}/>
                <Key text="*" type="letter" onClick={multiply}/>
                <Key text={<i className="fas fa-backspace"></i>} type="backspace" onClick={backspace}/>
                <Key text="7" type="letter" onClick={writeToScreen}/>
                <Key text="8" type="letter" onClick={writeToScreen}/>
                <Key text="9" type="letter" onClick={writeToScreen}/>
                <Key text="%" type="letter" onClick={percent}/>
                <Key text="4" type="letter" onClick={writeToScreen}/>
                <Key text="5" type="letter" onClick={writeToScreen}/>
                <Key text="6" type="letter" onClick={writeToScreen}/>
                <Key text="-" type="letter" onClick={substract}/>
                <Key text="1" type="letter" onClick={writeToScreen}/>
                <Key text="2" type="letter" onClick={writeToScreen}/>
                <Key text="3" type="letter" onClick={writeToScreen}/>
                <Key text="+" type="letter" onClick={add}/>
                <Key text="0" type="letter" onClick={writeToScreen}/>
                <Key text="." type="letter" onClick={writeDot}/>
                <Key text="=" type="equal" onClick={getResult}/>
            </div>
        </div>
    )
}
