
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import TopNavBar from './TopNavBar';
import Footer from './Footer';
import Content from './Content';

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn:false
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
        <TopNavBar />
        <Content />
        <Footer />
      </div>
    );
  }



}

export default App;
