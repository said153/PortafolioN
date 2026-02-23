import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CryptoPage from './pages/CryptoPage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="scan-line" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crypto" element={<CryptoPage />} />
      </Routes>
    </BrowserRouter>
  )
}