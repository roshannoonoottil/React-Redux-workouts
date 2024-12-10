import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseState from './Components/UseState'
import UseEffect from './Components/UseEffect'
import UseCallback from './Components/UseCallback'
import UseMemo from './Components/UseMemo'
import PTCDP from './Components/ParentToChiildDataPassing/PTCDP'
import CTPDP from './Components/ChildToParentDataPassing/CTPDP'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UseState />} />
        <Route path="/useeffect" element={<UseEffect />} />
        <Route path="/usecalback" element={<UseCallback />} />
        <Route path="/usememo" element={<UseMemo />} />
        <Route path="/p2c" element={<PTCDP />} />
        <Route path="/c2p" element={<CTPDP />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
