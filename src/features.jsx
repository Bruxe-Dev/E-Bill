import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 6rem 10vw;
  background: #000;
  min-height: calc(100vh - 105px);
`;

const Header = styled(motion.div)`
  margin-bottom: 5rem;
  border-bottom: 2px solid #fff;
  padding-bottom: 2rem;
`;

const PreTitle = styled.h4`
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #888;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 900;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: -2px;
`;

const FeatureGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled(motion.div)`
  background: #000;
  border: 1px solid #333;
  padding: 3rem;
  transition: background 0.4s ease, border-color 0.4s ease, transform 0.4s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    background: #111;
    border-color: #fff;
    transform: translateY(-5px);
  }
`;

const NumberLabel = styled.div`
  font-size: 0.85rem;
  font-weight: 700;
  color: #666;
  margin-bottom: 2rem;
`;

const FTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 1rem;
  line-height: 1.2;
`;

const FText = styled.p`
  font-size: 1rem;
  color: #888;
  line-height: 1.6;
`;

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function Features() {
    const features = [
        {
            num: "01",
            title: "Edge AI Processing",
            desc: "All image recognition happens locally on the device for lightning-fast speeds. Zero latency, total reliability."
        },
        {
            num: "02",
            title: "Smart Scale System",
            desc: "Built-in load cells for high-precision weighing of fresh produce. Recalibrates instantly between scans."
        },
        {
            num: "03",
            title: "Momo Integration",
            desc: "Integrated QR codes for instant Mobile Money payments via local gateways. Fully compliant with Rwandan standards."
        },
        {
            num: "04",
            title: "Auto-Thermal Print",
            desc: "Automatic receipt generation right after payment confirmation. Configurable formats."
        }
    ];

    return (
        <Section>
            <Header initial="hidden" animate="visible" variants={itemVariants}>
                <PreTitle>Technical Specifications</PreTitle>
                <Title>CAPABILITIES.</Title>
            </Header>
            <FeatureGrid variants={containerVariants} initial="hidden" animate="visible">
                {features.map((f, i) => (
                    <FeatureCard key={i} variants={itemVariants}>
                        <NumberLabel>{f.num} //</NumberLabel>
                        <FTitle>{f.title}</FTitle>
                        <FText>{f.desc}</FText>
                    </FeatureCard>
                ))}
            </FeatureGrid>
        </Section>
    );
}