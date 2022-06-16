import { Route, Routes } from "react-router-dom";

import Landing from "./components/ShowCase_LandingPage/App";
import Login from "./components/Login/index";
import JoinUsB from "./components/Join us pages/index";
import RegisterBusiness from "./components/Register_Business/registerbusiness";
import RegisterPersonal from "./components/Register_Personal/registerpersonal";
import DashBoardBusiness from "./components/ShowcaseBusiness/App";
import DashBoardUser from "./components/ShowcaseUser/App";
import Reset from "./components/Reset-password/index";
import Reset_password_by_email_address from "./components/Reset_password_by email_address/index";
import Subscription from "./components/Subscription page/index";
import CYP2 from "./components/Complete your profile ph.no page/index";
import Profile1 from "./components/ChangeNumber/profile1";
import Profile2 from "./components/ChangeNumber/profile2";
import Profile3 from "./components/ChangeNumber/profile3";
import GSP from "./components/ChangeNumber/gsp";
import CompleteProfileOTP from "./components/Complete your profie/business";
import Setup_completed from "./components/Setup-completed";
import NavigationBar from "./components/ShowCase_Nav/src/App.js";
import EditPage from "./components/EditPage/index";
import NewFooter from "./components/Footer/index";
import NormalProfile from "./components/Acount of normal profile/normal profile";
import ChangePassword from "./components/Acount of normal profile/normal profile.1";

function App() {
  return (
    <>
      <NavigationBar />

      <Routes>
        <Route path="" element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="joinus" element={<JoinUsB />} />
        {/* Protected Routes For Users */}
        <Route path="dashboardBusiness" element={<DashBoardBusiness />} />
        <Route path="dashboardUser" element={<DashBoardUser />} />

        <Route path="personal">
          <Route path="register" element={<RegisterPersonal />} />
          <Route path="updateProfile" element={<NormalProfile />} />
          <Route path="changePassword" element={<ChangePassword />} />
        </Route>
        {/* Protected Routes Business Users */}
        <Route path="business">
          <Route path="register" element={<RegisterBusiness />} />
          <Route path="cyp2" element={<CYP2 />} />

          <Route path="otp" element={<CompleteProfileOTP />} />
          <Route path="sc" element={<Setup_completed />} />

          <Route path="profile">
            <Route path="p1" element={<Profile1 />} />
            <Route path="p2" element={<Profile2 />} />
            <Route path="p3" element={<Profile3 />} />
            <Route path="gsp" element={<GSP />} />
          </Route>
        </Route>
        {/* Common Routes */}
        <Route path="subs" element={<Subscription />} />
        <Route path="reset" element={<Reset />} />
        <Route path="r" element={<Reset_password_by_email_address />} />

        <Route path="edit" element={<EditPage />} />
      </Routes>
      <NewFooter />
    </>
  );
}

export default App;
