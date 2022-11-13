import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Form from './pages/Form';
import Info from './pages/Info';
import RouteProvider from './RouteProvider';
import Button from './ui/button/Button';



export default function App() {
  const navigate = useNavigate();

  return (
    <RouteProvider>
      <div className='App'>
        <Routes>
          <Route path='/' element={
            <Button
              type={'button'}
              text={'Найти'}
              handleClick={() => navigate('/avia')}
              disabled={false}
              />
          }/>
          <Route path='/avia' element={<Form/>}/>
          <Route path='/avia/info' element={<Info/>}/>
        </Routes>
      </div>
      </RouteProvider>
  );
}
