import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const DashBoard = lazy(()=> import("./pages/DashBoard"));
const Products = lazy(()=> import("./pages/Products"));
const Transaction = lazy(()=> import("./pages/Transaction"));
const Customers = lazy(()=> import("./pages/Customers"));

const App = () => {
  return (
    <Router>
       <Suspense> 
        <Routes>
          <Route path="/admin/dashboard" element={<DashBoard/>}/>
          <Route path="/admin/dashboard" element={<Products/>}/>
          <Route path="/admin/customers" element={<Customers/>}/>
          <Route path="/admin/transaction" element={<Transaction/>}/>
        </Routes>
     </Suspense>
    </Router>
  )
}

export default App