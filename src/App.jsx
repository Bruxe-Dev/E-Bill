import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import HowItWorksPage from './pages/HowItWorksPage';

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }

  html {
    scroll-behavior: smooth;
    background-color: #000;
  }

  body {
    margin: 0;
    min-height: 100vh;
    background: #000;
    color: #fff;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    overflow-x: hidden;
  }

  button {
    font: inherit;
  }
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <PageContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
        </Routes>
      </PageContainer>
    </BrowserRouter>
  );
}

export default App;
