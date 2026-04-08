import styled from 'styled-components';

// --- STYLED COMPONENTS (The CSS) ---

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2.5rem;
  background-color: #0a0f1a;
  border-bottom: 1px solid #1e293b;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LogoBox = styled.div`
  width: 32px;
  height: 32px;
  background-color: #2563eb;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: white;
`;

const BrandName = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  letter-spacing: -0.5px;
  
  span {
    font-size: 0.7rem;
    color: #3b82f6;
    text-transform: uppercase;
    margin-left: 4px;
    letter-spacing: 2px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;

  @media (max-width: 768px) {
    display: none; // Hide on mobile for now
  }
`;

const NavLink = styled.a`
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: white;
  }
`;

const DemoButton = styled.button`
  background-color: #2563eb;
  color: white;
  padding: 0.6rem 1.25rem;
  border-radius: 9999px;
  border: none;
  font-size: 0.875rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.2);

  &:hover {
    background-color: #1d4ed8;
    transform: translateY(-2px);
  }
`;

// --- THE ACTUAL COMPONENT ---

export default function Navbar() {
    return (
        <Nav>
            <LogoWrapper>
                <LogoBox>X</LogoBox>
                <BrandName>CoreX <span>Systems</span></BrandName>
            </LogoWrapper>

            <NavLinks>
                <NavLink href="#home">Home</NavLink>
                <NavLink href="#features">Features</NavLink>
                <NavLink href="#how">How It Works</NavLink>
                <NavLink href="#team">Team</NavLink>
            </NavLinks>

            <DemoButton>Request Demo</DemoButton>
        </Nav>
    );
}