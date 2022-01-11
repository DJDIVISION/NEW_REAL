import React from 'react';

const initialState = {
    active: "menuTwo",
    setActive: () => {}
}

export const MenuContext = React.createContext(initialState);