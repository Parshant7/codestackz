import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Root from './components/root/root'
import Home from './pages/Home'
import Contactus from './pages/Contactus'
import Aboutus from './pages/Aboutus'
import Webdev from './pages/webdev'

const GetRoutes2  = () => {

    return (
        <Router>
          <Routes>
            <Route path="/" element={<Root />}>
              <Route path="/" element={<Home />} />
              <Route path="/contactus" element={<Contactus />} />
              <Route path="/aboutus" element={<Aboutus />} />
              <Route path="/services/webdevelopment" element={<Webdev />} />
            </Route>
          </Routes>
        </Router>
      );
}

export default GetRoutes2;