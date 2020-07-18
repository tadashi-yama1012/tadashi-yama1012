/** @jsx jsx */
import {jsx} from '@emotion/core';
import React, {useReducer, Dispatch} from 'react';

type StateType = {
    selected: any
};

const initialState: StateType = {
    selected: null
};

const reducer = (state = {}, action: any) => {
    switch (action.type) {
        case 'SELECTED':
            return {
                ...state,
                selected: action.payload
            };
        case 'UNSELECTED':
            return {
                ...state,
                selected: null
            };            
    }
};

const Store = React.createContext<{state: StateType | undefined, dispatch: Dispatch<any> | undefined}>(
    {state: initialState, dispatch: undefined}
);

const Provider = ({children}: {children: any}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <Store.Provider value={{state, dispatch}}>{children}</Store.Provider>;
};

export {
    Store, Provider
};