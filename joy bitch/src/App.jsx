import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import About from "./pages/About/About";
import FindBloods from "./pages/FindBlood/FindBloods";
import AuthProtected from "./routes/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="find-bloods"
          element={
            <AuthProtected>
              <FindBloods />
            </AuthProtected>
          }
        />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
