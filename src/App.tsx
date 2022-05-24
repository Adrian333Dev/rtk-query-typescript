import React from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { userSlice } from "./features/UserSlice";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.userReducer);
  
  return (
    <div className="App">
      <h1>{count}</h1>
    </div>
  );
}

export default App;
