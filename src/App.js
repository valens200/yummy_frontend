import './App.css'
import SignUpForm from './pages/SignUpForm'
import LoginForm from './pages/LoginForm'
import Dashboard from './pages/Dashboard'
import Overview from './pages/Overview'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Clients from './pages/Clients'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter className="App h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/Orders" element={<Dashboard />} />
        <Route path="/Overview" element={<Overview />} />
        <Route path="/Clients" element={<Clients />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
