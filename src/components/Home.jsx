import React from "react";

class Home extends React.Component {

    constructor(props) {
        super(props);
        // Initialize state with 'isVisible' set to true
        this.state = {
            isVisible: true,
        };
    }

    toggleVisibility = () => {
        // Toggle the visibility state
        this.setState(prevState => ({
            isVisible: !prevState.isVisible,
        }));
    };

    contentDivStyle = {
        display: "flex",
        justifyContent: "center",  // Horizontally center
        alignItems: "flex-start",   // Align to the top
        // width: "80%",
        // maxWidth: "1200px",         /* Optional: max-width to avoid content stretching too wide */
    };
    render() {
        return (
            <div style={this.contentDivStyle}>
                {/* <h1>Home Component</h1> */}
                <div>
                    <button onClick={this.toggleVisibility}>
                        {this.state.isVisible ? 'Hide' : 'Show'} Div
                    </button>


                    {this.state.isVisible && (
                        <div className="toggle-div">
                            This is a toggled div!
                        </div>
                    )}

                    {!this.state.isVisible && (
                        <div className="toggle-div2">
                            This is a toggled div2!
                        </div>
                    )}
                </div>
            </div >
        )
    }
}

export default Home;