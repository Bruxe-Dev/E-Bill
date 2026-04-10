import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 6rem 10vw;
  background: #000;
  min-height: calc(100vh - 105px);
`;

const SectionHeader = styled(motion.div)`
  margin-bottom: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 2px solid #fff;
  padding-bottom: 2rem;

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
`;

const TitleBlock = styled.div`
  max-width: 600px;
`;

const PreTitle = styled.h4`
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #888;
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: clamp(3rem, 6vw, 4.5rem);
  font-weight: 900;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: -2px;
  line-height: 1;
`;

const SectionSubtitle = styled.p`
  max-width: 400px;
  color: #888;
  line-height: 1.6;
  font-size: 1.1rem;
  margin: 0;
`;

const WorkflowContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #222;
`;

const StepRow = styled(motion.div)`
  display: flex;
  padding: 4rem 0;
  border-bottom: 1px solid #222;
  transition: padding-left 0.4s ease;

  &:hover {
    padding-left: 2rem;
    cursor: crosshair;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    &:hover { padding-left: 0; }
  }
`;

const StepNumber = styled.div`
  flex: 0.2;
  font-size: 2.5rem;
  font-weight: 900;
  color: #fff;
`;

const StepContent = styled.div`
  flex: 0.8;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const StepTag = styled.div`
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #666;
`;

const StepTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 900;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: -1px;
`;

const StepDescription = styled.p`
  color: #888;
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 600px;
  margin: 0;
`;

const rowVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function Workflow() {
    const steps = [
        {
            num: '01',
            tag: 'Initialization',
            title: 'Load Terminal',
            desc: 'Place your items inside the smart checkout box. The internal camera and precision scale instantly detect payload presence.',
        },
        {
            num: '02',
            tag: 'Processing',
            title: 'AI Recognition',
            desc: 'The CoreX engine analyzes object geometry and density, cross-referencing our hardware model to accurately log each product.',
        },
        {
            num: '03',
            tag: 'Completion',
            title: 'Checkout & Print',
            desc: 'Transactions finalize automatically via local gateways. An instant thermal receipt validates the exchange.',
        },
    ];

    return (
        <Section>
            <SectionHeader initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <TitleBlock>
                    <PreTitle>Operations Flow</PreTitle>
                    <SectionTitle>PROCESS.</SectionTitle>
                </TitleBlock>
                <SectionSubtitle>
                    Our streamlined pipeline eliminates friction. From item placement to instant payment, CoreX defines the standard.
                </SectionSubtitle>
            </SectionHeader>

            <WorkflowContainer initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.15 } } }}>
                {steps.map((step) => (
                    <StepRow key={step.num} variants={rowVariants}>
                        <StepNumber>{step.num}</StepNumber>
                        <StepContent>
                            <StepTag>{step.tag}</StepTag>
                            <StepTitle>{step.title}</StepTitle>
                            <StepDescription>{step.desc}</StepDescription>
                        </StepContent>
                    </StepRow>
                ))}
            </WorkflowContainer>
        </Section>
    );
}
