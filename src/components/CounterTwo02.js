import React, { useReducer } from 'react'

const initialState = { // bu asagidaki function icindeki count ile temsil ediliyor.
    firstCounter: 0,
    secondCounter: 10
};

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { ...state, firstCounter: state.firstCounter + action.payload }

        case "decrement":
            return { ...state, firstCounter: state.firstCounter - action.payload }

        case "reset":
            return initialState

        case "increment2":
            return { ...state, secondCounter: state.secondCounter + action.payload }

        case "decrement2":
            return { ...state, secondCounter: state.secondCounter - action.payload }

        default:
            return state
    }
}

function CounterTwo02() {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>FirstCount : {count.firstCounter}</div>
            <div>SecondCount : {count.secondCounter}</div>
            <br />
            <button onClick={() => dispatch({ type: "reset" })} >Reset</button>
            <br />
            <button onClick={() => dispatch({ type: "increment", payload: 1 })} >Increment +1</button>
            <button onClick={() => dispatch({ type: "decrement", payload: 1 })} >Decrement -1</button>
            <button onClick={() => dispatch({ type: "increment", payload: 5 })} >Increment +5</button>
            <button onClick={() => dispatch({ type: "decrement", payload: 5 })} >Decrement -5</button>
            <br />
            <button onClick={() => dispatch({ type: "increment2", payload: 5 })} >Increment SeconCounter +5</button>
            <button onClick={() => dispatch({ type: "decrement2", payload: 5 })} >Decrement SeconCounter -5</button>
        </div>
    )
}

export default CounterTwo02
