import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ProfileIcon from '../images/profileIcon.svg';
import SearchBar from './SearchBar';

function Header({ titlePage }) {
  const titleNoSearch = ['Favorite Recipes', 'Profile', 'Done Recipes'];
  const verification = titleNoSearch.some((title) => title === titlePage);
  console.log(verification);
  return (
    <div>
      <h1 data-testid="page-title">{titlePage}</h1>
      <Link to="/profile">
        <img
          src={ ProfileIcon }
          alt="icon-profile"
          data-testid="profile-top-btn"
        />
      </Link>
      {!verification && (
        <SearchBar />
      )}
    </div>
  );
}

Header.propTypes = {
  titlePage: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  titlePage: state.title.title,
});

export default connect(mapStateToProps)(Header);
