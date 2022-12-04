import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Pay } from './Pay';
import { SuccessPayment } from './SuccessPayment';

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Pay/>} />
        <Route path={"/success"} element={<SuccessPayment/>}  />
      </Routes>
    </>
  );
}

export default App;
