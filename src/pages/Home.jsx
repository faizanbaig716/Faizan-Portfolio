import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Hero from '../sections/Hero';
import About from '../sections/About';
import WhyHireMe from '../sections/WhyHireMe';
import Services from '../sections/Services';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import Timeline from '../sections/Timeline';
import Contact from '../sections/Contact';

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
      <WhyHireMe />
      <Services />
      <Projects />
      <Skills />
      <Timeline />
      <Contact />
    </MainLayout>
  );
};

export default Home;
