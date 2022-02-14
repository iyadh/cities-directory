import "./App.css";
import React, {useReducer} from 'react';
import {
  Context,
  state,
  reducer, State
} from './store';
import { Table } from "./components/Table/Table";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  // @ts-ignore
  const [store, dispatch]: [store: State, dispatch: React.Dispatch<T>] = useReducer(reducer, state);
  return (
    <Context.Provider value={{ store, dispatch }}>
      <div className="App">
        <Sidebar />
        <Table />
      </div>
    </Context.Provider>
  );
}

export default App;
