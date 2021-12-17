import "./App.css";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { withRouter } from "./utils/withRouter";
import CityNoProps from "./pages/City";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import authActions from "./redux/actions/authActions";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Admin from "./pages/Admin";

const City = withRouter(CityNoProps);

function App(props) {
  if (!props.userLogged && localStorage.getItem("token")) {
    const userData = JSON.parse(localStorage.getItem("userLogged"));
    const userLS = {
      token: localStorage.getItem("token"),
      ...userData,
    };
    props.forcedLog(userLS);
    props.adminAuth(userLS)
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cities" element={<Cities />} />
          <Route path="*" element={<Home />} />
          <Route path="/City/:id" element={<City />} />
          {!props.userLogged && <Route path="/SignIn" element={<SignIn />} />}
          {!props.userLogged && <Route path="/SignUp" element={<SignUp />} />}
          {Admin && <Route path="/Admin" element={<Admin />} />}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    userLogged: state.authReducer.user,
    userData: state.authReducer.userData,
    Admin: state.authReducer.admin
  };
};

const mapDispatchToProps = {
  forcedLog: authActions.forcedLog,
  adminAuth: authActions.adminAuth
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
