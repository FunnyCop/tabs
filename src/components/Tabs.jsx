import React, { useState } from "react"

const Tabs = props => {
    const [ arr, setArr ] = useState( [ ...props.arr ] )
    const [ display, setDisplay ] = useState( "" )

    return (
        <div className = "Tabs">
            <span>
                { arr.map( ( item, i ) => <button onClick = { () => setDisplay( arr[ i ] ) }>Tab { i }</button> ) }
            </span>
            <p>{ display }</p>
        </div>
    )
}

export default Tabs