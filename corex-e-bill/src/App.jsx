import styled, { createGlobalStyle } from 'styled-components';
import Navbar from './navbar';

// This sets the background for the whole website
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #0a0f1a;
    font-family: 'Inter', -apple-system, sans-serif;
    color: white;
  }
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <MainContent>
        <h1>Welcome to CoreX</h1>
        <p>Ready to build the future of Rwanda's retail.</p>
      </MainContent>
    </>
  );
}

export default App;