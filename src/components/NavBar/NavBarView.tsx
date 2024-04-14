import { AuthContext } from '@/context/AuthContext'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'


export function NavBarView() {
  const { user, isAuthenticated } = useContext(AuthContext)
  const Router = useRouter()
 function handleOnclickRedirect() {
  Router.push('/Event/EventView')
 }


  return isAuthenticated ? (<nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
    <div className="container-fluid">
      <button
        data-mdb-collapse-init
        className="navbar-toggler"
        type="button"
        data-mdb-target="#navBarNav"
        aria-controls="navBarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </button>

      <div className="" id="navBarNav">
        <span onClick={handleOnclickRedirect}>Eventos</span>
        {/* <a className="navbar-brand mt-2 mt-lg-0" href="#">
          <img
            src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
            height="15"
            alt="MDB Logo"
            loading="lazy"
          />
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Dashboard</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Team</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Projects</a>
          </li>
        </ul> */}
      </div>

      <div className="d-flex align-items-center">
        {/* <div className="dropdown">
          <a
            data-mdb-dropdown-init
            className="text-reset me-3 dropdown-toggle hidden-arrow"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            aria-expanded="false"
          >
            <i className="fas fa-bell"></i>
            <span className="badge rounded-pill badge-notification bg-danger">1</span>
          </a>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <li>
              <a className="dropdown-item" href="#">Some news</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Another news</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Something else here</a>
            </li>
          </ul>
        </div> */}
        <div className="dropdown">
          <a
            data-mdb-dropdown-init
            className="dropdown-toggle d-flex align-items-center hidden-arrow"
            href="#"
            id="navbarDropdownMenuAvatar"
            role="button"
            aria-expanded="false"
          >
            <img
              src={user?.imageUrl ? user.imageUrl : 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.webp'}
              className="rounded-circle"
              height="25"
              alt=""
              loading="lazy"
            />
          </a>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuAvatar"
          >
            <li>
              <a className="dropdown-item" href="#">My profile</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Settings</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>) : ''
}