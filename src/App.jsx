import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './home/Home'
import Story from './stories/Story'
function App() {
 
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stories" element={<Story />} />
    </Routes>
    </>
  )
}

export default App
