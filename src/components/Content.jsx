import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import PassVault from "./PassVault";
import DocVault from "./DocVault";

const Content = () => {


  const contentDivStyle = {
    content: 'flex',
    flex: '1',
    // justifyContent: 'center', // Center content horizontally
    // alignItems: 'center',
    // height: '100vh'           // Ensure the container has full viewport height
    // Center content vertically
  };

  return (
    <div className="page-content" style={contentDivStyle}>
        {/* <p>Centered content</p> */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/passvault' element={<PassVault />} />
        <Route path='/docvault' element={<DocVault />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="*" element={<Home />} />

      </Routes>
    </div>
  )
}

export default Content;