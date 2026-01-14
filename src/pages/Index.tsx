import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { HeroSection } from '@/components/home/HeroSection';
import { HowItWorksSection } from '@/components/home/HowItWorksSection';
import { ValuePropsSection } from '@/components/home/ValuePropsSection';
import { MasteryTreePreview } from '@/components/home/MasteryTreePreview';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <HowItWorksSection />
      <ValuePropsSection />
      <MasteryTreePreview />
      <TestimonialsSection />
    </Layout>
  );
};

export default Index;
