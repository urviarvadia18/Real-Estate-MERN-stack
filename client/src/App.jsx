import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import CreateListing from './pages/CreateListing';
import AdminLogin from './pages/AdminLogin';
import AdminHome from './pages/AdminHome';
import AdminUsers from './pages/AdminUsers';
import AdminProperties from './pages/AdminProperties';
import UpdateListing from './pages/UpdateListing';
import Listing from './pages/Listing';
import Search from './pages/Search';
import Contact from './pages/Contactus';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MyProperty from './pages/MyProperty';
import AdminRentProperties from './pages/AdminRentProperties';
import AdminSaleProperties from './pages/AdminSaleProperties';
import CreateProperty from './pages/CreateProperty';
import SeeProperty from './pages/SeeProperty';
import SignInOtp from './pages/SignInOtp';

  


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in-otp' element={<SignInOtp />} />

        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/search' element={<Search />} />
        <Route path='/adminlogin' element={<AdminLogin/>} />
        <Route path='/adminhome' element={<AdminHome/>} />
        <Route path='/adminhome' element={<AdminProperties/>} />
        <Route path='/adminusers' element={<AdminUsers/>} />
        <Route path='/rentProperty' element={<AdminRentProperties/>} />
        <Route path='/sellProperty' element={<AdminSaleProperties/>} />
        
        <Route path='/createproperty' element={<CreateProperty/>} />
        <Route path='/seeproperty' element={<SeeProperty/>} />
        <Route path='/myproperty' element={<MyProperty/>} />
       
        <Route path='/myproperty' element={<MyProperty/>} />
        <Route path='/listing/:listingId' element={<Listing />} />
        

        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/create-listing' element={<CreateListing />} />
          <Route path='/update-listing/:listingId' element={<UpdateListing />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
