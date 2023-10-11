import { BrowserRouter, Route, Routes } from "react-router-dom"

// Pages and components
import Home from './pages/Home'
import Nav from "./components/Nav"
import Profile from "./pages/Profile"
import PublicProfile from "./pages/PublicProfile"


function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:token" element={<Profile />} />
        <Route path="/@/:username" element={<PublicProfile />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
