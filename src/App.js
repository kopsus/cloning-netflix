import { BrowserRouter, Route, Routes } from "react-router-dom"

import Main from "../src/components/main/main"
import Home from "../src/components/home/main"
import Login from "../src/components/login/main.login"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
