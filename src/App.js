// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/home";
import Login from "./Components/Login/login";
import SignUp from "./Components/SignUp/signUp";
import NavbarHome from "./Components/Navbar/navbar";
import Contacts from "./Components/Contact/contact";
import About from "./Components/About/about";
import Store from "./Components/Store/store";
import AdminDashboard from "./Components/AdminPages/adminDashboard/adminDashboard";
import AdminHome from "./Components/AdminPages/adminHome/adminHome";
import AddProduct from "./Components/AdminPages/addProduct/addProduct";
import UploadProductImage from "./Components/AdminPages/uploadProductImage/uploadProductImage";
import AddCategory from "./Components/AdminPages/addCategory/addCategory";
import ViewProducts from "./Components/AdminPages/viewProducts/viewProducts";
import ManageOrders from "./Components/AdminPages/manageOrders/manageOrders";
import ManageCategories from "./Components/AdminPages/manageCategories/manageCategories";
import ViewUsers from "./Components/AdminPages/viewUsers/viewUsers";
import Cart from "./Components/Cart/cart";
import NotFound from "./Components/NotFound/notFound";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edited from frontend branch <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      {/* <h1>On 3000</h1> */}
      <NavbarHome></NavbarHome>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
          <Route path="/user/cart" element={<Cart />} />

          {/* Admin Dashboard Route, nested Admin Home */}
          <Route path="/admin-dashboard" element={<AdminDashboard />}>
            {/* Nested route for Admin Home */}
            <Route path="home" element={<AdminHome />} />
            <Route path="add-product" element ={ <AddProduct /> }  />
            <Route path="upload-product-image" element={ <UploadProductImage /> } />

            <Route path="add-category" element={ <AddCategory /> } />
            <Route path="view-products" element={ <ViewProducts /> } />
            <Route path="manage-orders" element={<ManageOrders />} />
            <Route path="manage-categories" element={<ManageCategories />} />
            <Route path="view-users" element={<ViewUsers /> } />

          </Route>
          {/* Catch all unmatched routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
