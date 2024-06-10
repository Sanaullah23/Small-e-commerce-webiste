import React from "react";
import Layout from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/user/Dashboard";
import DashboardPrivate from "./components/layout/Routes/DashboardPrivate";
import AdminRoutes from "./components/layout/Routes/AdminRoutes";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CreateProduct from "./pages/admin/CreateProduct";
import ViewProducts from "./pages/admin/ViewProducts"
import ViewUsers from "./pages/admin/ViewUsers"
import NotFound from "./pages/NotFound";
import ViewSingleProduct from "./pages/admin/ViewSingleProduct";

function App() {
  return (
    <div className="bg-zinc-50">
   
        <Routes>
          <Route path="/" element={<Home title={"home -ShopME"} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<DashboardPrivate/>}>
            <Route path="user" element={<Dashboard />} />
          </Route>
          <Route path="/dashboard" element={<AdminRoutes/>}>
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="admin/create-product" element={<CreateProduct/>} />
            <Route  path="admin/view-products" element={<ViewProducts/>} />
            <Route  path="admin/product-details/:id"element={<ViewSingleProduct/>} />
            <Route  path="admin/view-users"element={<ViewUsers/>} />
            
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
    
    </div>
  );
}

export default App;
