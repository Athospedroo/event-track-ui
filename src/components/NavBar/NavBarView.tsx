import { AuthContext } from '@/context/AuthContext'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { Navbar, Nav, NavDropdown, Container, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export function NavBarView() {
  const { user, isAuthenticated } = useContext(AuthContext)
  const Router = useRouter()
  function handleRedirectEvents() {
    Router.push('/Event/EventView')
  }
  function handleRedirectDashboard() {
    Router.push('/Dashboard')
  }
  function handleRedirectUsers() {
    Router.push('/Users')
  }

  return isAuthenticated ? (
    <Navbar expand="lg" variant="light" bg="body-tertiary">
    <Container fluid>
      <Navbar.Toggle aria-controls="navbarSupportedContent">
        <FontAwesomeIcon icon={faBars} />
      </Navbar.Toggle>
      <Navbar.Collapse id="navbarSupportedContent">
        <Navbar.Brand href="#">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0xVe_G0ym3gpcVKey3ZvjPX9T_GjQPl5m8udDU7LTRg&s"
            height="15"
            alt="MDB Logo"
            loading="lazy"
          />
        </Navbar.Brand>
        <Nav className="me-auto mb-2 mb-lg-0">
          <Nav.Link href="#"onClick={handleRedirectDashboard}>Dashboards</Nav.Link>
          <Nav.Link href="#" onClick={handleRedirectEvents}><>Eventos</></Nav.Link>
          <Nav.Link href="#" onClick={handleRedirectUsers}>Componentes</Nav.Link>
        </Nav>
        <Nav className="align-items-center">
          <Nav.Link href="#" className="me-3">
            <FontAwesomeIcon icon={faShoppingCart} />
          </Nav.Link>
          <NavDropdown
            title={
              <span className="position-relative">
                <FontAwesomeIcon icon={faBell} />
                <span className="badge rounded-pill badge-notification bg-danger">1</span>
              </span>
            }
            id="navbarDropdownMenuLink"
          >
            <NavDropdown.Item href="#">Some news</NavDropdown.Item>
            <NavDropdown.Item href="#">Another news</NavDropdown.Item>
            <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title={
              <Image
                src={ user?.imageUrl ? user.imageUrl : 'https://secure.gravatar.com/avatar/a24efa549d1419038169dd9635e703b0?s=256&d=mm&r=g'}
                className="rounded-circle"
                height="25"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
            }
            id="navbarDropdownMenuAvatar"
          >
            <NavDropdown.Item href="#">My profile</NavDropdown.Item>
            <NavDropdown.Item href="#">Settings</NavDropdown.Item>
            <NavDropdown.Item href="#">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  ) : ""
}

// isAuthenticated ? (<nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
  //   <div className="container-fluid">
  //     <button
  //       data-mdb-collapse-init
  //       className="navbar-toggler"
  //       type="button"
  //       data-mdb-target="#navBarNav"
  //       aria-controls="navBarNav"
  //       aria-expanded="false"
  //       aria-label="Toggle navigation"
  //     >
  //       <i className="fas fa-bars"></i>
  //     </button>

  //     <div className="" id="navBarNav">
  //       <span onClick={handleOnclickRedirect}>Eventos</span>
  //       {/* <a className="navbar-brand mt-2 mt-lg-0" href="#">
  //         <img
  //           src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
  //           height="15"
  //           alt="MDB Logo"
  //           loading="lazy"
  //         />
  //       </a>
  //       <ul className="navbar-nav">
  //         <li className="nav-item">
  //           <a className="nav-link" href="#">Dashboard</a>
  //         </li>
  //         <li className="nav-item">
  //           <a className="nav-link" href="#">Team</a>
  //         </li>
  //         <li className="nav-item">
  //           <a className="nav-link" href="#">Projects</a>
  //         </li>
  //       </ul> */}
  //     </div>

  //     <div className="d-flex align-items-center">
  //       {/* <div className="dropdown">
  //         <a
  //           data-mdb-dropdown-init
  //           className="text-reset me-3 dropdown-toggle hidden-arrow"
  //           href="#"
  //           id="navbarDropdownMenuLink"
  //           role="button"
  //           aria-expanded="false"
  //         >
  //           <i className="fas fa-bell"></i>
  //           <span className="badge rounded-pill badge-notification bg-danger">1</span>
  //         </a>
  //         <ul
  //           className="dropdown-menu dropdown-menu-end"
  //           aria-labelledby="navbarDropdownMenuLink"
  //         >
  //           <li>
  //             <a className="dropdown-item" href="#">Some news</a>
  //           </li>
  //           <li>
  //             <a className="dropdown-item" href="#">Another news</a>
  //           </li>
  //           <li>
  //             <a className="dropdown-item" href="#">Something else here</a>
  //           </li>
  //         </ul>
  //       </div> */}
  //       <div className="dropdown">
  //         <a
  //           data-mdb-dropdown-init
  //           className="dropdown-toggle d-flex align-items-center hidden-arrow"
  //           href="#"
  //           id="navbarDropdownMenuAvatar"
  //           role="button"
  //           aria-expanded="false"
  //         >
  //           <img
  //             src={user?.imageUrl ? user.imageUrl : 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.webp'}
  //             className="rounded-circle"
  //             height="25"
  //             alt=""
  //             loading="lazy"
  //           />
  //         </a>
  //         <ul
  //           className="dropdown-menu dropdown-menu-end"
  //           aria-labelledby="navbarDropdownMenuAvatar"
  //         >
  //           <li>
  //             <a className="dropdown-item" href="#">My profile</a>
  //           </li>
  //           <li>
  //             <a className="dropdown-item" href="#">Settings</a>
  //           </li>
  //           <li>
  //             <a className="dropdown-item" href="#">Logout</a>
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //   </div>
  // </nav>) : ''