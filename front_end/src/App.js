import {Route,Routes} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';



import Allmsg from './pages/login-signup/allmsg';
import Profile from './pages/login-signup/profile';
import Settings from './pages/login-signup/settings';

import Homepage from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/login';


import Confirm from './pages/login-signup/confirm';
import Schat from './pages/login-signup/schat';

import GlobeNav from './components/Navs/GlobeNav';



function App() {
  return (<section>
  <GlobeNav />
  <Routes>
      
      <Route exact path="/startchat" element={<Schat />} />
      <Route exact path="/" element={<Homepage/>}  />
      <Route exact path="/Sign-up" element={<Signup  />} />
      <Route exact path="/Log-in" element={<Login />} />
      
        <Route exact path="/Messages" element={<Allmsg />} />
        <Route exact path="/Profile" element={<Profile />} />
        <Route exact path="/Settings" element={<Settings />}  />
        <Route exact path="/complete" element={<Confirm />} />
    </Routes>
    </section>
    );
}

export default App;
