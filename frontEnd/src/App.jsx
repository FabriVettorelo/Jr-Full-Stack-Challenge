import { Route, Routes, useLocation } from 'react-router-dom'
import Landing from './Views/Landing/Landing'
import OrderPizza from './Views/OrderPizza/OrderPizza'
import Menu from "./Components/Menu/Menu"
import MyOrders from './views/MyOrders/MyOrders'
import './App.css'

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/' && <Menu />}
      
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/orderpizza' element={<OrderPizza />} /> 
        <Route path='/myorders' element={<MyOrders />} />
      </Routes>
    </div>

  )
}

export default App
