import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SelectShow from '../src/SelectShow/SelectShow';
import Maincontent from './Component/MainContent/Maincontent';
import Theator from './Theator/Theator';
const Routing=()=>{
    return(
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Maincontent/>}></Route>
            <Route path='/selectshow/:ids' element={<SelectShow/>}></Route>
            <Route path='/bookingticket/:ticket' element={<Theator/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
}
export default Routing;