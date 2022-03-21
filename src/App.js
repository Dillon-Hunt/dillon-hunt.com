import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './styles/App.css';
const Home = lazy(() => import('./components/Home'));
const BlogPost = lazy(() => import('./components/BlogPost'));
const Blog = lazy(() => import('./components/Blog'));

function App() {
  return (
    <div className="App">
        <Router>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/blog/:url" element={<BlogPost />} />
            <Route path='*' element={<Hero title="404" subtitle="Page Not Found" />} />
          </Routes>
        </Suspense>
        </Router>
    </div>
  );
}

export default App;
