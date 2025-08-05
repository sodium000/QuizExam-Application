import { Route, Routes } from "react-router-dom";
import Homepage from "./Components/pages/Homepage.jsx";
import "./styles/App.css";
import Layout from "./Components/Layout";
import Login from "./Components/pages/Login";
import Quiz from "./Components/pages/Quiz";
import Result from "./Components/pages/Result";
import Signup from "./Components/pages/Signup";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/Result" element={<Result />} />
      </Routes>
    </Layout>
    
  );
};

export default App;
