import "./App.css";
import React, {useReducer} from 'react';
import {
  Context,
  state,
  reducer
} from './store';
import { Table } from "./components/Table/Table";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  const [store, dispatch] = useReducer(reducer, state);
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
