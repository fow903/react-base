import React, { useState } from 'react'

interface CounterProps {
    initialValue?: number
}

const Counter = (props: CounterProps) => {
    const { initialValue = 0 } = props;
    const [counter, setCounter] = useState({
        counterBy: initialValue,
        clicks: 0
    })

    const { counterBy, clicks} = counter; 

    const handleClick = (increment: number) => {
        setCounter({
            counterBy: counter.counterBy + increment,
            clicks: counter.clicks + 1
        });
    }

    return (
        <>
            <h1>Counter By: {counterBy}</h1>
            <h1>Clicks: {clicks}</h1>
            <button onClick={() => handleClick(1)}>+1</button>
            <button onClick={() => handleClick(5)}>+5</button>
        </>
    )
}

export default Counter
