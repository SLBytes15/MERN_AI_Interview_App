import SideBar from "./component/SideBar/SideBar"
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard/Dashboard";
import History from "./component/History/History";
import Admin from "./component/Admin/Admin";

function App() {


  return (
    <div className="App">
    <SideBar /> 
    <Routes>
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/history' element={<History/>} />
      <Route path='/admin' element={<Admin/>} />
    </Routes>
    </div>
  )
}

export default App
