import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import BlogPost from './components/BlogPost';
import Blog from './components/Blog';
import Hero from './components/Hero';
import './styles/App.css';

function App() {
  return (
    <div className="App">
        <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/blog/:url" element={<BlogPost />} />
          <Route path='*' element={<Hero title="404" subtitle="Page Not Found" />} />
        </Routes>
        </Router>
    </div>
  );
}

export default App;
