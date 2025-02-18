
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import TopNavBar from './TopNavBar';
import Footer from './Footer';
import Content from './Content';
import { AuthContextProvider } from './AuthContext';
import UserDashboard from './UserDashboard';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import PassVault from './PassVault';
import Home from './Home';
import CredCategory from './CredCategory';
import CredSubCategory from './CredSubCategory';
import LoginType from './LoginType';
import ManageCred from './ManageCred';
import NotFound from './NotFound';
import DocVault from './DocVault';
import PrivateRoute from './PrivateRoute';
import About from './About';
import Contact from './Contact';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: true
    }
  }

  pageWrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    fontFamily: 'sohne, "Helvetica Neue", Helvetica, Arial, sans-serif'
  };



  render() {
    return (
      <div className='app-content' style={this.pageWrapperStyle}>
        {/* <AuthContextProvider> */}

          <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/user-dashboard' element={<PrivateRoute><UserDashboard /></PrivateRoute>} >
              <Route index element={<PrivateRoute><Home /></PrivateRoute>} />
              <Route path='home' element={<PrivateRoute><Home /></PrivateRoute>} />
              <Route path='passvault' element={<PrivateRoute><PassVault /></PrivateRoute>} >
                <Route path="credCategory" element={<CredCategory />} />
                <Route path="credSubCategory" element={<CredSubCategory />} />
                <Route path="loginType" element={<LoginType />} />
                <Route path="manageCred" element={<ManageCred />} />
                <Route index element={<CredCategory />} />
                <Route path="*" element={<NotFound />} />
              </Route>
              <Route path='docvault' element={<PrivateRoute><DocVault /></PrivateRoute>} />
              <Route path='about' element={<PrivateRoute><About /></PrivateRoute>} />
              <Route path='contact' element={<PrivateRoute><Contact /></PrivateRoute>} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route index element={<LoginPage />} />
          </Routes>

          {/* <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/user-dashboard' element={<UserDashboard />} >
              <Route index element={<Home />} />
              <Route path='home' element={<Home />} />
              <Route path='passvault' element={<PassVault />} >
                <Route path="credCategory" element={<CredCategory />} />
                <Route path="credSubCategory" element={<CredSubCategory />} />
                <Route path="loginType" element={<LoginType />} />
                <Route path="manageCred" element={<ManageCred />} />
                <Route index element={<CredCategory />} />
                <Route path="*" element={<NotFound />} />
              </Route>
              <Route path='docvault' element={<DocVault />} />
              <Route path='about' element={<About />} />
              <Route path='contact' element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route index element={<LoginPage />} />
          </Routes> */}
        {/* </AuthContextProvider> */}

      </div>

    );
  }



}

export default App;
