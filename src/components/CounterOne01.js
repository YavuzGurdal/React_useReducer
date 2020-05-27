import React, { useReducer } from 'react'

const initialState = 0;

const reducer = (state, action) => {
    switch (action) {
        case "increment":
            return (
                state + 1
            )

        case "decrement":
            return state - 1

        case "reset":
            return initialState

        default:
            return state
    }
}

function CounterOne01() {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>Count : {count}</div>

            <button onClick={() => dispatch("increment")} >Increment +1</button>
            <button onClick={() => dispatch("decrement")} >Decrement -1</button>
            <button onClick={() => dispatch("reset")} >Reset</button>
        </div>
    )
}

export default CounterOne01
