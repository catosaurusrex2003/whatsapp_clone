// import { Switch } from '@mui/material';
import { Router , Route, Routes, BrowserRouter, useParams } from 'react-router-dom';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <div className='app__body'>
        <BrowserRouter>
          <Sidebar/>      
            <Routes>
              <Route 
                path = '/rooms/:roomsId'
                element = {
                  <Chat />
                }
              />
            <Route 
                path = '/'
                element = {
                  <></>
                }
              />

            </Routes>
        </BrowserRouter>
        
        
      </div>
    </div>
  );
}

export default App;
