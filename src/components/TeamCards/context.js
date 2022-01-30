import React from "react";

const initialState = {
  active: "overview",
  setActive: () => {},
};

const initialState2 = {
    active: "overview2",
    setActive: () => {},
  };

const initialState3 = {
    active: "overview3",
    setActive: () => {},
  };

const initialState4 = {
    active: "overview4",
    setActive: () => {},
};

const initialState5 = {
    active: "overview5",
    setActive: () => {},
};

export const CardContext = React.createContext(initialState);
export const CardContext2 = React.createContext(initialState2);
export const CardContext3 = React.createContext(initialState3);
export const CardContext4 = React.createContext(initialState4);
export const CardContext5 = React.createContext(initialState5);