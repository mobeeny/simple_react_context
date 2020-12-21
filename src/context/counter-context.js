import React, { useReducer, createContext } from 'react'

export const CounterContext = createContext()

const initialState = {
    age: 21
}

const reducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case "AGE_UP":
            newState.age += action.val
            break
        case "AGE_DOWN":
            newState.age -= action.val
            break
    }

    return newState
}

export const CounterContextProvider = props=> {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <CounterContext.Provider value={[state, dispatch]}>
            {props.children}
        </CounterContext.Provider>
    )
}