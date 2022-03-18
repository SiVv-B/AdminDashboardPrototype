import './app.css'
import SideBar from './componenets/sideBar/SideBar'
import TopBar from './componenets/topBar/TopBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'


function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <div className="container">
        <SideBar />
        <Home/> 
      </div>
    </BrowserRouter>
  )
}

export default App
