import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import LandingPage from './Pages/LandingPage'
import Home from './Pages/Home'
import WatchHistory from './Pages/WatchHistory'
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <>
      <Header />
      <Routes>
      <Route path='/' element={ <LandingPage />}/> 
      <Route path='/home' element={ <Home />}/> 
      <Route path='/history' element={ <WatchHistory />}/>
      </Routes>

      <Footer />
    </>
  )
}

export default App
