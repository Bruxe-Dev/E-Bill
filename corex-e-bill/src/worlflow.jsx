import styled from 'styled-components';

const Section = styled.section`
  padding: 100px 20px;
  background-color: #0a0f1a;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 50px;
  text-align: center;
  
  span {
    color: #3b82f6;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  width: 100%;
`;

const StepCard = styled.div`
  background: #111827;
  border: 1px solid #1e293b;
  padding: 40px;
  border-radius: 24px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: #3b82f6;
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  }
`;

const StepNumber = styled.div`
  font-size: 4rem;
  font-weight: 900;
  color: rgba(59, 130, 246, 0.1);
  position: absolute;
  top: 10px;
  right: 20px;
`;

const Icon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: white;
`;

const StepDescription = styled.p`
  color: #94a3b8;
  line-height: 1.6;
`;

export default function Workflow() {
    const steps = [
        {
            num: "01",
            title: "Place Product",
            desc: "Drop any item into the CoreX smart box. No need to look for barcodes or align labels."
        },
        {
            num: "02",
            title: "AI Recognition",
            desc: "Our high-speed camera uses Computer Vision to identify the product and its weight instantly."
        },
        {
            num: "03",
            title: "Instant Bill",
            desc: "Scan the generated QR code to pay via Mobile Money or card. Your receipt prints automatically."
        }
    ];

    return (
        <Section id="how">
            <SectionTitle>How <span>CoreX</span> Works</SectionTitle>
            <Grid>
                {steps.map((step, index) => (
                    <StepCard key={index}>
                        <StepNumber>{step.num}</StepNumber>
                        <Icon>{step.icon}</Icon>
                        <StepTitle>{step.title}</StepTitle>
                        <StepDescription>{step.desc}</StepDescription>
                    </StepCard>
                ))}
            </Grid>
        </Section>
    );
}
