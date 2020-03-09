import React, {useState} from 'react'

export default function Screen() {

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
        if(operation === "addition"){
            setValue("=" + (parseFloat(oldValue) + parseFloat(value)))
        }
        else if(operation === "substract"){
            setValue("=" + (parseFloat(oldValue) - parseFloat(value)))
        }
        else if(operation === "multiply"){
            setValue("=" + (parseFloat(oldValue) * parseFloat(value)))
        }
        else if(operation === "divide"){
            setValue("=" + (parseFloat(oldValue) / parseFloat(value)))
        }
        setOperation("equal")
    }

    return (
        <div>
            <div className="screen">
                <textarea className="screen-text" value={value}></textarea>
            </div>
            <div className="buttons-grid">
                <div className="key key-clear" onClick={() => clear()}>C</div>
                <div className="key letter" onClick={() => divide()}>/</div>
                <div className="key letter" onClick={() => multiply()}>*</div>
                <div className="key key-backspace" onClick={() => backspace()}><i class="fas fa-backspace"></i></div>
                <div className="key letter" onClick={() => writeToScreen(7)}>7</div>
                <div className="key letter" onClick={() => writeToScreen(8)}>8</div>
                <div className="key letter" onClick={() => writeToScreen(9)}>9</div>
                <div className="key letter" onClick={() => percent()}>%</div>
                <div className="key letter" onClick={() => writeToScreen(4)}>4</div>
                <div className="key letter" onClick={() => writeToScreen(5)}>5</div>
                <div className="key letter" onClick={() => writeToScreen(6)}>6</div>
                <div className="key letter" onClick={() => substract()}>-</div>
                <div className="key letter" onClick={() => writeToScreen(1)}>1</div>
                <div className="key letter" onClick={() => writeToScreen(2)}>2</div>
                <div className="key letter" onClick={() => writeToScreen(3)}>3</div>
                <div className="key letter" onClick={() => add()}>+</div>
                <div className="key letter" onClick={() => writeToScreen(0)}>0</div>
                <div className="key letter" onClick={() => writeToScreen(".")}>.</div>
                <div className="key  key-equal " id="equal" onClick={() => getResult()}>=</div>
            </div>
        </div>
    )
}
