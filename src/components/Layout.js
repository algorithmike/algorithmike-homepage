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
          content="Learn details about Michael Fernandez as a software engineer including his work experience, education, and personal projects."
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
