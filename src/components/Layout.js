import React from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const [sideBarIsOpen, setSideBarIsOpen] = React.useState(false);
  const toggleSideBar = () => setSideBarIsOpen(!sideBarIsOpen);
  return (
    <>
      <Navbar toggleSideBar={toggleSideBar}/>
      <Sidebar isOpen={sideBarIsOpen} toggleSideBar={toggleSideBar}/>
      {children}
      <Footer/>
    </>
  )
}

export default Layout
