import React from 'react'
import App from '../App'
import PropTypes from 'prop-types'

export default function Navbar(props){
    return(
        <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">{props.title}</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">{props.aboutText}</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    )
}


Navbar.propTypes = {
    title:PropTypes.string,
    aboutText:PropTypes.string
}


Navbar.defaultProfTypes={
    title:PropTypes.string,
    aboutText:PropTypes.string
}