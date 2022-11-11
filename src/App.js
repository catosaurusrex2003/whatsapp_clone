// import { Switch } from '@mui/material';
import { useState } from 'react';
import { Router, Route, Routes, BrowserRouter, useParams } from 'react-router-dom';
import './App.css';
import Chat from './Chat';
import Login from './login';
import Sidebar from './Sidebar';
import { useStateValue } from './Stateprovider';


function App() {

  const [{user} , dispatch] = useStateValue()


  return (
    <div className="app">
      {!user ? <Login/>
        :
        <div className='app__body'>
          <BrowserRouter>
            <Sidebar />
            <Routes>
              <Route path='/rooms/:roomsId'
                element={
                  <Chat />
                }
              />
              <Route path='/'
                element={
                  <></>
                }
              />

            </Routes>
          </BrowserRouter>


        </div>
      }
    </div>
  );
}

export default App;
