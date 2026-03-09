import { Route, Routes } from 'react-router'
import { HomePage } from './pages/HomePage/HomePage'
import { UserPage } from './pages/UserPage/UserPage'
import { CartPage } from './pages/CartPage/CartPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/user/:id" element={<UserPage />} />
      <Route path="/cart/:id" element={<CartPage />} />
    </Routes>
  )
}
export default App