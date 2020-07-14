import React, { useReducer } from "react";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterFour from "./components/HookCounterFour";
import ClassCounterOne from "./components/ClassCounterOne";
import HookCounterOne from "./components/HookCounterOne";
import ClassMouse from "./components/ClassMouse";
import HookMouse from "./components/HookMouse";
import IntervalClassCounter from "./components/IntervalClassCounter";
import IntervalHookCounter from "./components/IntervalHookCounter";
import DataFetching from "./components/DataFetching";
import ContextHook from "./components/ContextHook";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
import DataFetchingOne from "./components/DataFetchingOne.js";
import DataFetchingTwo from "./components/DataFetchingTwo";
import Counter from "./components/Counter";
import FocusInput from "./components/FocusInput";
import ClassTimer from "./components/ClassTimer";
import HookTimer from "./components/HookTimer";

export const UserContext = React.createContext();
export const NameContext = React.createContext();

export const CountContext = React.createContext();

const initState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initState);

  return (
    
      <div className="App">
        {/* ----------------------------- Use State -------------------------- */}

        {/* <ClassCounter/> */}
        {/* <HookCounter/> */}
        {/* <HookCounterTwo/> */}
        {/* <HookCounterThree/> */}
        {/* <HookCounterFour/> */}

        {/* ----------------------------- Use Effect -------------------------- */}
        {/* <ClassCounterOne/> */}
        {/* <HookCounterOne/> */}

        {/* <ClassMouse/> */}
        {/* <HookMouse/> */}

        {/* ----------------------------- Use Context -------------------------- */}

        {/* <IntervalClassCounter/>
      <IntervalHookCounter/> */}
        {/* <UserContext.Provider value="Karan">
        <NameContext.Provider value="Kunal">
          <ContextHook/>
        </NameContext.Provider>
      </UserContext.Provider> */}

        {/* ----------------------------- Use Reducer -------------------------- */}
        {/* <CounterOne/> */}
        {/* <CounterTwo/> */}


        {/* <CountContext.Provider value={{count: count, dispatchCount: dispatch}}>
          <h2> Count: {count} </h2>
          <ComponentA/>
          <ComponentB/>
          <ComponentC/>
        </CountContext.Provider> */}

        {/* <DataFetchingOne/> */}
        {/* <DataFetchingTwo/> */}
        
          {/* ----------------------------- Use Memo -------------------------- */}
          {/* <Counter/> */}

          {/* ----------------------------- Use Ref -------------------------- */}
          {/* <FocusInput/> */}
          {/* <ClassTimer/>
          <HookTimer/> */}
          
      </div>
  );
}

export default App;
