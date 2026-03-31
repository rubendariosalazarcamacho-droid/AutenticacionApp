import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import { UserProvider } from './context/UserContext'
import PrivateRoute from './routes/privateRoute'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <UserProvider>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/Profile' element={<PrivateRoute><Profile /></PrivateRoute>}></Route>
        </Routes>
      </UserProvider>

    </>
  )
}

export default App
