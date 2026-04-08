import styled, { createGlobalStyle } from 'styled-components';
import Navbar from './navbar';
import Hero from './hero';

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  body {
    margin: 0;
    padding: 0;
    background-color: #0a0f1a;
    font-family: 'Inter', sans-serif;
    color: white;
    scroll-behavior: smooth;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero />
    </>
  );
}

export default App;
