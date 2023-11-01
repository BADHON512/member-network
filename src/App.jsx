import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import About from "./components/About/About";
import Pricing from "./components/Pricing/Pricing";
import Me from "./components/Me/Me";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CollectBill from "./components/CollectBill/CollectBill";
import { useDispatch } from "react-redux";
import { Store } from "./redux/Store";
import { loadUser } from "./redux/Action/user";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  toast.warning("badhon");
  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);

  return (
    <BrowserRouter>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />

        <Route
          path="/collect-bill"
          element={
            <ProtectedRoute>
              <CollectBill />
            </ProtectedRoute>
          }
        />
        <Route path="/me" element={<Me />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
