import styled from 'styled-components';

const Section = styled.section`
  padding: 100px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  margin-bottom: 60px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 10px;
`;

const Description = styled.p`
  color: #94a3b8;
  max-width: 600px;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const FeatureCard = styled.div`
  background: rgba(30, 41, 59, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 30px;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(30, 41, 59, 0.5);
    border-color: #3b82f6;
  }
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  background: #2563eb;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 20px;
  box-shadow: 0 8px 16px rgba(37, 99, 235, 0.2);
`;

const FTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

const FText = styled.p`
  font-size: 0.9rem;
  color: #94a3b8;
  line-height: 1.5;
`;

export default function Features() {
    const features = [
        {
            title: "Edge AI Processing",
            desc: "All image recognition happens locally on the device for lightning-fast speeds."
        },
        {
            title: "Smart Scale",
            desc: "Built-in load cells for high-precision weighing of fresh produce."
        },
        {
            title: "Momo Ready",
            desc: "Integrated QR codes for instant Mobile Money payments via local gateways."
        },
        {
            title: "Auto-Thermal Print",
            desc: "Automatic receipt generation after payment confirmation."
        }
    ];

    return (
        <Section id="features">
            <Header>
                <Title>Technical <span>Capabilities</span></Title>
                <Description>Our hardware is packed with features designed for the modern Rwandan marketplace.</Description>
            </Header>
            <FeatureGrid>
                {features.map((f, i) => (
                    <FeatureCard key={i}>
                        <IconWrapper>{f.icon}</IconWrapper>
                        <FTitle>{f.title}</FTitle>
                        <FText>{f.desc}</FText>
                    </FeatureCard>
                ))}
            </FeatureGrid>
        </Section>
    );
}