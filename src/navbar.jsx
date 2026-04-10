import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3rem;
  background-color: #000;
  border-bottom: 1px solid #222;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
`;

const LogoBox = styled.div`
  width: 40px;
  height: 40px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  color: #000;
  font-size: 1.5rem;
`;

const BrandName = styled.span`
  font-size: 1.5rem;
  font-weight: 900;
  color: #fff;
  letter-spacing: -1px;
  text-transform: uppercase;
  
  span {
    font-weight: 400;
    color: #888;
    margin-left: 6px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 3rem;

  @media (max-width: 768px) {
    display: none; 
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.$active ? '#fff' : '#666'};
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }
`;

const DemoButton = styled.button`
  background-color: transparent;
  color: #fff;
  padding: 1rem 2rem;
  border: 1px solid #fff;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

export default function Navbar() {
    const location = useLocation();

    return (
        <Nav>
            <LogoWrapper to="/">
                <LogoBox>C</LogoBox>
                <BrandName>CoreX<span>System</span></BrandName>
            </LogoWrapper>

            <NavLinks>
                <NavLink to="/" $active={location.pathname === '/'}>Vision</NavLink>
                <NavLink to="/features" $active={location.pathname === '/features'}>Tech Specs</NavLink>
                <NavLink to="/how-it-works" $active={location.pathname === '/how-it-works'}>Operations</NavLink>
            </NavLinks>

            <DemoButton>Initialize Demo</DemoButton>
        </Nav>
    );
}