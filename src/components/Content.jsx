import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import PassVault from "./PassVault";
import DocVault from "./DocVault";
import NotFound from "./NotFound";
import CredCategory from "./CredCategory";
import ManageCred from "./ManageCred";
import CredSubCategory from "./CredSubCategory";
import LoginType from "./LoginType";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "./LoginPage";

const Content = () => {


  const contentDivStyle = {
    // display: "flex",
    // justifyContent: "center",  // Horizontally center
    // alignItems: "flex-start",   // Align to the top
    height: "100vh",            // Full viewport height
    margin: 0,
    paddingTop: "3px",
    // width: "80%",
    // maxWidth: "1200px",         /* Optional: max-width to avoid content stretching too wide */


  };

  return (
    <div className="page-content" style={contentDivStyle}>
      {/* <p>Centered content</p> */}

      {/* <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/passvault' element={<PassVault />} >
          <Route path="credCategory" element={<CredCategory />} />
          <Route path="credSubCategory" element={<CredSubCategory />} />
          <Route path="loginType" element={<LoginType />} />
          <Route path="manageCred" element={<ManageCred />} />
          <Route index element={<CredCategory />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path='/docvault' element={<DocVault />} />
        <Route path='/about' element={<PrivateRoute><About /></PrivateRoute>} />
        <Route path='/contact' element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes> */}
      <Outlet/>
    </div>
  )
}

export default Content;