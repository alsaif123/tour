import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Home/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Places from "./components/Home/Places/Places";
import Footer from "./components/Home/Footer/Footer";
import AboutUs from "./components/Home/AboutUs/AboutUs";
import NotFound from "./components/Home/NotFound/NotFound";
import Dashboard from "./components/Home/Dashboard/Dashboard";
import Login from "./components/Home/Login/Login";
import AuthProvider from './context/AuthProvider';
import PlaceDetails from './components/Home/Place/PlaceDetails';
import PrivateRoute from './Firebase/PrivateRoute/PrivateRoute';


function App() {
  return (
    <>
   <AuthProvider>
   <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/places" element={<Places />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/placedetails/:id" element={<PlaceDetails/>} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer></Footer>
      </BrowserRouter>
   </AuthProvider>
      
    </>
  );
}

export default App;
