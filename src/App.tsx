import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import { lazy } from "react";

const DashBoard = lazy(()=> import("./pages/DashBoard"))

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin/dashboard" element={<DashBoard/>}/>
        <Route path="/admin/dashboard" element={<DashBoard/>}/>
      </Routes>
    </Router>
  )
}

export default App