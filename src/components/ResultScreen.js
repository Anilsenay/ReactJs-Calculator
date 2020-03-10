import React from 'react'

export default function ResultScreen(props) {
    return (
        <div>
            <div className="screen">
                <textarea className="screen-text" value={props.value}></textarea>
            </div>
        </div>
    )
}
