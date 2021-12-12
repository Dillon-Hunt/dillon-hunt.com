import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import BlogPost from './components/BlogPost';
import Blog from './components/Blog';
import './styles/App.css';

function App() {
  return (
    <div className="App">
        <Router>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/blog/:id" element={<BlogPost />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
