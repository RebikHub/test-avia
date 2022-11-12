import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Form from './Form';
import Button from './ui/button/Button';


export default function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      {/* <Route path='/'>
        <Route path='/avia' element={<Form/>}/>
      </Route> */}
      <Route path='/' element={<Button
        text={'Найти'}
        handleClick={() => navigate('/avia')}
        disabled={false}
        />}/>
      <Route path='/avia' element={<Form/>}/>
    </Routes>
  );
}
