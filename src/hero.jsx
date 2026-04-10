import React, { Suspense } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ScannerModel from './ScannerModel';
import { Link } from 'react-router-dom';

const HeroContainer = styled.section`
  display: flex;
  position: relative;
  height: calc(100vh - 105px);
  width: 100vw;
  overflow: hidden;
  background: #000;
  
  @media (max-width: 960px) {
    flex-direction: column;
    height: auto;
  }
`;

const ContentSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10vw;
  z-index: 10;
`;

const CanvasSide = styled(motion.div)`
  flex: 1;
  position: relative;
  background: #030303;
  border-left: 1px solid #1a1a1a;

  @media (max-width: 960px) {
    height: 50vh;
    border-left: none;
    border-top: 1px solid #1a1a1a;
  }
`;

const PreTitle = styled(motion.h4)`
  color: #fff;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-bottom: 24px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: -40px;
    top: 50%;
    width: 20px;
    height: 1px;
    background: #fff;
  }
`;

const Title = styled(motion.h1)`
  font-size: clamp(4rem, 8vw, 7rem);
  font-weight: 900;
  line-height: 0.9;
  letter-spacing: -3px;
  color: #fff;
  margin: 0 0 32px 0;
  text-transform: uppercase;
`;

const Subtitle = styled(motion.p)`
  color: #888;
  font-size: 1.1rem;
  max-width: 480px;
  line-height: 1.6;
  margin-bottom: 48px;
`;

const CTA = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  color: #000;
  padding: 1.5rem 3rem;
  font-weight: 800;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background 0.4s;
  width: fit-content;

  &:hover {
    background: #ccc;
  }
`;

export default function Hero() {
    return (
        <HeroContainer>
            <ContentSide>
                <PreTitle initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }}>
                    The Future is Now
                </PreTitle>
                <Title initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}>
                    Intelligent<br/>Billing.
                </Title>
                <Subtitle initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}>
                    Transforming retail with Computer Vision. Zero human contact. Pure efficiency.
                </Subtitle>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }}>
                    <CTA to="/how-it-works">Discover CoreX</CTA>
                </motion.div>
            </ContentSide>

            <CanvasSide initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
                <Suspense fallback={<div style={{color:'#444', display:'flex', height:'100%', alignItems:'center', justifyContent:'center'}}>Mounting Core...</div>}>
                    <ScannerModel />
                </Suspense>
            </CanvasSide>
        </HeroContainer>
    );
}