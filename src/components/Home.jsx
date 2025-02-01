import React from "react";

class Home extends React.Component{
    contentDivStyle = {
        display: "flex",
        justifyContent: "center",  // Horizontally center
        alignItems: "flex-start",   // Align to the top

        // width: "80%",
        // maxWidth: "1200px",         /* Optional: max-width to avoid content stretching too wide */
    
    
      };
    render(){
        return(
            <div style={this.contentDivStyle}>
                <h1>Home Component</h1>
            </div>
        )
    }
}

export default Home;