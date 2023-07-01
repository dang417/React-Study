import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext()


export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)
// Context : 데이터를 제공하게해줌 (?)

