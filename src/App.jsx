import React from 'react'
import Navbar from './Components/Nav/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Movies from './Components/Movies'
import Stream from "./Components/Stream"
import Plays from "./Components/Plays"
import Sports from "./Components/Sports"
import SignUp from "./Components/SignUp"
import './App.css'


const App = () => {
  return (

  

    <Router>
 <Navbar/>

<Routes>

<Route path="/" element={<Movies />} />
<Route path="/stream" element={<Stream />} />
<Route path="/plays" element={<Plays />} />
<Route path="/sports" element={<Sports />} />
<Route path="/signup" element={<SignUp />} />

</Routes>

</Router>

  )
}

export default App