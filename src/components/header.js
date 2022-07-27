import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {

const [burgerStatus, setBurgerStatus]=useState(false);
  
  return (
    
      <Container>
       
      <a href="/">
        <img src="/images/logo.svg" alt="" />
      </a>
     
      <Menu>
       
          <a href="#12">Model S</a>
          <a href="#2">Model 3</a>
          <a href="#3">Model X</a>
          <a href="#88">Model Y</a>
      </Menu>
      <RightMenu>
        <a href="/">Shop</a>
        <a href="/">Account</a>
        <CustomMenu
          onClick={() => {
            setBurgerStatus(true);
          }}
        />
      </RightMenu>
      
      <BurgerNav show={burgerStatus}>
        <CustomClose
          onClick={() => {
            setBurgerStatus(false);
          }}  
        />
       
        <li>
          <a href="/">Existing Inventory</a>
        </li>
        <li>
          <a href="/">Used Inventory</a>
        </li>
        <li>
          <a href="/">Cybertruck</a>
        </li>
        <li>
          <a href="/">Roadster</a>
        </li>
        <li>
          <a href="/">Existing Inventory</a>
        </li>
        <li>
          <a href="/">Used Inventory</a>
        </li>
        <li>
          <a href="/">Cybertruck</a>
        </li>
       
      </BurgerNav>
    </Container>
    
  )
}
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    padding: 0 10px;
    flex-wrap: nowrap;
    text-transform:uppercase;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
  z-index: 10;
`;

const CustomClose = styled(CloseIcon)`
  align-self: end;
  cursor: pointer;
  margin-right: 10px;
`;

export default Header