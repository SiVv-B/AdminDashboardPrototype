import './app.css'
import SideBar from './componenets/sideBar/SideBar'
import TopBar from './componenets/topBar/TopBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import UserList from './pages/userList/UserList'
import UserPage from './pages/userPage/UserPage'
import NewUser from './pages/newUser/NewUser'
import ProductList from './pages/productList/ProductList'
import ProductPage from './pages/productPage/ProductPage'
import NewProduct from './pages/newProduct/NewProduct'


function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <div className="container">
        <SideBar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/user/:userId" element={<UserPage />} />
        <Route path="/newUser" element={<NewUser />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/newProduct" element={<NewProduct/>} />

        

        
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App
