import React from 'react'
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import Mainlayout from './component/layout/Mainlayout'
import Homepage from './page/Homepage'
import Shoppage from './page/Shoppage'
import Productdetail from './component/product/Productdetail'

function App() {
  return (
    <BrowserRouter>
    <Routes>

      
      <Route path='/' element={<Mainlayout/>}>
      {/* homepage */}
      <Route path='/' element={<Homepage/>}/>
      <Route path='/product/:id' element={<Productdetail/>}/>
      <Route path='/shop' element={<Shoppage/>}/>

      </Route>
     

    </Routes>
    </BrowserRouter>
  )
}

export default App
