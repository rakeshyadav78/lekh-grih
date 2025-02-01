const Footer = () => {


  const footerStyle = {
    // backgroundColor: "#333",
    // color: "white",
    textAlign: "center",
    padding: "10px",
    position: "relative",
    bottom: "0",
    width: "100%",
    borderTop: '1px solid rgba(0,0,0,0.8)',
  };
    return (
        <div className="footer" style={footerStyle}>
            <h1>this is my footer</h1>
        </div>
    )
}

export default Footer;