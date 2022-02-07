import './App.css';
import React , {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProtectedRoute from './component/test_page/protectedRoute';
import Home from './component/home_page/home';
import About from './component/about_page/about';
import Login from './component/login_page/login';
import Test from './component/test_page/test';

function App() {

  const [isAuth, setIsAuth] = useState(false);

  const Logined = () => { setIsAuth(true) };
  const Logouted = () => { setIsAuth(false) };

  return (
    <div className="App">
      <Router> 
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/home" exact element={<Home />} />
            <Route path="/about" exact element={<About />}/>
            <Route path="/login" exact element={<Login authy={Logined} />}/>
            <Route path="/test" element={ <ProtectedRoute auth={isAuth} > <Test authy={Logouted} /> </ProtectedRoute>} />
          </Routes> 
      </Router>
    </div>
  );
}

export default App;
