import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Appointment from './Components/Appointments/Appointment/Appointment';
import Review from './Components/Review/Review';
import DashBoard from './Components/DashBoard/DashBoard/DashBoard';
import Login from './Components/Login/Login';
import AuthProvider from './Context/AuthProvider';


function App() {

  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="review" element={<Review />} />
            <Route path="/dashBoard/*" element={<DashBoard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}


export default App;
