import React from 'react';
import Workflow from '../workflow';
import { motion } from 'framer-motion';

export default function HowItWorksPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <Workflow />
    </motion.div>
  );
}
