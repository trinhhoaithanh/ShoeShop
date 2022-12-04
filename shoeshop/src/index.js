import React from 'react';
import ReactDOM from 'react-dom/client';
import HomeLayout from './templates/HomeLayout';
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
//cấu hình react router dom
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
        <Routes>
            <Route path='' element={<HomeLayout/>}>
                <Route index element={<Home/>}></Route>
                <Route path='home' element={<Home/>}></Route>
                <Route path='shop' element={<Shop/>}></Route>
                <Route path='*' element={<Navigate to=''/>}></Route>
            </Route>    
        </Routes>
    </BrowserRouter>
  </>
);

