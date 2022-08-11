import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home, Login, ProductDetail, Purchases } from "./pages/Index";
import Navbar from "./components/layouts/Navbar";
import { useSelector } from "react-redux";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        {isLoading && <div className="overloay"> Loading </div>}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/purchases" element={<Purchases />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
