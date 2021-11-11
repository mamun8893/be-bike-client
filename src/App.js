import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./Pages/Shared/Navigation/Navigation";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AuthProvider from "./contexts/AuthProvider";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import NotFound from "./Pages/NotFound/NotFound";
import AllBike from "./Pages/AllBike/AllBike";
import BikeDetails from "./Pages/BikeDetils/BikeDetails";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route exact path="/home">
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route path="/register">
              <Register></Register>
              <Footer></Footer>
            </Route>
            <Route path="/login">
              <Login></Login>
              <Footer></Footer>
            </Route>
            <Route path="/all-bikes">
              <AllBike></AllBike>
            </Route>
            <PrivateRoute path="/bike-details/:id">
              <BikeDetails></BikeDetails>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
