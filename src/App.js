import './styles/App.css';

import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import { useEffect, useState } from 'react'

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC8qYtDZVQWGTGW-8oHg60zVQcnRfQ07lg",
  authDomain: "dillon-hunt.firebaseapp.com",
  projectId: "dillon-hunt",
  storageBucket: "dillon-hunt.appspot.com",
  messagingSenderId: "432420616775",
  appId: "1:432420616775:web:288fc6bcffb14d94e80f62",
  measurementId: "G-B8L7K9PQ9L"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore()
//const analytics = getAnalytics(app);

const Home = lazy(() => import('./components/Home'))
const BlogPost = lazy(() => import('./components/BlogPost'))
const Blog = lazy(() => import('./components/Blog'))

function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    projects.length === 0 && getDocs(query(collection(database, 'previews'), orderBy('timestamp', 'desc'))).then(snapshot => {
      setProjects(snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })))
    })
  }, [setProjects, projects])

  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Suspense fallback={<p className='App__Loading'>Loading...</p>}>
          <Routes>
            <Route exact path='/' element={<Home projects={projects} />} />
            <Route exact path='/blog' element={<Blog projects={projects} />} />
            <Route exact path='/blog/:url' element={<BlogPost />} />
            <Route path='*' element={<Hero title='404' subtitle='Page Not Found' />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
