import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  var navColor = {
    backgroundColor: 'pink',
    color: 'black',
    fontWeight: 'bold'
  };
  var navTextStyle ={
    color: 'black',
    fontWeight: 'bold'
  };
  var iconStyles ={
    height: '50px',
    width: '50px',
    paddingTop: '10px'
  };

  return(
    <header  className="navbar-fixed">
      <nav>
        <div style={navColor} className="nav-wrapper">
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link style={navTextStyle} to='PostList'>PostList</Link></li>
            <li><Link style={navTextStyle} to='NewPost'>NewPost</Link></li>
            <li><Link style={navTextStyle} to='/'>Home</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;