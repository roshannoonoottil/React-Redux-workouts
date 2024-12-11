import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseState from './Components/Hooks/UseState'
import UseEffect from './Components/Hooks/UseEffect'
import UseCallback from './Components/Hooks/UseCallback'
import UseMemo from './Components/Hooks/UseMemo'
import PTCDP from './Components/ParentToChiildDataPassing/PTCDP'
import CTPDP from './Components/ChildToParentDataPassing/CTPDP'
import Stopwatch from './Components/Stopwatch/Stopwatch';

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
        <Route path="/stopwatch" element={<Stopwatch />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
