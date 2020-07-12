import React from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import ClassCounterOne from './components/ClassCounterOne';
import HookCounterOne from './components/HookCounterOne';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import ContextHook from './components/ContextHook';


export const UserContext = React.createContext()
export const NameContext = React.createContext()

function App() {
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
      </div>
  );
}

export default App;
