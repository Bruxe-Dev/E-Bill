import styled from 'styled-components';

const Section = styled.section`
  padding: 100px 24px 60px;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 48px;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2.5rem, 4vw, 3.6rem);
  margin: 0;
  text-align: center;
`;

const SectionSubtitle = styled.p`
  max-width: 720px;
  color: #cbd5e1;
  text-align: center;
  line-height: 1.8;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(260px, 1fr));
  gap: 28px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const StepCard = styled.div`
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(71, 85, 105, 0.16);
  border-radius: 30px;
  padding: 34px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  transition: transform 0.25s ease, border-color 0.25s ease;

  &:hover {
    transform: translateY(-8px);
    border-color: #60a5fa;
  }
`;

const StepNumber = styled.div`
  font-size: 3.6rem;
  font-weight: 800;
  color: rgba(96, 165, 250, 0.16);
`;

const StepTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  border-radius: 999px;
  background: rgba(96, 165, 250, 0.12);
  color: #bfdbfe;
  font-size: 0.85rem;
  font-weight: 700;
  width: max-content;
`;

const StepTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  line-height: 1.25;
`;

const StepDescription = styled.p`
  margin: 0;
  color: #94a3b8;
  line-height: 1.8;
`;

export default function Workflow() {
    const steps = [
        {
            num: '01',
            tag: 'Place Item',
            title: 'Load the smart terminal',
            desc: 'Put your items in the AI checkout device and let the camera and scale begin scanning instantly.',
        },
        {
            num: '02',
            tag: 'AI Detection',
            title: 'Automatic product recognition',
            desc: 'The CoreX engine identifies every product by shape, barcode, and weight for fast, accurate billing.',
        },
        {
            num: '03',
            tag: 'Pay & Print',
            title: 'Checkout with one scan',
            desc: 'Complete payment with QR code mobile money or card, and print the receipt automatically.',
        },
    ];

    return (
        <Section id="how">
            <SectionHeader>
                <SectionTitle>Three Simple Steps to Checkout</SectionTitle>
                <SectionSubtitle>
                    Our streamlined process makes retail smarter and faster. From item placement to instant payment, CoreX delivers a premium checkout flow that keeps lines moving.
                </SectionSubtitle>
            </SectionHeader>

            <Grid>
                {steps.map((step) => (
                    <StepCard key={step.num}>
                        <StepNumber>{step.num}</StepNumber>
                        <StepTag>{step.tag}</StepTag>
                        <StepTitle>{step.title}</StepTitle>
                        <StepDescription>{step.desc}</StepDescription>
                    </StepCard>
                ))}
            </Grid>
        </Section>
    );
}
