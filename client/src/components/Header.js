import React, { Component } from "react";
import { connect } from "react-redux";
import { auth } from "../store/reducers";
////  import { Link } from "react-router-dom";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return <a href="http://localhost:8080/api/auth/login">Login</a>;
      case false:
        return (
          <li>
            <a href="http://localhost:8080/api/auth/login">Login</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="http://localhost:8080/api/auth/logout">Logout</a>
          </li>
        );
    }
  }
  render() {
    console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          LOL
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth: auth
  };
};

export default connect(mapStateToProps)(Header);
