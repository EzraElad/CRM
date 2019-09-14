import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class Navbar extends Component {

  render() {
    return (
      <div className="navbar dib bg-black br3 pa3 ma2 bw2 shadow-5 ">
        <Link to='/' className='link'>Clients</Link>
        <Link to='/actions' className='link'>Actions</Link>
        <Link to='/analytics'className='link'>Analytics</Link>
      </div>
    );
  }
}

export default Navbar;
