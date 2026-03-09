import { Route, Routes } from 'react-router'
import { HomePage } from './pages/HomePage/HomePage'
import { UserPage } from './pages/UserPage/UserPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
            <Route path="/user/:id" element={<UserPage />} />
    </Routes>
  )
}

export default App
