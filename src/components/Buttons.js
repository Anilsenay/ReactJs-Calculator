import React from 'react'

let writeToScreen = (number) => {
    console.log(number);
}

export default function Buttons() {
    return (
        <div className="buttons-grid">
            <div className="key letter">C</div>
            <div className="key letter">+/-</div>
            <div className="key letter">%</div>
            <div className="key letter">/</div>
            <div className="key letter">7</div>
            <div className="key letter">8</div>
            <div className="key letter">9</div>
            <div className="key letter">*</div>
            <div className="key letter">4</div>
            <div className="key letter">5</div>
            <div className="key letter">6</div>
            <div className="key letter">-</div>
            <div className="key letter">1</div>
            <div className="key letter">2</div>
            <div className="key letter">3</div>
            <div className="key letter">+</div>
            <div className="key letter" onClick={() => writeToScreen(0)}>0</div>
            <div className="key letter">.</div>
            <div className="key letter" id="equal">=</div>
        </div>
    )
}
