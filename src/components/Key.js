import React from 'react'

export default function Key(props) {
    return (
        <div className={`key key-${props.type}`} onClick={() => props.onClick(parseInt(props.text))}>{props.text}</div>
    )
}
