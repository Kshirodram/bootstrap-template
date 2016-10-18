import React from 'react';
const NavBar = (props) => (
      <nav className={"navbar"}>
      <ul >
      {props.list.map((item,index) => <li key={index}><a href="#" className={"navbar-link"}>{item}</a></li>)}
      </ul>
      </nav>
    );

export default NavBar;
