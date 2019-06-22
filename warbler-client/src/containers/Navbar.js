import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux"; // since it is a container we also want to connect to the redux store

class Navbar extends Component {
  render() {
    return(
      <nav className="navbar navbar-expand">
        <div className="container-fluid">
          <Link to="/" className=""navbar-brand>
             <img src="" alt="Warbler Home"/>
          </Link>
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/signin">Log In</Link></li>
        </ul>
      </nav>

    );
  }
}

function mapStateToProps(state) { // state is from the redux state
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, null)(Navbar);