import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Service from './Pages/Service'
import Package from './Pages/Package'
import AddService from './Pages/AddService'
import AddPackage from './Pages/AddPackage'
import { useDispatch } from 'react-redux'

function App() {

  const dispatch = useDispatch()



  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='services' element={<Service />} />
        <Route path='packages' element={<Package />} />
        <Route path='services/addservice' element={<AddService />} />
        <Route path='packages/addpackage' element={<AddPackage />} />
        <Route path='services/updateservice/:id' element={<AddService />} />
        <Route path='packages/updatepackage/:id' element={<AddPackage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
