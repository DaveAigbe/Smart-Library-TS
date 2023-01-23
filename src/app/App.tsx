import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Account from "../pages/Account";
import Home from "../pages/Home/Home";
import Library from "../pages/Library/Library";
import Layout from "../layouts/Layout";

function App() {
    return (
        <div>
            <Router>
                <Layout>
                    <Routes>
                        <Route path={"/"} element={<Home/>}/>
                        <Route path={"/library"} element={<Library/>}/>
                        <Route path={"/account"} element={<Account/>}/>
                    </Routes>
                </Layout>
            </Router>
        </div>
    )
}

export default App
