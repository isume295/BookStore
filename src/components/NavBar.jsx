/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import PersonIcon from '@mui/icons-material/Person';

export default function NavBar() {
  return (
    <Div>
      <div className="nav-container">
        <span className="logo">Bookstore CMS</span>
        <ul>
          <li><Link className="link" to="/">books</Link></li>
          <li><Link className="link" to="/categories">catagories</Link></li>
        </ul>
      </div>
      <div className="profile">
        <PersonIcon />
      </div>
    </Div>
  );
}

const Div = styled.div`
width: 100%;
height: 5.938rem;
background-color: #fff;
display: flex;
justify-content: space-between;
align-items: center;
padding: 1.438rem 6.188rem 1.688rem 6.25rem;
.nav-container{
    display: flex;
    gap: 1.5rem;
    ul{
        list-style: none;
        display: flex;
        gap: 1.5rem;
        align-items: center;
        .link{
            text-decoration: none;
            color: #121212;
            font-size: 1rem;
            letter-spacing: 1.9px;
            font-family: Montserrat;
        }
    }
}
.logo {
    font-size: 1.875rem;
    font-family: Montserrat;
    font-weight: bold;
    color:#0290ff;
}
.profile{
  width: 2.813rem;
  height: 2.813rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0290ff;
  border-radius: 50%;
  border: solid 1px #e8e8e8;
}
`;
