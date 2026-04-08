import styled, { keyframes } from 'styled-components';

// --- ANIMATIONS ---
const pulse = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.5); opacity: 0; }
  100% { transform: scale(1); opacity: 0; }
`;

// --- STYLED COMPONENTS ---

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  padding: 6px 16px;
  border-radius: 100px;
  margin-bottom: 32px;
  color: #60a5fa;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const Dot = styled.span`
  height: 8px;
  width: 8px;
  background-color: #3b82f6;
  border-radius: 50%;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    border-radius: 50%;
    background-color: #3b82f6;
    animation: ${pulse} 2s infinite;
  }
`;

const Title = styled.h1`
  font-size: clamp(3rem, 8vw, 5.5rem);
  font-weight: 900;
  line-height: 0.9;
  margin-bottom: 24px;
  letter-spacing: -2px;

  span {
    background: linear-gradient(90deg, #60a5fa, #4f46e5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Subtitle = styled.p`
  color: #94a3b8;
  font-size: 1.125rem;
  max-width: 600px;
  line-height: 1.6;
  margin-bottom: 40px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  @media (max-width: 480px) { flex-direction: column; width: 100%; }
`;

const PrimaryButton = styled.button`
  background: white;
  color: black;
  border: none;
  padding: 16px 32px;
  border-radius: 100px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;
  &:hover { background: #e2e8f0; transform: translateY(-2px); }
`;

const SecondaryButton = styled.button`
  background: #0f172a;
  color: white;
  border: 1px solid #1e293b;
  padding: 16px 32px;
  border-radius: 100px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;
  &:hover { border-color: #475569; background: #1e293b; }
`;

const VideoMockup = styled.div`
  margin-top: 80px;
  width: 100%;
  max-width: 900px;
  aspect-ratio: 16 / 9;
  background: #111827;
  border: 1px solid #1e293b;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 50px rgba(37, 99, 235, 0.1);

  &::before {
    content: '[ CAMERA FEED INITIALIZING... ]';
    color: #334155;
    font-family: monospace;
  }
`;

// --- THE COMPONENT ---

export default function Hero() {
    return (
        <HeroContainer id="home">
            <Badge>
                <Dot /> WithinTech Rwanda 2026 Prototype
            </Badge>

            <Title>
                INTELLIGENT <br />
                <span>E-BILLING.</span>
            </Title>

            <Subtitle>
                Transforming retail with Computer Vision. Our automated box
                detects products, weighs them, and generates your receipt
                instantly—no human contact required.
            </Subtitle>

            <ButtonGroup>
                <PrimaryButton>Watch Demo</PrimaryButton>
                <SecondaryButton>Technical Specs</SecondaryButton>
            </ButtonGroup>

            <VideoMockup />
        </HeroContainer>
    );
}