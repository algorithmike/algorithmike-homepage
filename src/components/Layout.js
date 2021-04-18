import React from "react"
import { Helmet } from "react-helmet"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const [sideBarIsOpen, setSideBarIsOpen] = React.useState(false)
  const toggleSideBar = () => setSideBarIsOpen(!sideBarIsOpen)
  return (
    <>
      <Helmet>
        <title>Michael Fernandez | Software Engineer</title>
        <meta
          name="description"
          content="Learn about some of Michael Fernandez and some of his work experience, education, and personal projects as a software engineer/developer."
        />
      </Helmet>
      <Navbar toggleSideBar={toggleSideBar} />
      <Sidebar isOpen={sideBarIsOpen} toggleSideBar={toggleSideBar} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
