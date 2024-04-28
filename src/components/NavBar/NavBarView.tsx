import { AuthContext } from '@/context/AuthContext'
import { useRouter } from 'next/router'
import { useContext } from 'react'

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
    <div>
      <nav className="py-3 navbar navbar-expand-lg  fixed-top auto-hiding-navbar" style={{ backgroundColor: '#fff' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {/* <img src="https://t3.ftcdn.net/jpg/05/87/76/66/360_F_587766653_PkBNyGx7mQh9l1XXPtCAq1lBgOsLl6xH.jpg" className='logo' alt="" /> */}
            eventTrack
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleRedirectDashboard}>Analytics</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleRedirectEvents}>Eventos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleRedirectUsers}>Componentes</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Áreas
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Relatórios</a></li>
                  <li><a className="dropdown-item" href="#">Cadastro</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Analitycs</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  ) : ''
  //   <Navbar expand="lg" variant="light" bg="body-tertiary">
  //   <Container fluid>
  //     <Navbar.Toggle aria-controls="navbarSupportedContent">
  //       <FontAwesomeIcon icon={faBars} />
  //     </Navbar.Toggle>
  //     <Navbar.Collapse id="navbarSupportedContent">
  //       <Navbar.Brand href="#">
  //         <Image
  //           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0xVe_G0ym3gpcVKey3ZvjPX9T_GjQPl5m8udDU7LTRg&s"
  //           height="15"
  //           alt="MDB Logo"
  //           loading="lazy"
  //         />
  //       </Navbar.Brand>
  //       <Nav classNameName="me-auto mb-2 mb-lg-0">
  //         <Nav.Link href="#"onClick={handleRedirectDashboard}>Dashboards</Nav.Link>
  //         <Nav.Link href="#" onClick={handleRedirectEvents}><>Eventos</></Nav.Link>
  //         <Nav.Link href="#" onClick={handleRedirectUsers}>Componentes</Nav.Link>
  //       </Nav>
  //       <Nav classNameName="align-items-center">
  //         <Nav.Link href="#" classNameName="me-3">
  //           <FontAwesomeIcon icon={faShoppingCart} />
  //         </Nav.Link>
  //         <NavDropdown
  //           title={
  //             <span classNameName="position-relative">
  //               <FontAwesomeIcon icon={faBell} />
  //               <span classNameName="badge rounded-pill badge-notification bg-danger">1</span>
  //             </span>
  //           }
  //           id="navbarDropdownMenuLink"
  //         >
  //           <NavDropdown.Item href="#">Some news</NavDropdown.Item>
  //           <NavDropdown.Item href="#">Another news</NavDropdown.Item>
  //           <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
  //         </NavDropdown>
  //         <NavDropdown
  //           title={
  //             <Image
  //               src={ user?.imageUrl ? user.imageUrl : 'https://secure.gravatar.com/avatar/a24efa549d1419038169dd9635e703b0?s=256&d=mm&r=g'}
  //               classNameName="rounded-circle"
  //               height="25"
  //               alt="Black and White Portrait of a Man"
  //               loading="lazy"
  //             />
  //           }
  //           id="navbarDropdownMenuAvatar"
  //         >
  //           <NavDropdown.Item href="#">My profile</NavDropdown.Item>
  //           <NavDropdown.Item href="#">Settings</NavDropdown.Item>
  //           <NavDropdown.Item href="#">Logout</NavDropdown.Item>
  //         </NavDropdown>
  //       </Nav>
  //     </Navbar.Collapse>
  //   </Container>
  // </Navbar>

  // ) : ""
}
