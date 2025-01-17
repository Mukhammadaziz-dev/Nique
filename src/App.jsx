import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Frontpage from './pages/Frontpage/Frontpage'
import Menu from './pages/Menu/Menu'
import Reservation from './pages/Reservation/Reservation'
import Contact from './pages/Contact/Contect'
import Restaurant from './pages/Restaurant/Restaurant'
import Classes from './pages/Classes/Classes'
import WorkShop from './pages/Workshop/Workshop'
import Shop from './pages/Shop/Shop'
import Blog from './pages/Blog/Blog'
import BlogPost from './pages/BlogPost/BlogPost'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
            <Route path="/" element={<Frontpage />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/restaurant" element={<Restaurant />}/>
            <Route path="/classes" element={<Classes />}/>
            <Route path="/workshop" element={<WorkShop />}/>
            <Route path="/shop" element={<Shop />}/>
            <Route path="/blog" element={<Blog />}/>
            <Route path="/blogpost" element={<BlogPost />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App