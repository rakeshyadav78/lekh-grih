import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import PassVault from "./PassVault";
import DocVault from "./DocVault";
import NotFound from "./NotFound";
import CredCategory from "./CredCategory";
import ManageCred from "./ManageCred";

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

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/passvault' element={<PassVault />} >
          <Route path="credCategory" element={<CredCategory />} />
          <Route path="manageCred" element={<ManageCred />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path='/docvault' element={<DocVault />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  )
}

export default Content;