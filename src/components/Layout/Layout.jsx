import React from "react";

// import navigation and footer components
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
