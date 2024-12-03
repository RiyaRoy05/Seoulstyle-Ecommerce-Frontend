import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Content from "./components/Content";
import Login from "./components/Login/Login";
import CustomerRegister from "./components/Login/CustomerRegister";
import SellerRegister from "./components/Login/SellerRegister";
import Customer from "./components/Customer/Customer";
import ProductDetails from "./components/Customer/ProductDetails";
import Allproducts from "./components/Customer/Allproducts";
import Orders from "./components/Customer/Orders";
import OrderDetails from "./components/Customer/OrderDetails ";
import Help from "./components/Customer/Help";
import Buy from "./components/Customer/Buy";
import Payment from "./components/Customer/Payment ";
import SellerDashboard from "./components/Seller/SellerDashboard";
import AddNewProduct from "./components/Seller/AddNewProduct";
import ManageProducts from "./components/Seller/ManageProducts";
import SellerOrders from "./components/Seller/SellerOrders";
import UpdateStoreInfo from "./components/Seller/UpdateStoreInfo";
import Admin from "./components/Admin/Admin";
import UserManagement from "./components/Admin/UserManagement";
import ProductManagement from "./components/Admin/ProductManagement";
import OrderManagement from "./components/Admin/OrderManagement";
import ReportsAnalytics from "./components/Admin/ReportsAnalytics";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register-customer" element={<CustomerRegister />} />
        <Route path="/register-seller" element={<SellerRegister />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/customerallproducts" element={<Allproducts />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/order/:id" element={<OrderDetails />} />
        <Route path="help" element={<Help />} />
        <Route path="cart" element={<Buy />} />
        <Route path="/checkout" element={<Payment />} />
        <Route path="/seller" element={<SellerDashboard />} />
        <Route path="/add-new-product" element={<AddNewProduct />} />
        <Route path="/manage-products" element={<ManageProducts />} />
        <Route path="/seller-orders" element={<SellerOrders />} />
        <Route path="/update-info" element={<UpdateStoreInfo />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user-management" element={<UserManagement />} />
        <Route path="/product-management" element={<ProductManagement />} />
        <Route path="/order-management" element={<OrderManagement />} />
        <Route path="/report-analystics" element={<ReportsAnalytics />} />
      </Routes>
    </Router>
  );
}

export default App;
