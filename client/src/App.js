import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home.js';
import Signin from './components/signin/Signin.js';
import Signup from './components/signup/Signup.js';
import Profile from './components/profile/Profile.js';
import Username from './components/username/Username.js';
import PageNotFound from './components/pageNotFound/PageNotFound.js';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/username' element={<Username />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
