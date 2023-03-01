import React, { useState } from 'react'

interface CounterProps {
    initialValue?: number
}

const Counter = (props: CounterProps) => {
    const { initialValue = 0 } = props;
    const [counter, setCounter] = useState(initialValue)

    const handleClick = () => setCounter(prev => prev + 1)
  
    return (
        <>
            <h1>Counter: {counter}</h1>
            <button onClick={handleClick}>
                +1
            </button>
        </>
    )
}

export default Counter