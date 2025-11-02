import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./assets/css/blog.css";
import "./assets/css/services.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Privacy from "./pages/Privacy";
import BlogPost from "./pages/BlogPost";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
