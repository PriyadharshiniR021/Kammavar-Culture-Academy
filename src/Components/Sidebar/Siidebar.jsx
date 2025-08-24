import { useState, useEffect, useRef } from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import "./SideBar.css"

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navbarRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target) && expanded) {
        setExpanded(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [expanded])

  const handleNavItemClick = () => {
    if (window.innerWidth < 992) {
      setExpanded(false)
    }
  }

  return (
    <Navbar
      ref={navbarRef}
      expand="lg"
      expanded={expanded}
      className={`modern-navbar ${scrolled ? "scrolled" : ""} m-0 p-0`}
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="/" className="brand">
          <div className="d-flex align-items-center">
            <img src="logo.jpg" alt="Logo" className="me-2" style={{
              width: "55px", height: "55px", objectFit: "contain"
            }} />
            <div>
              <p className="m-0 p-0 fw-bold text-light">Kammavar</p>
              <span className="m-0 p-0 d-block fs-12 text-light">Culture Academy</span>
            </div>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
          className="custom-toggler"
        >
          <div className={`hamburger ${expanded ? "active" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">
          <Nav className="mx-auto">
            <a href="/" onClick={handleNavItemClick} className="nav-link fs-14 text-light">Home</a>
            <a href="#about" onClick={handleNavItemClick} className="nav-link fs-14 text-light">Services</a>
            <a href="#skills" onClick={handleNavItemClick} className="nav-link fs-14 text-light">Temples</a>
            <a href="#portfolio" onClick={handleNavItemClick} className="nav-link fs-14 text-light">Membership</a>
            <a href="#contact" onClick={handleNavItemClick} className="nav-link fs-14 text-light">Gallery</a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Sidebar