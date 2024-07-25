import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import StateBasics from './components/StateBasics'
import IncrDecr from './components/IncrDecr'
import Welcome from './components/Welcome'
import Students from './components/Students'
import API from './components/API'
import Blog from './components/Blog'
import Poke from './components/Poke'

function App() {
 

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/sign' element={<Signup />}></Route>
        <Route path='/login' element={<Login />} />
        <Route path='/s' element={<StateBasics />} />
        <Route path='/incr' element={<IncrDecr />} />
        <Route path='/w' element={<Welcome />} />
        <Route path='/stu' element={<Students />} />
        <Route path='/api' element={<API />} />
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/poke' element={<Poke/>}/>
      </Routes>
      
    
     
      
    </>
  )
}

export default App
