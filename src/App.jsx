import './App.css'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<p>home route</p>} />
        </Routes> 
    </div>
  )
}

export default App
