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
import BookingReview from './Components/Review/BookingReview/BookingReview'
import DashBoard from './Components/DashBoard/DashBoard/DashBoard';
import Login from './Components/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
;


function App() {

  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            {/* normal routes  */}
            <Route exact path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />

            {/* private-routeas  */}
            <Route element={<PrivateRoute />} >
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/review" element={<BookingReview />} />
              <Route path="/dashBoard/*" element={<DashBoard />} />
            </Route>
            
            {/* all-match and error route  */}
            <Route path="/" element={<Home />} />
            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}


export default App;
