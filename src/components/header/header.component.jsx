import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.style.scss';

const Header = ({ currentUser, handleSignOut }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={handleSignOut}>
            SIGNOUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGNIN
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps)(Header);
