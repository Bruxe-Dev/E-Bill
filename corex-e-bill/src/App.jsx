import styled, { createGlobalStyle } from 'styled-components';
import Navbar from './navbar';
import Hero from './hero';
import Workflow from './worlflow';
import Features from './features';

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    min-height: 100vh;
    background: radial-gradient(circle at top, rgba(56, 189, 248, 0.18), transparent 35%), radial-gradient(circle at 20% 0, rgba(59, 130, 246, 0.12), transparent 24%), #050816;
    color: #f8fafc;
    font-family: 'Inter', sans-serif;
  }

  button {
    font: inherit;
  }
`;

const Page = styled.div`
  min-height: 100vh;
`;

const CTA = styled.section`
  padding: 80px 24px;
  max-width: 1200px;
  margin: 0 auto;
`;

const CTABox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  padding: 42px 40px;
  border-radius: 32px;
  border: 1px solid rgba(148, 163, 184, 0.12);
  background: rgba(15, 23, 42, 0.75);
  box-shadow: 0 40px 120px rgba(15, 23, 42, 0.3);
`;

const CTALeft = styled.div`
  max-width: 680px;
`;

const CTATitle = styled.h2`
  margin: 0 0 16px;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.05;
`;

const CTAText = styled.p`
  color: #94a3b8;
  font-size: 1rem;
  line-height: 1.8;
  margin: 0;
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  padding: 16px 32px;
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
  color: #0f172a;
  background: #60a5fa;
  transition: transform 0.25s ease, background 0.25s ease;

  &:hover {
    background: #3b82f6;
    transform: translateY(-2px);
  }
`;

const CTAStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(140px, 1fr));
  gap: 16px;
  width: min(100%, 420px);
`;

const StatCard = styled.div`
  padding: 20px 22px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 8px;
`;

const StatLabel = styled.div`
  color: #94a3b8;
  font-size: 0.9rem;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Page>
        <Navbar />
        <Hero />
        <Workflow />
        <Features />
        <CTA>
          <CTABox>
            <CTALeft>
              <CTATitle>Ready to bring smart retail billing to Rwanda?</CTATitle>
              <CTAText>
                CoreX Systems combines AI vision, instant weighing, and frictionless payment in one powerful checkout experience. Launch faster with a sleek interface designed for modern stores.
              </CTAText>
              <CTAButton href="#how">Request Demo</CTAButton>
            </CTALeft>
            <CTAStats>
              <StatCard>
                <StatValue>98.7%</StatValue>
                <StatLabel>Accuracy</StatLabel>
              </StatCard>
              <StatCard>
                <StatValue>&lt; 2 sec</StatValue>
                <StatLabel>Recognition Time</StatLabel>
              </StatCard>
              <StatCard>
                <StatValue>24/7</StatValue>
                <StatLabel>Ready In Store</StatLabel>
              </StatCard>
            </CTAStats>
          </CTABox>
        </CTA>
      </Page>
    </>
  );
}

export default App;
