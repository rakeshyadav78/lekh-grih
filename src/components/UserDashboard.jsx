import React from "react";
import TopNavBar from "./TopNavBar";
import Content from "./Content";
import Footer from "./Footer";
class UserDashboard extends React.Component {

    render() {
        return (
            <>
                <TopNavBar />
                <Content />
                <Footer />
            </>
        )
    }
}

export default UserDashboard;