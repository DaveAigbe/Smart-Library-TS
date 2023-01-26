import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Account from "../pages/Account/Account";
import Home from "../pages/Home/Home";
import Library from "../pages/Library/Library";
import Layout from "../layouts/Layout";
import Login from "../pages/Login/Login";

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/library"} element={<Library />} />
            <Route path={"/account"} element={<Account />} />
            <Route path={"/login"} element={<Login />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
